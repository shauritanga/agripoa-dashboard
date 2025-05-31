import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Agripoa - Agricultural Platform for Tanzania" },
    {
      name: "description",
      content:
        "Welcome to Agripoa - Empowering Tanzanian farmers and cooperatives!",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
