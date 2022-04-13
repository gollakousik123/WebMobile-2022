const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const lendSchema = new mongoose.Schema({
    location:{
        type:String
    },
    subLocation:{
        type:String
    },
    sportType:{
        type:String
    },

    startDate:{
        type:String,
       required: true
    },
    endDate:{
        type:String,
       required: true
    },
    // eventTime:{
    //     type:String,
    //     required: true
    // },
    // eventBackgroundImage:{
    //     type:String,
    //     required: true
    // },
    sportItemName:{
        type:String,
        required: true
    },
    payPerDay:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model('Lend',lendSchema)



