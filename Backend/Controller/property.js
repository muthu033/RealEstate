// routes/propertyRoute
const Property = require('../Model/property');
  const createProperty=
  async (req, res) => {
    try {
      const { propertyCategory, title, description, price, agent_id, city, district, state, country, building_name, street, zip_code, bedrooms, bathrooms, area_sqft, floor, unit_number, area_acres, zoning_type, floors, parking_spaces } = req.body;

      const images = req.files['images'] ? req.files['images'].map(file => file.path) : [];
      const videos = req.files['videos'] ? req.files['videos'].map(file => file.path) : [];

      const property = new Property({
        propertyCategory,
        // title,
        description,
        price,
        agent_id,
        city,
        district,
        state,
        country,
        building_name,
        street,
        zip_code,
        bedrooms,
        bathrooms,
        area_sqft,
        floor,
        unit_number,
        area_acres,
        zoning_type,
        floors,
        parking_spaces,
        images,
        videos,
      });

      await property.save();
      res.status(201).json({ message: 'Property created successfully', property });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


// GET route to retrieve all properties or filtered properties

const getAllProperty = async (req, res) => {
  try {
    const filters = {};

    // Apply filters from query parameters with trimming and case-insensitivity
    if (req.query.propertyCategory) {
      filters.propertyCategory = { $regex: req.query.propertyCategory.trim(), $options: 'i' };
    }
    if (req.query.city) {
      filters.city = { $regex: req.query.city.trim(), $options: 'i' };
    }
    if (req.query.state) {
      filters.state = { $regex: req.query.state.trim(), $options: 'i' };
    }

    // Apply price range filters
    if (req.query.minPrice) {
      filters.price = { $gte: parseFloat(req.query.minPrice.trim()) };
    }
    if (req.query.maxPrice) {
      filters.price = { ...filters.price, $lte: parseFloat(req.query.maxPrice.trim()) };
    }

    const properties = await Property.find(filters);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getPropertyCount = async (req, res) => {
  try {
    const propertyCount = await Property.countDocuments();
    res.json({ count: propertyCount });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving property count', error });
  }
};





// const getAllProperty = async (req, res) => {
//   try {
//     const keyword = req.query.keyword?.trim();

//     // Filters for searching keyword in multiple fields (propertyCategory, city, state, district)
//     const filters = keyword
//       ? {
//           $or: [
//             { propertyCategory: { $regex: keyword, $options: 'i' } },
//             { city: { $regex: keyword, $options: 'i' } },
//             { state: { $regex: keyword, $options: 'i' } },
//             { district: { $regex: keyword, $options: 'i' } }
//           ]
//         }
//       : {};

//     // Additional filters for price range
//     if (req.query.minPrice) {
//       filters.price = { $gte: parseFloat(req.query.minPrice.trim()) };
//     }
//     if (req.query.maxPrice) {
//       filters.price = { ...filters.price, $lte: parseFloat(req.query.maxPrice.trim()) };
//     }

//     const properties = await Property.find(filters);
//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };




const getOneProperty = async (req, res) => {
  try {
    const propertyId = req.params.id; 
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const deleteProperty = async(req,res) =>{
  try{
    const propertyId =req.params.id
    const property =await Property.findByIdAndDelete(propertyId)
    res.json({message:"Property Delete Successfully",property})
  }
  catch(error){
    res.json({error:error.message})
  }
} 




module.exports = {createProperty,getAllProperty,getOneProperty,deleteProperty,getPropertyCount}
