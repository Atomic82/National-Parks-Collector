import { Park } from "../models/park.js"

function index(req, res) {
  console.log('Parks')
  Park.find({})
  .then(parks => {
    res.render('parks/index', {
      parks,
      titles: "🏞"
    })
  })
}

export {
  index
}