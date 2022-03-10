import mongoose from 'mongoose'

const trailSchema = new mongoose.Schema({
  name: String,
  distance: Number,
  difficulty: String
}, {
  timestamps: true,
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  trails: [trailSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
