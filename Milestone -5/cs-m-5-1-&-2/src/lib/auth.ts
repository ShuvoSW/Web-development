import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { twoFactor } from "better-auth/plugins";

export const auth = betterAuth({

    appName: "lab log",

    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    trustedOrigins: [process.env.FRONTEND_URL!],

    emailAndPassword: {
        enabled: true,
        minPasswordLength: 6
        // password: {
            
        // }    
    },

    socialProviders: {
        github: {
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
            redirectURI:`${process.env.FRONTEND_URL}/api/auth/callback/github`
        }
    },


    plugins:[twoFactor()],

})

//   advanced: { disableOriginCheck: true }