const express = require("express");
const app = express();
const moment = require("moment");

const associations = require("../associations.json");
const messages = require("../messages.json");

const { verifyExistingAssociation, verifyExistingAssociationAfterCreate } = require("../middlewares/associations-mw");

// ASSOCIATIONS ///////////////////////////

// get all associations with slug
app.get("/", (req, res) => {
  res.json(associations);
});

// get one association with slug
app.get("/:slug", verifyExistingAssociation, (req, res) => {
  const association = associations.find(
    (association) => association.slug === req.params.slug
  );

  res.json(association);
});

// MESSAGES ///////////////////////////

// create a message for an association with slug
app.post("/messages/all/post", verifyExistingAssociationAfterCreate, (req, res) => {
  const newMessage = {
      ...req.body,
      time: moment().format("HH:mm:ss DD/MM"),
  };

  messages.push(newMessage);
  res.json(newMessage);
}),
  // get all messages, sorted by date (newest first)
  app.get("/messages/all", (req, res) => {
    const sortedMessages = messages.sort((a, b) => {
      return moment(b.time, "HH:mm:ss DD/MM")
      .diff(moment(a.time, "HH:mm:ss DD/MM"))
    });
    res.json(sortedMessages);
  }),

  (module.exports = app);
