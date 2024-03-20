// sponsor.controller.js
const sponsor = require("../models/sponsors.model");
const Sponsor = new sponsor();

const sponsorController = {
  createSponsor: async (newSponsor) => {
    return await Sponsor.createSponsor(newSponsor);
  },
  deleteSponsor: async (sponsorId) => {
    return await Sponsor.deleteSponsor(sponsorId);
  },
  updateSponsor: async (sponsorId, payload) => {
    return await Sponsor.updateSponsor(sponsorId, payload);
  },
  getAllSponsors: async () => {
    return await Sponsor.getAllSponsors();
  },
  getSponsor: async (id) => {
    return await Sponsor.getSponsor(id);
  },
};

module.exports = sponsorController;
