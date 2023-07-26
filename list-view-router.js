import express from 'express'
import { tasks } from './tasks.js'

export const listViewRouter = express.Router()

listViewRouter.use("/:filter", (req, res, next) => {
  const filter = req.params.filter
  if (filter !== "all" && filter !== "complete" && filter !== "incomplete")
    if(parseInt(filter) <= tasks.length-1 && parseInt(filter) >= 0) next()
    else res.status(400).send("Invalid filter")
  else next()
})

listViewRouter.get('/:filter', (req, res) => {
  const filter = req.params.filter
  res.writeHead(200, {'Content-Type': 'application/json'})
  if (filter === "all") res.end(JSON.stringify(tasks))
  else if (filter === "complete") res.end(JSON.stringify(tasks.filter(element => element.state === true)))
  else if (filter === "incomplete") res.end(JSON.stringify(tasks.filter(element => element.state === false)))
  else res.end(JSON.stringify(tasks.filter(element => element.id === parseInt(filter))))
})