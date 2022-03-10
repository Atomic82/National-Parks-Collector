import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profiles.js"
import { is } from 'express/lib/request'
import { Profile } from '../models/profile.js'

const router = Router()


// GET - localhost:3000/profiles
router.get("/", isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get("/:id", isLoggedIn, profilesCtrl.show)

// POST - localhost:3000/profiles/:id/trails
router.post("/:id/trails", isLoggedIn, Profile.createTrail)

export {
  router
}
