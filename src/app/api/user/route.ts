import { userSchema } from "@/lib/form-schema"
import { db } from "@/lib/prisma-db"
import { NextResponse } from "next/server"




export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, username, password } = userSchema.parse(body)
        
        // checking if user exists by email

        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        })

        if (existingUserByEmail) {
            return NextResponse.json({
                user: null,
                message: "user with this email already exists"
            }, {status: 409})
        }

        // checking if user exists by username

        const existingUserByUsername = await db.user.findUnique({
            where: {username: username}
        })

        if (existingUserByUsername) {
            return NextResponse.json({
                user: null,
                message: "user with this username already exists"
            }, {status: 409})
        }

        const newUser = await db.user.create({
            data: {
                username, 
                email,
                password
            }
        })

        const { password: newUserPassword, ...rest } = newUser
        
        return NextResponse.json({
            user: rest, message: "User created successfully"
        }, {status: 201})
        
    } catch (error) {
        return NextResponse.json({message: "Something went wrong!"}, {status: 500})
    }
}