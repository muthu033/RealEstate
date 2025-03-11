const AparmentDetails = require('../Model/Villa'); // Mongoose model

// CREATE: Add a new Villa
const CreateVilla = async (req, res) => {
    try {
        const newVilla = new VillaDetails({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            status: req.body.status,
            agent_id: req.body.agent_id,
            location: req.body.location,
            features: req.body.features,
            bathrooms: req.body.bathrooms,
            floors: req.body.floors,
            area_sqft: req.body.area_sqft,
            parking_spaces: req.body.parking_spaces,
            amenities: req.body.amenities,
            has_garden: req.body.has_garden,
            has_pool: req.body.has_pool,
            images: req.body.images,
            property: req.body.property
        });

        // Save the new plot to the database
        const savedVilla = await newVilla.save();

        // Send a success response
        res.status(201).json({
            message: 'Villa registered successfully',
            villa: savedVilla
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create Villa', error });
    }
};



const GetVilla = async (req, res) => {
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
            bathrooms,
            floors,
            area_sqft,
            parking_spaces,
            amenities,
            has_garden,
            has_pool,
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
        if (bathrooms) filter.bathrooms = { $regex: bathrooms, $options: 'i' };
        if (floors) filter.floors = { $regex: floors, $options: 'i' };
        if (area_sqft) filter.area_sqft = { $regex: area_sqft, $options: 'i' };
        if (parking_spaces) filter.parking_spaces = { $regex: parking_spaces, $options: 'i' };
        if (amenities) filter.amenities = { $regex: amenities, $options: 'i' };
        if (has_garden) filter.has_garden = { $regex: has_garden, $options: 'i' };
        if (has_pool) filter.has_pool = { $regex: has_pool, $options: 'i' };
        if (images) filter.images = images;

        // Fetch plots based on filter criteria
        const villa = await VillaDetails.find(filter);

        res.status(200).json({
            message: 'Villa retrieved successfully',
            villa
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve Villa', error });
    }
};


const UpdateVilla = async (req, res) => {
    try {
        const villaId = req.params.villa_id;

        console.log(villaId)

        // Find and update the plot with the provided data
        const updatedVilla = await VillaDetails.findByIdAndUpdate(
            villaId,
            {
                title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            status: req.body.status,
            agent_id: req.body.agent_id,
            location: req.body.location,
            features: req.body.features,
            bathrooms: req.body.bathrooms,
            floors: req.body.floors,
            area_sqft: req.body.area_sqft,
            parking_spaces: req.body.parking_spaces,
            amenities: req.body.amenities,
            has_garden: req.body.has_garden,
            has_pool: req.body.has_pool,
            images: req.body.images
            },
            { new: true } // Return the updated document
        );

        // Check if the plot was found and updated
        if (!updatedVilla) {
            return res.status(404).json({ message: 'Villa not found' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Villa updated successfully',
            villa: updatedVilla
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update Villa', error });
    }
};


const DeleteVilla = async (req, res) => {
    try {
        const villaId = req.params.villa_id;

        // Find and delete the plot by ID
        const deletedVilla = await VillaDetails.findByIdAndDelete(villaId);

        // Check if the plot was found and deleted
        if (!deletedVilla) {
            return res.status(404).json({ message: 'Aparment not found' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Villa deleted successfully',
            villa: deletedVilla
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete Villa', error });
    }
};




module.exports = { CreateVilla,UpdateVilla,DeleteVilla,GetVilla };
