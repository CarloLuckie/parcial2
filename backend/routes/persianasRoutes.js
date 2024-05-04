const express = require('express');
const router = express.Router();


const { getPersianas, createPersiana, updatePersiana, deletePersiana } = require('../controller/persianasController');

router.get('/', getPersianas);
router.post('/', createPersiana);
router.put('/:id', updatePersiana);
router.delete('/:id', deletePersiana);

module.exports = router;

