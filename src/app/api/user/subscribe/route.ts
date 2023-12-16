import { NextRequest, NextResponse } from "next/server";
import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";

connects();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "Invalid Username or password" ,success:false });
        }

    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "Something wrong",success:false  });
    }
}