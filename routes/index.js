const express = require('express')
const router = express.Router()
const UserModel = require('../model/User.js')



router.get('/',async(req,res,next) => {//READ
            console.log("Finding all users from User collection......");
           const allUsers = await UserModel.find()
           res.send(allUsers)
});

router.post('/', async(req, res, next) => { //CREATE
    console.log("Inserts one user document in User collection......");
    const userDoc = new UserModel({"name": req.body.name, "address": req.body.address,"gender": req.body.gender, "createdAt": new Date()})
    const createdUser = await userDoc.save();
    console.log("user is created in User collection......", createdUser);
    res.send(createdUser);
});
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

router.delete('/:userId', async(req, res, next) => { // DELETE
    console.log("deleting one user document from User collection......");
    const deletedUser = await UserModel.findByIdAndDelete(req.params.userId)
    res.send(deletedUser)
})

router.patch('/:userId',async(req,res,next) => {
    console.log("patch one user documnet form user collection.........");
    const patchUser = await UserModel.findByIdAndUpdate({
        _id: req.params.userId
    },{
        name:req.body.name
    },{new : true});
    res.send(patchUser)
})


module.exports = router