import { Router } from 'express'
import { Park } from "../models/park.js"

const router = Router()

router.get('/', function (req, res) {
  Park.find({})
  .then(parks => {
    res.render('parks/index', { 
      title: 'Home Page', 
      parks,
      user: req.user ? req.user : null 
    })
  })
})


export {
  router
}
