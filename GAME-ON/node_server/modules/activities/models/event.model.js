const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const eventSchema = new mongoose.Schema({
    location:{
        type:String
    },
    subLocation:{
        type:String
    },
    sportType:{
        type:String
    },
    eventName:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
       required: true
    },
    eventTime:{
        type:String,
        required: true
    },
    eventBackgroundImage:{
        type:String,
        required: true
    },
    isBookable:{
        type: Boolean,
        required: true,
        default: true
    },
})

module.exports = mongoose.model('Event',eventSchema)



