import express from "express"
import { createUser } from "./user.contoller"
const router =express.Router() 

router.get('/', )
router.post("/create-user",createUser )

export default router



///6-10: What is instance methods ,built custom instance method