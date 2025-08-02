import { NextRequest,NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
import { loginSchema } from "@/lib/validate/authSchema";
import { authenticateUser } from "@/lib/auth";
import { setTokenCookie, signToken } from "@/lib/jwt";



export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("body data: ", body);

    // ✅ Validate input
    const result = loginSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { email, password } = result.data;

    // ✅ Authenticate user
    const user = await authenticateUser(email, password);
    if (!user) {
      console.log("Invalid email or password");
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // ✅ Create and set token
    const token = await signToken(user.id, user.role);
    await setTokenCookie(token); // assumes it sets a cookie in a server-side context

    return NextResponse.json(
      {
        message: "Login successful",
        user: { id: user.id, role: user.role },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in login endpoint:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

