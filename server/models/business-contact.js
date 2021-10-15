// require modules for the User Model
let mongoose = require('mongoose');

let BusinessContact = mongoose.Schema
(
    {
        name: String,
        phone: String,
        email: String,
        description: String
    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model('BusinessContact', BusinessContact);