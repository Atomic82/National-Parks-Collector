import res from "express/lib/response"
import { Park } from "../models/park.js"

function index(req, res) {
  console.log('Parks')
  Park.find({})
  .then(parks => {
    res.render('parks/index', {
      parks,
      title: "🏞"
    })
  })
  

  .catch(err => {
  console.log(err)
  res.redirect("/parks")
  })
}

export {
  index
}