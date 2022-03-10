import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "🌄"
    })
  })
  .catch(err => {
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}
function show(req, res) {
  console.log("showing a prof")
}

export {
  index,
  show,
}