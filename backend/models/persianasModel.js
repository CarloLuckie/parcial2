const mongoose = require('mongoose');

const persianaSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor ingresa el nombre del modelo de persiana"]
    },
    description: {
        type: String,
        required: [true, "Por favor ingresa una descripción del modelo de persiana"]
    },
}, {
    timestamps: true 
});

module.exports = mongoose.model('Persiana', persianaSchema);
