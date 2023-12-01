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

router.route("/").get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=router