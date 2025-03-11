const express = require('express');
const router = express.Router();
// const { CreateAgent,UpdateAgent,GetAgent,GetAgentById,DeleteAgent } = require('../Controller/agent'); 

const {  CreateAgent,UpdateAgent,DeleteAgent,GetAgent,GetAgentById,getSearchAgent,getAgentCount } = require('../Controller/agent'); 
//  const Authentication=require('../Middleware/Authentication')

// router.post('/createAgent', CreateAgent);

const upload = require('../Controller/Upload'); // Import the upload configuration


router.post('/createAgent', upload.fields([{ name: 'profile_picture', maxCount: 5 }]), CreateAgent);
router.put('/updateAgent/:_id',UpdateAgent );
router.get('/agents',GetAgent);
router.get('/getAgentId/:_id',GetAgentById);
router.get('/getsearchAgent',getSearchAgent);
router.get('/agentCount',getAgentCount)

router.delete('/deleteAgent/:_id',DeleteAgent);



module.exports = router;