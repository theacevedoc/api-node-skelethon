import { Router } from "express";
import { find } from "../controllers/movies.controller.js";

const router = Router();

router.get(
  '/',
  find
);

export default router;
