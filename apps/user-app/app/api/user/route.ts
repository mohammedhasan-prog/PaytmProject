import { getServerSession } from "next-auth";
import { NextResponse,NextRequest } from "next/server";
import { authProvider } from "../../../lib/auth";

export async   function GET(req:NextRequest) {
    try {
        const session = await  getServerSession(authProvider);
    
        if(session?.user){
            return NextResponse.json({
                user:session.user
            })
        }
    
    } catch (error) {
        console.log(error,"error in getting user")
        
    }
    return NextResponse.json({
      message:"No user found" 
    })
}