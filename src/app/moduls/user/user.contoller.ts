import { NextFunction, Request, Response } from "express";
import { createusertoDB } from "./user.service";

 



export const createUser = async  (req: Request, res: Response, next: NextFunction) => { 

 const user = await createusertoDB()
 res.status(2000).json({
    status:"success",
    Date :user
 })
}



//route will call contoller and contoller will call service
// route ->contoller ->service
