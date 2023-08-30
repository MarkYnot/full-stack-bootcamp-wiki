const express = require('express')
//create a router object
const weatherRouter = express.Router();


let data = [
   {
     activity: ["morning jog", "breakfast", "work"],
     weather: "sunny1"
   }, 

   {
    activity: ["fighting", "dinner", "racing"],
    weather: "sunny2"
   },
   
   {
    activity: ["boxing", "workout", "relaxing"],
    weather: "sunny3"
   }
]

// GET retrieve the entire List
weatherRouter.get('/list', (req, res) =>{
   res.send(data);
})


// Get an item by query parameter     ? activity=work
weatherRouter.get(`/activities`, (req, res) =>{

  const activityToFind = req.query.activity;
  if(!activityToFind){
     return res.status(400).send("Activity parameter is missing")
  }
  const result = data.filter(item=>{
         return item.activity.includes(activityToFind);
  });

  if(!result.length){
    return res.status(404).send("Activity not found")
  }
    res.send(result)
})


//Post add a new item
weatherRouter.post(`/new`, (req, res)=>{
   const {activity, weather} = req.body;
   if(!activity || !weather){
       return res.status(400).send('activity and weather are required')
   }

   const newActivity = {activity, weather}
   data.push(newActivity)
   res.status(201).send({
     msg:"Add activity succeeded",
   })
   console.log(data)
})

//GET activities based on weather condition  /:condition /cloudy
weatherRouter.get("/activities/weather/:condition", (req,res) =>{
    const weatherCondition = req.params.condition;
    const itemsWithCondition = data.filter(item => {
        return item.weather === weatherCondition;
    });
    res.send(itemsWithCondition)
});

// PUT update activities  /:conditions
 weatherRouter.put(`/activities/weather/:condition`, (req, res)=>{
    const weatherCondition = req.params.condition;
    const newActivities = req.body.activity;
    const foundIndex = data.findIndex(item => {
        return item.weather === weatherCondition;
    })

    if(foundIndex === -1) return res.status(404).send("Weather condition not found");
    data[foundIndex].activity = newActivities;
    res.send({
       msg: "Activities updated successfully",
       updatedWeather: data[foundIndex]
    })
  console.log(data)
 })

// DELETE items based on weather condition
weatherRouter.delete(`/activities/weather/:condition`, (req, res)=>{
  const weatherCondition = req.params.condition;
  const foundIndex = data.findIndex(item => {
     return item.weather === weatherCondition;
  })

  if(foundIndex === -1) return res.status(404).send("Weather condition not found");

  const deleteWeather = data.splice(foundIndex, 1);
  res.send({
       msg: "Activitites delted successfully",
       deleteWeather: deleteWeather[0]
  })
  console.log(data)
})


module.exports = weatherRouter;