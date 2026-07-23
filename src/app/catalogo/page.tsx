import { Navbar } from "~/_components/Navbar";
import { Footer } from "~/_components/Footer";
import { prisma } from "~/lib/prisma";

export default async function CatalogoPage() {
  const produtos = await prisma.produto.findMany();

  return (
    <main className="from-green via-blue- min-h-screen bg-gradient-to-b to-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-32">
      <div className="flex items-start justify-between gap-4">
        {produtos.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>R$ {produto.preco.toFixed(2)}</p>
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}