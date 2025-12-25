import { prisma } from "./lib/prisma"

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Shuvo majumder",
    //         email: "shuvo@next.com"
    //     }
    // })

    // console.log("Created user: ", createUser);


    // // create post for user id = 1
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is title!",
    //         content: "This is a big content!",
    //         authorId: 1
    //     }
    // })

    // console.log("Create Post: ", createPost);


    // create profile
    // const createdProfile = await prisma.profile.create({
    //     data: {
    //         bio: "Web dev",
    //         userId: 1
    //     }
    // })

    // console.log(createdProfile);


    // retrive all user
    // const users = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profile: true
    //     // },
    //     select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //         posts: true,
    //         profile: true
    //     }
    // });

    // console.log(users);
    // console.dir(users, {depth: Infinity});

    // update user data
    // const updateUser = await prisma.profile.update({
    //     where: {
    //         userId: 1
    //     },
    //     data: {
    //         bio: "Web Developer & Mentor",
    //         dateOfBirht: "2025-12-24T17:21:22.910Z"
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select: {
    //                 name: true,
    //                 email: true
    //             }
    //         }
    //     }
    // })

    // console.log("updated user: ", updateUser);


    // delete user
    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         id: 2
    //     }
    // })

    // console.log(deleteUser);


    //get user data by id

    // const getUserDataById = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     },
    //     include: {
    //         posts: true,
    //         profile: true
    //     }
    // })

    // console.log(getUserDataById);

    // upsert

    const upsertUser = await prisma.user.upsert({
        where: {
            email: "shuvo@next.com"
        },
        update: {
            name: "shuvo majumder"
        },
        create: {
            name: "shuvo majumder",
            email: "shuvo@next.com"
        }
    })

    console.log(upsertUser);
}

run()
