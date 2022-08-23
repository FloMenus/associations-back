const associations = require('../associations.json');
const express = require('express');
const app = express();

// middleware to verify if association exists
const verifyExistingAssociation = (req, res, next) => {
    const association = associations.find((association) => association.slug === req.params.slug);
    
    if (!association) {
        res.status(404).json({ message: "Association not found" });
    } else {
        next()
    }
};

// middleware to verify if association exists after creating one
const verifyExistingAssociationAfterCreate = (req, res, next) => {
    const association = associations.find((association) => association.slug === req.body.slug);

    if (!association) {
        res.status(404).json({ message: "Association not found" });
    } else {
        next()
    }
}

module.exports = {
    verifyExistingAssociation: verifyExistingAssociation,
    verifyExistingAssociationAfterCreate: verifyExistingAssociationAfterCreate
};