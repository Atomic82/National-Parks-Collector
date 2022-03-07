import mongoose from "mongoose"

const Schema = mongoose.Schema

const parkSchema = ({
  name: String,
  visited: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})   

const Park = mongoose.model("Park", parkSchema)

export {
  Park
}