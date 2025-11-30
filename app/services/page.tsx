import React from "react";
import { Construction } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen justify-center items-center gap-6 bg-gradient-to-br from-primary via-primary/80 to-secondary">
      <h1 className="text-4xl text-white">Under Develop</h1>
      <Construction size={50} color="white" />
    </div>
  );
}
