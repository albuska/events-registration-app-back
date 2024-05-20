const express = require("express");
const { ctrlEvents } = require("../../controllers");
// import { validateBody } from "../../middlewares/validateBody";
// import { eventSchema } from "../../models/event";

const router = express.Router();

router.get("/", ctrlEvents.listEvents);

// router.post(
//   "/",
//   validateBody(eventSchema),

//   ctrlEvents.addEvent
// );

// router.delete("/:id", ctrlEvents.removeEvent);

// router.put("/:id", validateBody(schemasEvent), ctrlEvents.updateEvent);

module.exports = router;
