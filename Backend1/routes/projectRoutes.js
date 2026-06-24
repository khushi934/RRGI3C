const routes = require('express').Router()
const {addProject , approveProject,rejectProject} = require('../controllers/projectController')

routes.post("/addproject",addProject)
routes.patch("/project/:id/approve" , approveProject)
routes.patch("/project/:id/reject" , rejectProject)

module.exports = routes