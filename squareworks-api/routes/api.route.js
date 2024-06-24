import express from "express";

const router = express.Router();
//import controller
import {testGet} from "../controllers/api.controller.js";

router.get('/',testGet);

export {router};