
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
  Park.findById(req.params.id)
  .populate("owner")
  .then(park => {
    console.log(park)
    res.render('parks/show', {
      park,
      title: "🏞 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/parks")
  })
}

export {
  index,
  create,
  show
}