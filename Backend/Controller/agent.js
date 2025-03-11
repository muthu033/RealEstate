const AgentDetails = require('../Model/Agent'); // Mongoose model
const path = require('path');


const CreateAgent = async (req, res) => {
  try {
    const agentDetail = req.body;

    // Handle image uploads
    if (req.files['profile_picture']) {
      agentDetail.profile_picture = req.files['profile_picture'].map(file => path.join('uploads', file.filename));
    }
  
    
    const Agent = new AgentDetails(agentDetail);
    await Agent.save();

    res.status(201).json({ success: true, data: Agent });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getSearchAgent = async(req,res)=> {
  try{
    const {name,email} = req.query

      // Build the query object based on the provided query parameters
      const query = {};
      if (name) query.name = name;
      if (email) query.email = email;

      // Find users that match the query and select only specified fields
      const users = await AgentDetails.find(query).select('name email');
      res.status(200).json({ users });
  } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error });
  }
  }








  const GetAgent = async (req, res) => {
        try {
       const agents = await AgentDetails.find()
          res.status(200).json({ success: true, data: agents });
        } catch (error) {
          res.status(500).json({ success: false, message: error.message });
        }
      };


  // Get a single agent by ID
const GetAgentById = async (req, res) => {
  try {
    const agent = await AgentDetails.findById(req.params._id).populate({
      path: 'user_id',
      match: { role: 'agent' } // Filter by role 'agent'
    })
    if (!agent) {
      return res.status(404).json({ success: false, message: 'Agent not found' });
    }
    res.status(200).json({ success: true, data: agent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an agent by ID
const UpdateAgent = async (req, res) => {
  try {
    const agent = await AgentDetails.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true });
    if (!agent) {
      return res.status(404).json({ success: false, message: 'Agent not found' });
    }
    res.status(200).json({ success: true, data: agent });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



const getAgentCount = async (req, res) => {
  try {
    const agentCount = await AgentDetails.countDocuments();
    res.json({ count: agentCount });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user count', error });
  }
};

// Delete an agent by ID
const DeleteAgent = async (req, res) => {

    try {
        const agentId = req.params.agent_id;

        // Find and delete the plot by ID
        const deletedAgent = await AgendDetails.findByIdAndDelete(agentId);

        // Check if the plot was found and deleted
        if (!deletedAgent) {
            return res.status(404).json({ message: 'Agent not found' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Agent deleted successfully',
            agent: deletedAgent
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete Agent', error });

    }
    
};
      

module.exports = { CreateAgent,UpdateAgent,DeleteAgent,GetAgent,GetAgentById,getSearchAgent,getAgentCount };
