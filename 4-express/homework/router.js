const express = require('express')
const router = express.Router();

let data = [
  {
    id: '1',
    description: '0000',
    done: true
  }, 
  {
    id: '2',
    description: 'test',
    done: true
  }, 
  {
    id: '3',
    description: 'longggggone',
    done: false
  }, 
  {
    id: '4',
    description: '000',
    done: false
  }, 
  {
    id: '5',
    description: '000',
    done: false
  }
]

// GET retrieve the entire List
router.get('/tasks', (req, res)=>{
  const { description } = req.query;
  if (!description) {
    return res.send(data);
  }
  const foundItems = data.filter(item=> item.description.includes(description));
  return res.json(foundItems);
})


//GET tasks by id
router.get('/tasks/:id', (req,res)=>{
  const newId = +req.params.id;
  // if (isNaN(newId)) {
  //   res.status(400).send("id must be number");
  //   return;
  // }
  const itemWithId = data.filter(item=>{
     return item.id === newId;
  }) 
  // if(itemWithId.length===0){
  //   return res.status(404).send("Task not found")
  // }
  res.send(itemWithId[0])
})

// PUT update task by id
router.put('/tasks/:id', (req, res)=>{
  const id = +req.params.id;
  if (isNaN(id)) {
    res.status(400).send("id must be number");
    return;
  }

  const { description, done } = req.body;
  const foundIndex = data.findIndex(item => item.id === id);
  if (foundIndex === -1) {
    return res.status(404).send("task not found");
  }

  data[foundIndex].description = description;
  data[foundIndex].done = done;
  res.send(data[foundIndex]);
})

//Post create a new task
router.post('/tasks', (req, res)=>{
   let {id,description,done} = req.body;
  //  const delicatedId = data.find(item=>{
  //       return item.id == id;
  //  })

   if(!id || !done){
     id = data.length+1;
     done = false;
   } 
  //  else if(delicatedId) return res.status(500).send('id is already existed')

   const newTask = {id,description,done}
   data.push(newTask)
   res.json(newTask)
})

//Delete task by id
router.delete('/tasks/:id', (req, res)=>{
  let newId = +req.params.id;
  if (isNaN(newId)) {
    res.status(400).send("id must be number");
    return;
  }
  const foundIndex = data.findIndex(item => {
    return item.id === newId;
  })

  if(foundIndex === -1) return res.status(404).send("Tasks not found");
   const deletedData = data.splice(foundIndex, 1);
  res.send(deletedData[0])

})


module.exports = router;