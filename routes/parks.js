import { Router } from "express";
import * as parksCtrl from "../controllers/parks.js"
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

// GET - localhost:3000/parks
router.get('/', parksCtrl.index)
// GET - localhost:3000/parks/:id
router.get("/:id", parksCtrl.show)
// GET - localhost:3000/parks/:id/edit
router.get("/:id/edit", isLoggedIn, parksCtrl.edit)

// POST - localhost:3000/parks
router.post('/', isLoggedIn, parksCtrl.create)

// PUT - localhost:3000/park/:id
router.put("/:id", isLoggedIn, parksCtrl.update)

// PATCH - localhost:3000/parks/:id/flip-visited
router.patch("/:id/flip-visited", isLoggedIn, parksCtrl.flipVisited)

// DELETE - localhost:3000/parks/:id/show
router.delete("/:id", isLoggedIn, parksCtrl.delete)

export {
  router
}