const { ctrlWrapper } = require("../../helpers");
const {
  ParticipantModel: { Participant },
} = require("../../models");

const listParticipants = async (req, res) => {
  const result = await Participant.find();
  console.log(result, "result");

  res.status(200).json({
    result,
  });
};

module.exports = {
  listParticipants: ctrlWrapper(listParticipants),
};
