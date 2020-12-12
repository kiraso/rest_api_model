const express =  require('express');
const { model } = require('mongoose');
const router = express.Router();
const UserList = require('../models/UserList')

//CREATED POST
router.post('/',(req,res) => {
    console.log(req.body)
    userList = new UserList({
        First_name: req.body.First_name,
        Last_name: req.body.Last_name,
        username: req.body.username,
        password: req.body.password
        
    });

    userList.save().then(userList => {
        res.json(userList)
        res.send(userList);

    }).catch((error) => {
        res.status(500).send('Err userList wasnt stored in db')
    })
})
// router.get("/",async(req,res,next) => {
//     const username = req.params._id
//     console.log(req.params._id)
//     await UserList.find({_id: username})
//     .exec()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => console.log(err))
// })
// //READ GET
// router.get('/', async(req,res,next) =>{
    
//     try{
//         const entries = await UserList.find()
//         res.json(entries) 
//         // res.status(200).json({
//         //     message: 'Handling POST requests to /user',
//         // })
        
//     }catch{
//           next(error)
//     }
        
    
// })


//UPDATE PUT

router.put('/:id',async(req,res) =>{
    let found = req.username


})




module.exports = router;