import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const encoder = new TextEncoder();
const secret = encoder.encode(process.env.JWT_SECRET!);

// SIGN TOKEN
export async function signToken(userId: string, role: string) {
    const token = await new SignJWT({ userId, role })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1day')
        .setIssuer('ample')
        .sign(secret);
    return token;
}

export async function verifyToken(token: string): Promise<{ userId: string; role: string } | null> {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload as { userId: string; role: string };
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}

// SET COOKIE
export async function setTokenCookie(token: string) {
    const cookieStore = await cookies();
    cookieStore.set('auth', token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 1 day
    });
}

export async function getTokenCookie() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;
    return token || null;
}

export async function removeTokenCookie() {
    (await cookies()).delete('auth');
}