import express from 'express'
import { listViewRouter } from './list-view-router.js'
import { listEditRouter } from './list-edit-router.js'

const app = express()
app.use('/list-view', listViewRouter)
app.use("/list-edit", listEditRouter)
app.listen(80, () => console.log('Server running on port 80'))