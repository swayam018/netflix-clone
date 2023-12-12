import { NextRequest, NextResponse } from "next/server";
import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
connects();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        //console.log(reqBody);
        const { email, password } = reqBody;

        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return NextResponse.json({ message: "Invalid Username or password" });
        }
        
        return NextResponse.json({ message: "successfully authenticated" ,success:true});
    } catch (error) {
        
    }

}