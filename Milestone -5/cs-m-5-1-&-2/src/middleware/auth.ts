import { Request, Response, NextFunction } from "express";
// import { Role } from "../generated/prisma/enums";
import jwt, { JwtPayload } from "jsonwebtoken";
import { auth as betterAuth } from "../lib/auth";

declare global {
    namespace Express {
        interface Request {
            user: JwtPayload
        }
    }
}

// const auth = (roles?: string[]) => {
const auth =  (resource: "user" | "equipment", action: string) => {


    return async (req: Request, res: Response, next: NextFunction) => {
        // const token = req.headers.authorization?.split(" ")[1];

        // if (!token) res.send("Please provide token")

        // try {
        //     const decoded = jwt.verify(token as string, "very secret") //.env in this - "very secret"

        //     // console.log(decoded);
        //     if (!decoded) return res.send("Unauthorized");

        //     req.user = decoded as JwtPayload

        //     if (roles && !roles?.includes(req.user.role)) {
        //         return res.send("Forbidden")
        //     }
        // }

        // ======================================== better auth ==========================================
        try {
             const session = await betterAuth.api.getSession({
                headers: req.headers
            });
            if (!session) return res.status(401).send({ message: "Unauthorized" })
            const hasPermission = await betterAuth.api.userHasPermission({
                body: {
                    userId: session?.user.id,
                    role: session?.user.role || ("user" as any),
                    permission: { [resource]: [action] }
                }
            
            })
            console.log({session, hasPermission});
            if (!hasPermission || !hasPermission.success) return res.status(401).send({ message: `Forbidden: You do not have permission to ${action} ${resource}!` })
            next()
        } catch (error) {
            console.error(error);
        }
    }
}

// const auth = (resource: "user" | "equipment", action: string) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const session = await betterAuth.api.getSession({
//         headers: req.headers,
//       });

//       if (!session) {
//         return res.status(401).json({ message: "Unauthorized" });
//       }

//       const hasPermission = await betterAuth.api.userHasPermission({
//         body: {
//           userId: session.user.id,
//           role: session.user.role || ("user" as any),
//           permission: { [resource]: [action] },
//         },
//       });

//       if (!hasPermission?.success) {
//         return res.status(403).json({
//           message: `Forbidden: You do not have permission to ${action} ${resource}!`,
//         });
//       }

//       return next();
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//   };
// };

export default auth;