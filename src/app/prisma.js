const PrismaClient = require("@prisma/client");

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = PrismaClient;
} else {
  if (!global.prisma) {
    global.prisma = PrismaClient;
  }
  prisma = global.prisma;
}

module.exports = prismas;
