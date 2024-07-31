const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    pn: {
        type: String,
        required: true,
        unique: true
    },
    cliente: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    elaborado_por: {
        type: String,
        required: true
    },
    blindagem: {
        type: String,
        required: true
    },
    nucleo: {
        type: String,
        required: true
    },
    perdas: {
        type: String,
        required: true,
    },
    nucleo_od: {
        type: String,
        required: true,
    },
    nucleo_id: {
        type: String,
        required: true,
    },
    nucleo_h: {
        type: String,
        required: true,
    },
    peso_nucleo: {
        type: String,
        required: true,
    },
    corrente: {
        type: String,
        required: true,
    },
    aplicacao: {
        type: String,
        required: true,
    },
    bmax: {
        type: String,
        required: true,
    },
    frequencia: {
        type: String,
        required: true,
    },
    primarios: [mongoose.Schema.Types.Mixed],
    secundarios: [mongoose.Schema.Types.Mixed],
    fftotal: {
        type: String,
        required: true,
    },
    deltat: {
        type: String,
        required: true,
    },
    dim_finais: {
        type: String,
        required: true,
    },
    pot_sec: {
        type: String,
        required: true,
    },
    peso_total: {
        type: String,
        required: true,
    },
    peso_cobre: {
        type: String,
        required: true,
    },
    relacao: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('transcalc_peca', produtoSchema);