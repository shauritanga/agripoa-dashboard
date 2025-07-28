import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),

  // Authentication routes
  route("login", "./routes/login.tsx"),
  route("forgot-password", "./routes/forgot-password.tsx"),

  // Admin Routes with shared layout
  ...prefix("admin", [
    layout("./routes/admin/layout.tsx", [
      index("./routes/admin/index.tsx"),
      route("farmers", "./routes/admin/farmers.tsx"),
      route("users", "./routes/admin/users.tsx"),
      route("reports", "./routes/admin/reports.tsx"),
      route("payments", "./routes/admin/payments.tsx"),
      route("notifications", "./routes/admin/notifications.tsx"),
      route("settings", "./routes/admin/settings.tsx"),
      route("audit", "./routes/admin/audit.tsx"),
      route("support", "./routes/admin/support.tsx"),
    ]),
  ]),

  // Cooperative Routes with shared layout
  ...prefix("cooperative", [
    layout("./routes/cooperative/layout.tsx", [
      index("./routes/cooperative/index.tsx"),
      route("farmers", "./routes/cooperative/farmers.tsx"),
      route("sales", "./routes/cooperative/sales.tsx"),
      route("products", "./routes/cooperative/products.tsx"),
      route("users", "./routes/cooperative/users.tsx"),
      route("analytics", "./routes/cooperative/analytics.tsx"),
      route("reports", "./routes/cooperative/reports.tsx"),
      route("settings", "./routes/cooperative/settings.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
