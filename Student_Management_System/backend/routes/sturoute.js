const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()

let studentSchema = require('../Models/Student')

// GET // POST // PUT // DELETE

//localhost:8000/create-student-details

router.route('/create-student').post((req,res,next) =>{
    console.log(req);
    studentSchema.create(req.body,(error,data) => {
        if(error){
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})


// Get STU data

router.route('/').get((req,res)=>{
    studentSchema.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})



router.route('/update-studata/:id').put((req,res,next) =>{
    studentSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error,data) => {
        if(error){
            return next(error)
            console.log(error)
        } else {
            res.json(data)
            console.log('Student Data updates Successfully')
        }
    },
    )
})


// GET Single studata

router.route('/edit-studata/:id').get((req,res)=>{
    studentSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})



// Delete studata

router.route('/delete-studata/:id').delete((req,res,next) =>{
    studentSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.status(200).json({
                msg:data,
            })
        }
    })
})



module.exports = router