const PlotDetails = require('../Model/Plot'); // Mongoose model

// CREATE: Add a new agent
const createPlot = async (req, res) => {
    try {
        const newPlot = new PlotDetails({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            status: req.body.status,
            agent_id: req.body.agent_id,
            location: req.body.location,
            area_acres: req.body.area_acres,
            zoning_type: req.body.zoning_type,
            nearby_landmarks: req.body.nearby_landmarks,
            property: req.body.property
        });

        // Save the new plot to the database
        const savedPlot = await newPlot.save();

        // Send a success response
        res.status(201).json({
            message: 'Plot registered successfully',
            plot: savedPlot
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create plot', error });
    }
};


const getPlots = async (req, res) => {
    try {
        // Extract query parameters
        const {
            title,
            description,
            price,
            status,
            agent_id,
            location,
            area_acres,
            zoning_type,
            nearby_landmarks
        } = req.query;

        // Build a filter object based on query parameters
        const filter = {};

        if (title) filter.title = { $regex: title, $options: 'i' }; // Case-insensitive
        if (description) filter.description = { $regex: description, $options: 'i' };
        if (price) filter.price = price;
        if (status) filter.status = status;
        if (agent_id) filter.agent_id = agent_id;
        if (location) filter.location = { $regex: location, $options: 'i' };
        if (area_acres) filter.area_acres = area_acres;
        if (zoning_type) filter.zoning_type = zoning_type;
        if (nearby_landmarks) filter.nearby_landmarks = { $regex: nearby_landmarks, $options: 'i' };

        // Fetch plots based on filter criteria
        const plots = await PlotDetails.find(filter);

        res.status(200).json({
            message: 'Plots retrieved successfully',
            plots
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve plots', error });
    }
};


const updatePlot = async (req, res) => {
    try {
        const plotId = req.params.plot_id;

        console.log(plotId)

        // Find and update the plot with the provided data
        const updatedPlot = await PlotDetails.findByIdAndUpdate(
            plotId,
            {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                status: req.body.status,
                agent_id: req.body.agent_id,
                location: req.body.location,
                area_acres: req.body.area_acres,
                zoning_type: req.body.zoning_type,
                nearby_landmarks: req.body.nearby_landmarks
            },
            { new: true } // Return the updated document
        );

        // Check if the plot was found and updated
        if (!updatedPlot) {
            return res.status(404).json({ message: 'Plot not found' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Plot updated successfully',
            plot: updatedPlot
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update plot', error });
    }
};


const deletePlot = async (req, res) => {
    try {
        const plotId = req.params.plot_id;

        // Find and delete the plot by ID
        const deletedPlot = await PlotDetails.findByIdAndDelete(plotId);

        // Check if the plot was found and deleted
        if (!deletedPlot) {
            return res.status(404).json({ message: 'Plot not found' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Plot deleted successfully',
            plot: deletedPlot
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete plot', error });
    }
};




module.exports = { createPlot,updatePlot,deletePlot,getPlots };
