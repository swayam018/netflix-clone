import { NextRequest, NextResponse } from "next/server";
import { connects } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connects();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        //console.log(reqBody);
        const { email, password } = reqBody;

        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return NextResponse.json({ message: "Invalid Username or password" ,success:false });
        }
        const comparepas = await bcryptjs.compare(password, user.password);
        if (!comparepas) {
            return NextResponse.json({ message: "Invalid Username or password",success:false  });
        }

        const tokanData = {
            id: user._id,
            email: user.email
        }
        const token = jwt.sign(tokanData, process.env.SECRET_KEY!);
        const response = NextResponse.json({ success: true, message: "Login Successful" });
        response.cookies.set("authtoken", token, { httpOnly: true });
        return response;
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "Something wrong",success:false  });
    }
}