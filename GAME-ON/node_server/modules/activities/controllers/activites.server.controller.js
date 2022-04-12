
const express =require('express');
const _ = require('lodash');

const fs = require('fs')
const twilio = require('twilio');
const mongoose = require('mongoose')
const speakEasy = require('speakeasy');
const bcrypt = require('bcryptjs');
var Event = require('../models/event.model.js')
var Lend = require('../models/lend.model.js')
exports.getAllActivities = async (req,res)=>{
    try{
        var loc = req.params.location;
        const eventsData = await Event.find({location:loc});
        res.json(eventsData) 
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


exports.createActivity = async (req,res)=>{
  


  var activitytData = req.body;
  console.log("activitytData===",activitytData);

  // activitytData.eventBackgroundImage = 'https://images.unsplash.com/photo-1585822754398-04873d4e1f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80'
  //  try{
  //      const data = await activitytData.save()
  //      res.status(200).json(data)
  //  }catch(err){
  //   res.status(400).json({message:JSON.stringify(err)})
  //  }

fs.readFile('../../../../database/newClient.json', function (err, data) {

  var parsedData = JSON.parse(data)
  console.log("parsed_data", parsedData)
  var data2 = {
    "Name": "sample.",
    "Order_count": 58,
    "Address": "Little Havana"
    }

   parsedData.push(activitytData)
 fs.writeFile("../../../../database/newClient.json", JSON.stringify(parsedData),function (err,data){
  if (err) { 
    console.log(err); 
  } 
 })
})
}


exports.editActivity = function(req,res){
  var activity_id = req.params.id;

  if(_.isEmpty(caterr_id)){
    res.status(400).send({message: 'activity_id is required'})
  }
  var activityToUpdate = req.body;
  var query = {
    _id: activity_id
  }


  Event.findOne(query)
 .exec(function (err, result) {
  if (err) {
    return res.status(400).send({
      message: "error occured while updating caterrer"
    })
  }
  if (_.isEmpty(result)) {

    return res.status(404).send({ message: 'Event not found' })
  } else {
    event = _.extend(result,activityToUpdate);

    event.save(function (err, updatedResult) {
      if (err) {
          return res.status(400).send({
              message: "error occured while updating caterrer"
            })
      }
      res.status(200).send(updatedResult)
    })
  }
});

}

exports.getEventById = function(req,res){
  console.log("alled......now")
var activity_id = req.params.id;
var loc = req.params.location;
if(_.isEmpty(activity_id)){
  res.status(400).send({message: 'activity_id is required'})
}


Event.findOne({
  _id: activity_id,
  location:loc
})
.exec(function (err, result) {
if (err) {
  return res.status(400).send({
    message: "error occured while getting event"
  })
}
if (_.isEmpty(result)) {

  return res.status(404).send({ message: 'Event not found' })
} else {
  console.log(result)

  res.status(200).send(result)

}
});

}




//---------------------------------------------------



exports.getAllLends = async (req,res)=>{
  try{
      var loc = req.params.location;
      const lendsData = await Lend.find({location:loc});
      res.json(lendsData) 
  }catch(err){
      res.status(500).json({message: err.message})
  }
}


// exports.createLend = async (req,res)=>{
// var lendData = Lend(req.body);

// try{
//      const data = await lendData.save()
//      res.status(200).json(data)
//  }catch(err){
//   res.status(400).json({message:JSON.stringify(err)})
//  }

// }


exports.createLend = async (req,res)=>{
  
  var activitytData = req.body;
  console.log("activitytData===",activitytData);


fs.readFile('../../../../database/lendsData.json', function (err, data) {
  var parsedData = JSON.parse(data)

   parsedData.push(activitytData)
 fs.writeFile("../../../../database/lendsData.json", JSON.stringify(parsedData),function (err,data){
  if (err) { 
    console.log(err); 
  } 
 })
})
}


exports.getLendById = function(req,res){
  console.log("alled......now")
var activity_id = req.params.id;
var loc = req.params.location;
if(_.isEmpty(activity_id)){
  res.status(400).send({message: 'activity_id is required'})
}


Event.findOne({
  _id: activity_id,
  location:loc
})
.exec(function (err, result) {
if (err) {
  return res.status(400).send({
    message: "error occured while getting event"
  })
}
if (_.isEmpty(result)) {

  return res.status(404).send({ message: 'Event not found' })
} else {
  console.log(result)

  res.status(200).send(result)

}
});

}