import mongoose from "mongoose"

const Schema = mongoose.Schema

const trailSchema = ({
  name: String,
  distance: Number,
})   

const Trail = mongoose.model("Trail", trailSchema)

export {
  Trail
}