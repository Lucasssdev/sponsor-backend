const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Sponsor {
  createSponsor = async (sposor) => {
    await prisma.$connect();
    const { name, cnpj, description } = sposor;
    return await prisma.sponsors
      .create({
        data: {
          name,
          cnpj,
          description,
        },
      })
      .then(async (sponsor) => {
        await prisma.$disconnect();
        return {
          status: 200,
          data: sponsor,
        };
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        return {
          status: 500,
          data: "falha ao criar patrocinador",
        };
      });
  };

  getAllSponsors = async () => {
    await prisma.$connect();
    return await prisma.sponsors
      .findMany()
      .then(async (sponsors) => {
        await prisma.$disconnect();
        return {
          status: 200,
          data: sponsors,
        };
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        return {
          status: 500,
          data: "falha ao buscar patrocinadores",
        };
      });
  };

  getSponsor = async (id) => {
    await prisma.$connect();
    return await prisma.sponsors
      .findUnique({
        where: {
          id,
        },
      })
      .then(async (sponsor) => {
        await prisma.$disconnect();
        return {
          status: 200,
          data: sponsor,
        };
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        return {
          status: 500,
          data: "falha ao buscar patrocinador",
        };
      });
  };

  updateSponsor = async (id, updateData) => {
    for (let data in updateData) {
      if (updateData[data] === null) {
        delete updateData[data];
      }
    }
    await prisma.$connect();
    return await prisma.sponsors
      .update({
        where: {
          id,
        },
        data: {
          ...updateData,
        },
      })
      .then(async (sponsor) => {
        await prisma.$disconnect();
        return {
          status: 200,
          data: sponsor,
        };
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        return {
          status: 500,
          data: "falha ao atualizar patrocinador",
        };
      });
  };

  deleteSponsor = async (id) => {
    await prisma.$connect();
    return await prisma.sponsors
      .delete({
        where: {
          id,
        },
      })
      .then(async () => {
        await prisma.$disconnect();
        return {
          status: 200,
          data: "Patrocinador excluído com sucesso",
        };
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        return {
          status: 500,
          data: "falha ao excluir patrocinador",
        };
      });
  };
}

module.exports = Sponsor;
