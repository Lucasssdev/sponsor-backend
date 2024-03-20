const router = require("express").Router();
const SponsorController = require("../controllers/sponsor.controller");

router.post("/create", async (request, response) => {
  let payload = request.body;
  const { status, data } = await SponsorController.createSponsor(payload);
  response.status(status).send(data).end();
});

router.delete("/:id", async (request, response) => {
  let sponsorId = request.params.id;

  const { status, data } = await SponsorController.deleteSponsor(sponsorId);
  response.status(status).send(data).end();
});

router.patch("/update/:id", async (request, response) => {
  let sponsorId = request.params.id;
  let payload = request.body;

  const { status, data } = await SponsorController.updateSponsor(
    sponsorId,
    payload
  );

  response.status(status).send(data).end();
});

router.get("/all", async (request, response) => {
  const { status, data } = await SponsorController.getAllSponsors();

  response.status(status).send(data).end();
});

router.get("/:id", async (request, response) => {
  let sponsorId = request.params.id;
  const { status, data } = await SponsorController.getSponsor(sponsorId);

  response.status(status).send(data).end();
});

module.exports = router;
