const express=require("express")
const router=express.Router()

const {sendMessage}=require("../Controller/whatsApp")

router.post("/sendmessage",sendMessage)


module.exports=router

