import { Router } from "express";
import { validateBody } from "../middleware/validation.ts";
import { insertUserSchema } from "../db/schema.ts";
import { register } from "../controllers/authController.ts";

const router = Router()

router.post('/Register', validateBody(insertUserSchema), register)

router.post('/login', (req, res) => {
    res.status(201).json({message: 'user logged in'})
})

export default router