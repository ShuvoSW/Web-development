import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin, twoFactor } from "better-auth/plugins";
import { Resend } from 'resend';
import { adminRole, userRole } from "./permissions";
// import { createAccessControl } from "better-auth/plugins/access";

const resend = new Resend("re_diancUhh_D8ftRe4Dt9hCbyEroNUgZPXh");



export const auth = betterAuth({

    appName: "lab log",
    baseURL: process.env.BUTTER_AUTH_URL,
    basePath: "/api/v1/auth",

    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    trustedOrigins: [process.env.FRONTEND_URL!],

    rateLimit: { //url user define
        enabled: true,
        window:10,
        max: 2,
        customRules: {
            "ok": {
                max: 1,
                window: 60
            }

           
        },
         storage: "memory"
    },

    advanced: {
        cookiePrefix: "lablog"
    },

    emailAndPassword: {
        enabled: true,
        minPasswordLength: 6
        // password: {

        // }    
    },

    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            redirectURI: `${process.env.FRONTEND_URL}/api/auth/callback/github`
        }
    },


    plugins: [
        admin({
            adminRoles: ["admin", "user"],
            defaultRole: "user",
            roles: {
                admin: adminRole,
                user: userRole
            }
        }),
        twoFactor({
            otpOptions: {
                period: 2,
                async sendOTP({ user, otp }, ctx) {
                    console.log({ user, otp })

                    await resend.emails.send({
                        from: 'Lablog <onboarding@resend.dev>',
                        to: user.email,
                        subject: 'Two factor authentication',
                        html: `<p>Your OTP is <b>${otp}</b></p>`,
                    });

                }
            }
        })],

})

//   advanced: { disableOriginCheck: true }