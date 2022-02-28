const express = require('express');
const contacts = require("../controllers/contact.controller");

module.exports = app =>{
    const router = express.Router();

    //create a new contact
    router.post("/", contacts.create);

    //retrieve all contacts
    router.get("/", contacts.findAll);

    //retrieve all favorites contacts
    router.get("/favorite", contacts.findAllFavorite);

    // retrieve a single contact with id
    router.get("/:id", contacts.findOne);

    //update a contact with id
    router.put("/:id", contacts.update);

    //delete a contact with id
    router.delete("/:id", contacts.delete);

    //delete all contacts
    router.delete("/", contacts.deleteAll);

    app.use("/api/contacts", router);
};