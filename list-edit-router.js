import express from 'express'
import { addTask, deleteTask, editTask } from './tasks.js'

export const listEditRouter = express.Router()

listEditRouter.use(express.json())

listEditRouter.post('/add', (req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end(JSON.stringify(addTask(req.body)))
})

listEditRouter.delete('/delete/:id', (req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end(JSON.stringify(deleteTask(parseInt(req.params.id))))
})

listEditRouter.put("/edit/:id", (req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end(JSON.stringify(editTask(parseInt(req.params.id), req.body)))
})

