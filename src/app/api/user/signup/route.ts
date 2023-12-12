import { NextRequest, NextResponse } from "next/server";
import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import bcryptjs from 'bcryptjs'
    
connects();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const { email, password } = reqBody;

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User is already exists",success:true });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            email,
            password:hashPassword
        });
        const res = await newUser.save();
        return NextResponse.json({message:"User is Created successfully",success:true,res})
        
    } catch (error) {
        console.log("Error while creating user", error);
        return NextResponse.json({ message: "Failed to send",success:false})
    }
}