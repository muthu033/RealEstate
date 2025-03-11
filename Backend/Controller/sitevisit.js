const PlotDetails = require('../Model/SiteVisit'); // Mongoose model


const getSiteVisit = async (req, res) => {
    try {
        // Extract query parameters
        const {
            user_id,
            property_id,
            visit_date,
            status,
            feedback
        } = req.query;

        // Build a filter object based on query parameters
        const filter = {};

        if (user_id) filter.user_id = { $regex: user_id, $options: 'i' }; // Case-insensitive
        if (property_id) filter.property_id = { $regex: property_id, $options: 'i' };
        if (visit_date) filter.visit_date = { $regex: visit_date, $options: 'i' };
        if (status) filter.status = status;
        if (feedback) filter.feedback = feedback;
        // Fetch plots based on filter criteria
        const sitevisit = await SiteVisitDetails.find(filter);

        res.status(200).json({
            message: 'SiteVisit retrieved successfully',
            sitevisit
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve SiteVisit', error });
    }
};

module.exports = { getSiteVisit };