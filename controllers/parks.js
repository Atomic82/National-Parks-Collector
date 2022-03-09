
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

function flipVisited(req, res) {
  Park.findById(req.params.id)
  .then(park => {
    park.visited = !park.visited
    park.save()
    .then(() => {
      res.redirect(`/parks/${park._id}`)
    })
  })
  .catch(err => {
  console.log(err)
  res.redirect("/parks")
  })
}

function edit(req, res) {
  Park.findById(req.params.id)
  .then(park => {
    res.render("parks/edit", {
      park,
      title: "edit 🏞"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/parks")
    })
}


function update(req, res) {
  Park.findById(req.params.id)
  .then(park => {
    if (park.owner.equals(req.user.profile._id)){
      req.body.visited = !!req.body.visited
      park.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/parks/${park._id}`)
      })
    } else {
      throw new Error("NOT AUTHORIZED") 
    }
  })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/parks")
  })
}

function deletePark(req, res) { 
  Park.findById(req.params.id)
  .then(park => {
    if (park.owner.equals(req.user.profile._id)) {
      park.delete()
      .then(() => {
      res.redirect("/parks")
    })
  } else {
  throw new Error ("NOT AUTHORIZED")
    }
  })
}

export {
  index,
  create,
  show, 
  flipVisited,
  edit,
  update,
  deletePark as delete,
}
