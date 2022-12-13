const mongoose = require('mongoose');
const { Schema } = mongoose;

let studentSchema =  new Schema({
    id:
    {
     type:Number
    },
    firstname: {
        type:String
    },
    lastname: {
        type:String
    },
    location: {
        type:String
    },
    email: {
        type:String
    },
    dob:
    {
     type:String
    },
    education: {
        type:String
    }
},{
    collection: 'students'
})

module.exports = mongoose.model('Student',studentSchema)

