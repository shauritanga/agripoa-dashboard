import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "./firebase";
import { signUp, type UserProfile } from "./auth";

// Cooperative types
export interface Cooperative {
  id: string;
  name: string;
  registrationNumber: string;
  chairman: string;
  location: string;
  region: string;
  phone: string;
  email: string;
  members: number;
  activeFarmers: number;
  totalLandArea: string;
  primaryCrops: string[];
  status: "Active" | "Pending Review" | "Suspended";
  registrationDate: Date;
  lastActivity: Date;
  revenue: string;
  compliance: "Compliant" | "Under Review" | "Non-Compliant";
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string; // Admin user ID who created this cooperative
}

export interface CooperativeManager {
  cooperativeId: string;
  name: string;
  email: string;
  phone: string;
  role: "Manager";
  status: "Active" | "Suspended";
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCooperativeData {
  name: string;
  registrationNumber: string;
  chairman: string;
  location: string;
  region: string;
  phone: string;
  email: string;
  managerName: string;
  managerEmail: string;
  managerPhone: string;
  primaryCrops: string[];
}

// Generate a secure temporary password
export const generateTemporaryPassword = (): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

// Create a new cooperative and manager account
export const createCooperative = async (
  cooperativeData: CreateCooperativeData,
  adminUserId: string
): Promise<{
  cooperative: Cooperative;
  manager: CooperativeManager;
  temporaryPassword: string;
}> => {
  try {
    // Generate unique cooperative ID
    const cooperativeId = doc(collection(db, "cooperatives")).id;

    // Check if registration number already exists
    const existingCoopQuery = query(
      collection(db, "cooperatives"),
      where("registrationNumber", "==", cooperativeData.registrationNumber)
    );
    const existingCoopSnapshot = await getDocs(existingCoopQuery);

    if (!existingCoopSnapshot.empty) {
      throw new Error(
        "A cooperative with this registration number already exists"
      );
    }

    // Check if manager email already exists
    const existingManagerQuery = query(
      collection(db, "users"),
      where("email", "==", cooperativeData.managerEmail)
    );
    const existingManagerSnapshot = await getDocs(existingManagerQuery);

    if (!existingManagerSnapshot.empty) {
      throw new Error("A user with this email address already exists");
    }

    // Generate temporary password for manager
    const temporaryPassword = generateTemporaryPassword();

    // Create cooperative document
    const cooperative: Cooperative = {
      id: cooperativeId,
      name: cooperativeData.name,
      registrationNumber: cooperativeData.registrationNumber,
      chairman: cooperativeData.chairman,
      location: cooperativeData.location,
      region: cooperativeData.region,
      phone: cooperativeData.phone,
      email: cooperativeData.email,
      members: 0,
      activeFarmers: 0,
      totalLandArea: "0 acres",
      primaryCrops: cooperativeData.primaryCrops,
      status: "Pending Review",
      registrationDate: new Date(),
      lastActivity: new Date(),
      revenue: "TSh 0",
      compliance: "Under Review",
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: adminUserId,
    };

    // Save cooperative to Firestore
    await setDoc(doc(db, "cooperatives", cooperativeId), {
      ...cooperative,
      registrationDate: Timestamp.fromDate(cooperative.registrationDate),
      lastActivity: Timestamp.fromDate(cooperative.lastActivity),
      createdAt: Timestamp.fromDate(cooperative.createdAt),
      updatedAt: Timestamp.fromDate(cooperative.updatedAt),
    });

    // Create manager user account using the signUp function
    const userCredential = await signUp(
      cooperativeData.managerEmail,
      temporaryPassword,
      cooperativeData.managerName,
      "cooperative",
      cooperativeId
    );

    // Create manager document
    const manager: CooperativeManager = {
      cooperativeId: cooperativeId,
      name: cooperativeData.managerName,
      email: cooperativeData.managerEmail,
      phone: cooperativeData.managerPhone,
      role: "Manager",
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Save manager to Firestore
    await setDoc(doc(db, "cooperative_managers", userCredential.user.uid), {
      ...manager,
      createdAt: Timestamp.fromDate(manager.createdAt),
      updatedAt: Timestamp.fromDate(manager.updatedAt),
    });

    console.log("Cooperative and manager created successfully:", {
      cooperativeId,
      managerId: userCredential.user.uid,
    });

    return { cooperative, manager, temporaryPassword };
  } catch (error) {
    console.error("Error creating cooperative:", error);
    throw error;
  }
};

// Get all cooperatives
export const getCooperatives = async (): Promise<Cooperative[]> => {
  try {
    const cooperativesQuery = query(
      collection(db, "cooperatives"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(cooperativesQuery);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        registrationDate: data.registrationDate.toDate(),
        lastActivity: data.lastActivity.toDate(),
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      } as Cooperative;
    });
  } catch (error) {
    console.error("Error fetching cooperatives:", error);
    throw error;
  }
};

// Get cooperative by ID
export const getCooperativeById = async (
  id: string
): Promise<Cooperative | null> => {
  try {
    const docRef = doc(db, "cooperatives", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        ...data,
        id: docSnap.id,
        registrationDate: data.registrationDate.toDate(),
        lastActivity: data.lastActivity.toDate(),
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      } as Cooperative;
    }

    return null;
  } catch (error) {
    console.error("Error fetching cooperative:", error);
    throw error;
  }
};

// Update cooperative
export const updateCooperative = async (
  id: string,
  updates: Partial<Cooperative>
): Promise<void> => {
  try {
    const docRef = doc(db, "cooperatives", id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.fromDate(new Date()),
    });
  } catch (error) {
    console.error("Error updating cooperative:", error);
    throw error;
  }
};

// Delete cooperative
export const deleteCooperative = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "cooperatives", id));
  } catch (error) {
    console.error("Error deleting cooperative:", error);
    throw error;
  }
};

// Get cooperative manager
export const getCooperativeManager = async (
  cooperativeId: string
): Promise<CooperativeManager | null> => {
  try {
    const managerQuery = query(
      collection(db, "cooperative_managers"),
      where("cooperativeId", "==", cooperativeId)
    );
    const snapshot = await getDocs(managerQuery);

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      const data = doc.data();
      return {
        ...data,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      } as CooperativeManager;
    }

    return null;
  } catch (error) {
    console.error("Error fetching cooperative manager:", error);
    throw error;
  }
};
