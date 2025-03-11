const express = require('express');
const router = express.Router();
const { createPlot,updatePlot,getPlots,deletePlot } = require('../Controller/plot'); 

// Route for creating a new plot
router.post('/createplot', createPlot);
router.put('/updatePlot/:plot_id', updatePlot );
router.get('/getPlot',getPlots);
router.delete('/deletePlot/:plot_id',deletePlot);



module.exports = router;
