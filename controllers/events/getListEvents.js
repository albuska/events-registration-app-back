const { ctrlWrapper } = require("../../helpers");
const {
  EventModel: { Event },
} = require("../../models");

const listEvents = async (req, res) => {
  const result = await Event.find();
  console.log(result, "result");

  res.status(200).json({
    result,
  });
};

module.exports = {
  listEvents: ctrlWrapper(listEvents),
};
