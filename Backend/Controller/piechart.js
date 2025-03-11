const Property = require ('../Model/property');

const GetPiechart = async (req, res) => {
  try {
    const categories = ["Apartment", "Plot", "Villa"];


    // Aggregation pipeline to count properties by category
    const counts = await Property.aggregate([
      { $match: { propertyCategory: { $in: categories } } },
      { $group: { _id: "$propertyCategory", count: { $sum: 1 } } },
    ]);

    // Map counts to respective categories and ensure all categories are included
    const result = {
      Apartment: counts.find(item => item._id === "Apartment")?.count || 0,
      Plot: counts.find(item => item._id === "Plot")?.count || 0,
      Villas: counts.find(item => item._id === "Villa")?.count || 0,
    };

    // Calculate the total count of all categories
    const totalcount = result.Apartment + result.Plot + result.Villas;

    res.status(200).json({
      message: "Property counts fetched successfully",
      allcategory: categories.join(", "), // Concatenate all categories into a single string
      totalcount, // Add total count of all categories
      ...result // Spread the result object for separate Apartment, Plot, and Villas counts
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while fetching the piechart data",
      error: error.message,
    });
  }
};

module.exports = { GetPiechart };