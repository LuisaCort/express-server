import express from 'express'
import { listRouter } from './Routers/taskList.js'

const app = express()
app.use('/tasklist', listRouter)
app.listen(80, () => console.log('Server running on port 80'))