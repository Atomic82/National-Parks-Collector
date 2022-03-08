
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

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.visitied = !!req.body.visited
  Park.create(req.body)
  .then(park => {
    res.redirect('/parks')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/parks")
  })  
}

function show(req, res) {
  console.log("testing the showing of a park")
}

export {
  index,
  create,
  show
}