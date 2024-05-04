const asyncHandler = require('express-async-handler')
const Persianas = require('../models/persianasModel')
const mongoose = require('mongoose');


const getPersianas = asyncHandler(async (req, res) => {
    const persianas = await Persianas.find();
    res.status(200).json(persianas);
});

const createPersiana = asyncHandler(async (req, res) => {
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({ error: "Por favor completa todos los campos requeridos." });
    }
    const persiana = await Persianas.create({
        name: req.body.name,
        description: req.body.description
    });
    
    res.status(201).json(persiana);
});

const updatePersiana = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "ID de la persiana no válido." });
    }
    const persiana = await Persianas.findById(req.params.id);
    if (!persiana) {
        return res.status(404).json({ error: 'Persiana no encontrada' });
    }
    const updatedPersiana = await Persianas.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedPersiana);
});

const deletePersiana = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "ID de la persiana no válido." });
    }
    const persiana = await Persianas.findById(req.params.id);
    if (!persiana) {
        return res.status(404).json({ error: 'Persiana no encontrada' });
    }
    await persiana.deleteOne();
    res.status(200).json({ message: `Persiana eliminada: ${req.params.id}` });
});

module.exports = {
    getPersianas,
    createPersiana,
    updatePersiana,
    deletePersiana
};
