import express from 'express'
import { tasks,
  addTask,
  editTask,
  deleteTask
} from '../helpers/tasks.js'

export const listRouter = express.Router()
listRouter.use(express.json())
listRouter.post('/', (req, res) => {
  if(req.body.desc === undefined || req.body.state === undefined) return res.status(400).json("Bad body")
  res.status(201).json(addTask(req.body))
})
listRouter.put("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  if (id < 0 || id >= tasks.length) return res.status(400).json("Bad id")  
  if(req.body.desc === undefined || req.body.state === undefined) return res.status(400).json("Bad body")
  return res.status(200).json(editTask(id, req.body))
})

listRouter.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (id < 0 || id >= tasks.length) return res.status(400).json("Bad id")
  deleteTask(id)
  return res.status(204).end()
})

listRouter.get('/', (req, res) => {
  res.status(200).json(tasks)
})

listRouter.get("/filter", (req, res) => {
  const filter = req.query.filter
  if(filter === "completed") return res.status(200).json(tasks.filter(element => element.state === true))
  else if(filter === "uncompleted") return res.status(200).json(tasks.filter(element => element.state === false))
  else return res.status(400).json("Bad filter")
})

listRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  if (id < 0 || id >= tasks.length) return res.status(400).json("Bad id")
  return res.status(200).json(tasks.find(element => element.id === id))
})