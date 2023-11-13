const entry = require('../models/entries.model');

const getEntries = async (req, res) => {
    try {
        const entries = await entry.getAllEntries();
        res.status(200).json(entries);
    } catch (error) {
        res.status(400).json({message:`ERROR: ${error.stack}`});
    }
}

const createEntry = async (req, res) => {
    try {
        const response = await entry.createEntry(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({message:`ERROR: ${error.stack}`});
    }
}

const updateEntry = async (req, res) => {
    try {
        const response = await entry.updateEntry(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message:`ERROR: ${error.stack}`});
    }
}

const deleteEntry = async (req, res) => {
    try {
        const response = await entry.deleteEntry(req.body.title);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message:`ERROR: ${error.stack}`});
    }
}

const controllers = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
}

module.exports = controllers;
