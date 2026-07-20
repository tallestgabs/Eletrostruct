"use client";

import Link from "next/link";
import { Navbar } from "~/_components/Navbar";
import { Footer } from "~/_components/Footer";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-700 to-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-32">
        <h1 className="text-center text-[150px] text-white/70">
          <span className="text-green-400">{"{"}</span>
          Sobre Page
          <span className="text-green-400">{"}"}</span>
        </h1>
      </div>

      <Footer />
    </main>
  );
}
