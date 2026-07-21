import { prisma } from "../../lib/prisma";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function CatalogoPage() {
  const produtos = await prisma.produto.findMany();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Catálogo de Produtos</h1>
        <p className="text-zinc-400 mb-8">Confira os melhores eletrônicos disponíveis na nossa loja.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <div 
              key={produto.id} 
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between shadow-lg hover:border-zinc-700 transition-all"
            >
              <div>
                <div className="w-full h-48 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-500 overflow-hidden relative">
                  {produto.imagemUrl ? (
                    <Image 
                      src={produto.imagemUrl} 
                      alt={produto.nome} 
                      fill 
                      className="object-cover"
                    />
                  ) : (
                    <span>Sem imagem</span>
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-1">{produto.nome}</h2>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {produto.descricao || "Sem descrição informada."}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
                <span className="text-xl font-bold text-emerald-400">
                  R$ {produto.preco.toFixed(2)}
                </span>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          ))}

          {produtos.length === 0 && (
            <p className="text-zinc-500 col-span-full text-center py-12">
              Nenhum produto cadastrado no momento. Use o Prisma Studio para adicionar alguns!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}