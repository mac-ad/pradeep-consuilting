import compare from 'bcrypt';
import prisma  from './prisma';
import { getTokenCookie, verifyToken } from './jwt';


export async function authenticateUser(
    email: string,
    password: string,) {
    const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
    });
    console.log("reached here");
    if (!user) {
        return null;
    }
    // Check password
    const isPasswordValid = await compare.compare(password, user.password!);

    if (!isPasswordValid) {
        return null;
    }
    return user;
}

// export async function getAuthenticatedUser() {
//     const token = await getTokenCookie();
//     if (!token) return null;

//     const decodedToken = verifyToken(token);
//     if (!decodedToken) return null;

//     const user = await prisma.user.findUnique();
//     return user;
// }

export async function getUserId(){
    const token=await getTokenCookie();
    if(!token) return null;
    const decodedToken= await verifyToken(token);
    if(!decodedToken) return null;
    console.log("decodedToken: ",decodedToken);
    const userId= decodedToken.userId;
    return userId;

}