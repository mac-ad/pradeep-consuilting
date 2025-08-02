import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(request:NextRequest){
    const{pathname,searchParams}=request.nextUrl;
    const method=request.method;
    if(pathname==="/login" || pathname==="/api/auth/login"|| pathname==="/api/checkout"){
        return NextResponse.next();
    }
    const isAppointmentGETWithParams=pathname==="/api/appointment" && method=== 'GET' && (searchParams.has('id') || searchParams.has('booking_dates')|| searchParams.has("search"));

    if(isAppointmentGETWithParams){
        return NextResponse.next();
    }
     
    const isAppointmentPost=pathname==='/api/appointment' && (method === "POST" || method === 'PUT');
    if(isAppointmentPost){
        return NextResponse.next();
    }


    const isUniversityGet=(pathname==='/api/university' && method==='GET') || (pathname==='/api/event' && method==='GET') || (pathname==='/api/blog' && method==='GET' ) ;

    if(isUniversityGet){
        return NextResponse.next();
    }


    
    const isProtectedPath=pathname.startsWith('/admin') || pathname.startsWith('/api');
    if(isProtectedPath){
        const token=request.cookies.get('auth')?.value;
        if(!token){
            console.warn("no auth token found");
            return NextResponse.redirect(new URL('/login',request.url));
        }
        const payload=await verifyToken(token);
        if(!payload || payload.role !=='admin'){
             console.warn('Invalid token or insufficient permissions...');
             return NextResponse.redirect(new URL('/login',request.url));
        }
    }
    return NextResponse.next();
    

}

export const config={
    matcher:['/admin/:path*','/api/:path*']
}