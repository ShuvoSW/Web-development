import express, { NextFunction, Request, Response, Router } from 'express';
import { postController } from './post.controller';
import {auth as betterAuth} from '../../lib/auth'
import { success } from 'better-auth/*';

const router = express.Router();

const auth=(...roles: any)=> {
    return async (req: Request,res: Response, next: NextFunction) => {
        // console.log(roles);
        // next()
        // get user session
        const session = await betterAuth.api.getSession({
            headers: req.headers as any
        })
        
        if(!session){
            return res.status(401).json({
                success: false,
                message: "You are not authorizes"
            })
        }
        
        if(!session.user.emailVerified){
            return res.status(403).json({
                success: false,
                message: "Email verification required. Please verify your email"
            })
        }

        console.log(session);
    }
}

router.post(
    "/",
    auth("ADMIN", "USER"),
     postController.createPost
)

export const postRouter: Router = router;