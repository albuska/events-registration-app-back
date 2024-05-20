const { ctrlWrapper } = require("../../helpers");
const {
  ParticipantModel: { Participant },
} = require("../../models");

const addParticipant = async (req, res) => {
  const { _id: owner } = req.event;
  const { body } = req;
  const result = await Participant.create({ ...body, owner });
  res.status(201).json(result);
};

module.exports = {
  addParticipant: ctrlWrapper(addParticipant),
};
