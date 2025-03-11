const express = require('express');
const router = express.Router();
const { CreateAparment,UpdateAparment,GetAparment,DeleteAparment } = require('../Controller/aparment'); 

// Route for creating a new plot
router.post('/CreateAparment', CreateAparment);
router.put('/UpdateAparment/:aparment_id', UpdateAparment );
router.get('/GetAparment',GetAparment );
router.delete('/DeleteAparment/:aparment_id',DeleteAparment );



module.exports = router;