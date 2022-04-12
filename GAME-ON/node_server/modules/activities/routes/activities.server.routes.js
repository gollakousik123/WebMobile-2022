const express =require('express');
const router = express.Router();
const app = express()
const activityController = require('../controllers/activites.server.controller')

//creating caterr 
//router.post('/',restaurantController.herokutest)

//creating caterr 
router.post('/createActivity',activityController.createActivity)
router.get('/getAllActivities/:location',activityController.getAllActivities)
router.get('/getEventById/:id/:location',activityController.getEventById)


router.post('/createLend',activityController.createLend)
router.get('/getAllLends/:location',activityController.getAllLends)
router.get('/getLendById/:id/:location',activityController.getLendById)


module.exports = router;