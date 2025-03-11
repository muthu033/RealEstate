const AparmentDetails = require('../Model/Aparment'); // Mongoose model

// CREATE: Add a new plot
const CreateAparment = async (req, res) => {
    try {
        const newAparment = new AparmentDetails({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            status: req.body.status,
            agent_id: req.body.agent_id,
            location: req.body.location,
            features: req.body.features,
            area_sqft: req.body.area_sqft,
            amenities: req.body.amenities,
            nearby_landmarks: req.body.nearby_landmarks,
            images: req.body.images,
            property: req.body.property
        });

        // Save the new plot to the database
        const savedAparment = await newAparment.save();

        // Send a success response
        res.status(201).json({
            message: 'Aparment registered successfully',
            aparment: savedAparment
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create Aparment', error });
    }
};



const GetAparment = async (req, res) => {
    try {
        // Extract query parameters
        const {
            title,
            description,
            price,
            status,
            agent_id,
            location,
            features,
            area_sqft,
            amenities,
            nearby_landmarks,
            images
        } = req.query;

        // Build a filter object based on query parameters
        const filter = {};

        if (title) filter.title = { $regex: title, $options: 'i' }; // Case-insensitive
        if (description) filter.description = { $regex: description, $options: 'i' };
        if (price) filter.price = { $regex: price, $options: 'i' };
        if (status) filter.status = { $regex: status, $options: 'i' };
        if (agent_id) filter.agent_id = { $regex: agent_id, $options: 'i' };
        if (location) filter.location = { $regex: location, $options: 'i' };
        if (features) filter.features = { $regex: features, $options: 'i' };
        if (area_sqft) filter.area_sqft = { $regex: area_sqft, $options: 'i' };
        if (amenities) filter.amenities = { $regex: amenities, $options: 'i' };
        if (nearby_landmarks) filter.nearby_landmarks = { $regex: nearby_landmarks, $options: 'i' };
        if (images) filter.images = images;

        // Fetch plots based on filter criteria
        const aparment = await AparmentDetails.find(filter);

        res.status(200).json({
            message: 'Aparment retrieved successfully',
            aparment
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve Aparment', error });
    }
};


const UpdateAparment = async (req, res) => {
    try {
        const aparmentId = req.params.aparment_id;

        console.log(aparmentId)

        // Find and update the plot with the provided data
        const updatedAparment = await AparmentDetails.findByIdAndUpdate(
            aparmentId,
            {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                status: req.body.status,
                agent_id: req.body.agent_id,
                location: req.body.location,
                features: req.body.features,
                area_sqft: req.body.area_sqft,
                amenities: req.body.amenities,
                nearby_landmarks: req.body.nearby_landmarks,
                images: req.body.images
            },
            { new: true } // Return the updated document
        );

        // Check if the plot was found and updated
        if (!updatedAparment) {
            return res.status(404).json({ message: 'Aparment not found' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Aparment updated successfully',
            aparment: updatedAparment
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update Aparment', error });
    }
};


const DeleteAparment = async (req, res) => {
    try {
        const aparmentId = req.params.aparment_id;

        // Find and delete the plot by ID
        const deletedAparment = await AparmentDetails.findByIdAndDelete(aparmentId);

        // Check if the plot was found and deleted
        if (!deletedAparment) {
            return res.status(404).json({ message: 'Aparment not found' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Aparment deleted successfully',
            aparment: deletedAparment
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete Aparment', error });
    }
};




module.exports = { CreateAparment,UpdateAparment,DeleteAparment,GetAparment };
