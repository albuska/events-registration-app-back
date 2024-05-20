const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: 40,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    event_date: {
      type: String,
      required: [true, "Event_date is required"],
    },
    organizer: {
      type: String,
      required: [true, "Event_date is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const schemas = {
  eventSchema,
};

eventSchema.post("save", handleMongooseError);

const Event = model("participant", eventSchema);

module.exports = {
  Event,
  schemas,
};
