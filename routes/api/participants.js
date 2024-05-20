const express = require("express");
const { ctrlParticipants } = require("../../controllers");
const { validateBody } = require("../../middlewares");
const {
  ParticipantModel: { schemas },
} = require("../../models");

const router = express.Router();

router.get("/", ctrlParticipants.listParticipants);

router.post(
  "/",
  validateBody(schemas.participantSchema),
  ctrlParticipants.addParticipant
);

module.exports = router;
