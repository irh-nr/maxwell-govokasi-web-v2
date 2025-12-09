import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-primary/80 to-secondary">
      <div className="flex mx-auto items-center justify-center min-h-screen text-white gap-2">
        <h1 className="font-bold text-3xl">404</h1>
        <span>|</span>
        <p>Pages Not Found.</p>
      </div>
    </main>
  );
}
