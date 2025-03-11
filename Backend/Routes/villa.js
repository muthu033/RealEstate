const express = require('express');
const router = express.Router();
const { CreateVilla,UpdateVilla,GetVilla,DeleteVilla } = require('../Controller/villa'); 

// Route for creating a new plot
router.post('/CreateVAilla', CreateVilla);
router.put('/UpdateVilla/:villa_id', UpdateVilla );
router.get('/GetVilla',GetVilla );
router.delete('/DeleteVilla/:villa_id',DeleteVilla );



module.exports = router;