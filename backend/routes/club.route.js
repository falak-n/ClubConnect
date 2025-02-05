import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";

import {getClub,getClubById,registerClub,updateClub} from "../controllers/club.controller.js";
import {singleUpload} from "../middlewares/mutler.js"

const router = express.Router();

router.route("/register").post(isAuthenticated,singleUpload,registerClub);
router.route("/get").get(isAuthenticated,getClub);
router.route("/get/:id").get(isAuthenticated,getClubById);
router.route("/update/:id").put(isAuthenticated,singleUpload, updateClub);

export default router;
