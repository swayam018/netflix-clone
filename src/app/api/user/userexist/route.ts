import { NextRequest, NextResponse } from "next/server";
import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
    
connects();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User is already exists",success:true });
        }
        return NextResponse.json({ message: "User does not exists",success:false });
    }
        catch(error){
            console.log(error);
            return NextResponse.json({ message: "User does not exists",success:false });
        }
    }