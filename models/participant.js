const { Schema, model, models } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const ESelectedRadio = {
  SOCIAL_MEDIA: "social media",
  FRIENDS: "friends",
  FOUND_MYSELF: "found myself",
};

const emailRegExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const participantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minLength: 20,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegExp,
    },
    dateOfBirth: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    selectedRadio: {
      type: String,
      enum: ESelectedRadio,
      default: ESelectedRadio.SOCIAL_MEDIA,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const schemas = { participantSchema };

participantSchema.post("save", handleMongooseError);

const Participant =
  models.Participant || model("Participant", participantSchema);

module.exports = {
  Participant,
  schemas,
};
