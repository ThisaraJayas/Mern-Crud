const router = require('express').Router();
let User = require('../models/users')

//create
router.route("/create").post((req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const age = req.body.age

    const newUser = new User({
        name,
        email,
        age
    })
    newUser.save().then(()=>{
        res.json('Student added')
    }).catch((err)=>{
        console.log(err);
    })
})

//getdata
router.route("/").get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})

//get Data to update section to update
router.route("/getUser/:id").get((req,res)=>{
    const id = req.params.id
    User.findById(id).then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})

//update got data
router.route("/updateUser/:id").put((req,res)=>{
    const userid =req.params.id
    User.findByIdAndUpdate({_id:userid},{
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then(users=>res.json(users))
    .catch(err=>res.json(err))
   
})

//delete user
router.route("/deleteUser/:id").delete((req,res)=>{
    const userid = req.params.id
    User.findByIdAndDelete({_id:userid})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})
module.exports=router