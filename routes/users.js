const express = require('express');
const router = express.Router();
const UserModel = require('../model/User')


router.get('/', async(req,res,next) => {
      console.log("User routing with get methed")
           const allUsers = await UserModel.find()//get all row from users
    res.send(allUsers)
})

router.post('/',async(req,res,next) => {// intert row in users
    console.log("users routing with post nethod")
    const insertedUsers = new UserModel({"name":req.body.name,"address":req.body.address, "gender": req.body.gender, "createdAt": new Date()})
    const createdUsers = await insertedUsers.save()
    res.send(createdUsers)
})

router.delete('/:userID',async(req,res,next) => {//delete row in users 
    console.log("user deleting row using delete method")
    const afterDeleted = await UserModel.findByIdAndDelete({"_id" : req.params.userID})
    res.send(afterDeleted)

          
})
router.put('/:userId', async(req,res,next) =>{// full update
    console.log("Update one user document in User collection......");
    const updatedUser = await UserModel.findByIdAndUpdate({
        _id: req.params.userId
    }, {
        "name": req.body.name,
        "address": req.body.address,
        "gender": req.body.gender
    }, {new: true});
    res.send(updatedUser);
})

module.exports = router;