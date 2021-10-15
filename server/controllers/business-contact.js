let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let BContact = require('../models/business-contact');

module.exports.displayContactList = (req, res, next) => {
    BContact.find((err, businessContactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business-contact/list', 
            {title: 'Business Contacts', 
            ContactList: businessContactList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business-contact/add', {title: 'Add Contacts', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBContact = BContact({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "description": req.body.description
        });

        BContact.create(newBContact, (err, BContact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-contact');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BContact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business-contact/edit', {title: 'Edit Business Contact', business_contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBContact = BContact({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "description": req.body.description
    });

    BContact.updateOne({_id: id}, updatedBContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-contact');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BContact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect('/business-contact');
        }
    });
}