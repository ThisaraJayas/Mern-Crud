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
router.route("/getUser/:id").get((req,res)=>{
    const id = req.params.id
    User.find({_id: id}).then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
// router.route("/getUser/:id").put((req,res)=>{
//     const id = req.params.id
//     const{name,email,age} =req.body
//     User.findById({_id: id})
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })
router.route("/update/:id").put((req,res)=>{
    const userid =req.params.id
    const{name,email,age} =req.body
    const updateStudent={
        name,
        email,
        age
    }
    const update = User.findByIdAndUpdate(userid, updateStudent)
    .then(()=>{
        console.log('user updated')
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports=router