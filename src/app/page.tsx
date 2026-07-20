"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Navbar } from "~/_components/Navbar";
import { Footer } from "~/_components/Footer";

export default function HomePage() {
  const [typingText, setTypingText] = useState("");
  const CompleteText = "Os Melhores Preços do Mercado!";

  useEffect(() => {
    setTypingText(""); //comeca vazio
    let i = 0;

    const intervalId = setInterval(() => {
      if (i < CompleteText.length) {
        // adiciona proximo character
        setTypingText((previousText) => previousText + CompleteText.charAt(i));
        i++;
      } else {
        clearInterval(intervalId); // limpa quando termina o texto
      }
    }, 50); // 50 ms de velocidade

    // função de limpeza
    return () => {
      clearInterval(intervalId);
    };
  }, []); // roda apenas uma vez ao montar o componente

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-700 via-green-700 to-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-32">
        <h1 className="text-center text-[150px] text-white/70">
          <span className="text-green-400">{"{"}</span>
          Eletrostruct
          <span className="text-green-400">{"}"}</span>
        </h1>
        <p className="text-[25px] text-white/60">
          {typingText}
          <span className="ml-1 animate-pulse font-light text-yellow-100">
            |
          </span>
        </p>
      </div>

      <Footer />
    </main>
  );
}
