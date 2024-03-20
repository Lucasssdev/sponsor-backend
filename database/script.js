// import { PrismaClien t } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//    Users( cod, name, email, password ),

async function main() {
  const user = await prisma.users.create({
    data: {
      name: "Lucas",
      email: "Lucas@prisma.io",
      password: "123456",
    },
  });
  await prisma.users.findMany({
    include: user,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
