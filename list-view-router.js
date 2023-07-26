import express from 'express'
import { tasks } from './tasks.js'

export const listViewRouter = express.Router()

listViewRouter.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(tasks))
})

listViewRouter.get('/complete', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(tasks.filter(element => element.state === true)))
})

listViewRouter.get('/incomplete', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(tasks.filter(element => element.state === false)))
})