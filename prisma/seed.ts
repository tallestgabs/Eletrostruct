import { PrismaClient } from "../generated/prisma";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!, // file:./dev.db
});
const prisma = new PrismaClient({ adapter });

async function main() {

  await prisma.produto.upsert({
    where: { id: "cabo-flex-25mm" },
    update: {},
    create: {
      id: "cabo-flex-25mm",
      nome: "Cabo Flex 2,5mm",
      descricao: "Cabo flexível 2,5mm para instalações residenciais",
      preco: 12.9,
    },
  });

  console.log("Seed concluído: 2 categorias e 2 produtos");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
