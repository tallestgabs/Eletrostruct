"use client";

import Link from "next/link";
import { Navbar } from "~/_components/Navbar";
import { Footer } from "~/_components/Footer";

export default function CatalogoPage() {
  return (
    <main className="from-green via-blue- min-h-screen bg-gradient-to-b to-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-32">
        <h1 className="text-center text-[150px] text-white/70">
          <span className="text-green-400">{"{"}</span>
          Catalogo Page
          <span className="text-green-400">{"}"}</span>
        </h1>
      </div>

      <Footer />
    </main>
  );
}
