import express from 'express'
import { listViewRouter } from './list-view-router.js'
import { listEditRouter } from './list-edit-router.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv' 
dotenv.config()



const app = express()
app.use((req, res, next) => {
  if(req.method !== "GET" && 
    req.method !== "POST" && 
    req.method !== "PUT" && 
    req.method !== "DELETE") 
  res.status(405).end("Method not allowed")
  next()
})
app.use('/list-view', listViewRouter)
app.use("/list-edit", listEditRouter)

const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2"},
  { username: "user3", password: "pass3"},
  { username: "user4", password: "pass4"}
] 
app.use(express.json())
app.post("/login", (req, res) => {
  if(!req.body.username || !req.body.password) res.status(400).end("Bad request")
  else {
    const user = users.find(user => (user.username === req.body.username && user.password === req.body.password))
    if(!user) res.status(401).end("Unauthorized")
    else {
      delete user.password
      res.send(jwt.sign(user, process.env.SECRET))
    }
  }
})

app.get("/profile", (req, res) => {
  const token = req.headers.authorization
  if(!token) res.status(401).end("Unauthorized")
  else {
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if(err) res.status(401).end("Unauthorized")
      else res.send(user)
    })
  }
})

app.listen(80, () => console.log('Server running on port 80'))