import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex w-full items-center bg-black px-8 py-4 text-white/70">
      {/*Lado Esquerdo*/}
      <div className="flex-1"></div>

      {/*Centro*/}
      <div className="flex justify-center gap-8 font-bold">
        <Link href="/" className="hover:text-green-400">
          Home
        </Link>

        <Link href="/catalogo" className="hover:text-green-400">
          Catálogo
        </Link>

        <Link href="/sobre" className="hover:text-green-400">
          Sobre
        </Link>
      </div>

      {/*Lado Direito*/}
      <div className="flex flex-1 justify-end font-bold">
        <Link href="/login" className="hover:text-green-400">
          Login
        </Link>
      </div>
    </nav>
  );
}
