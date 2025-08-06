"use server";
import { getServerSession } from 'next-auth';
import { authOptions } from './../auth';
import prisma from '@repo/db/client';

export async function createOnRampTransaction(amount: number, provider: string) {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;
    
    //  get token from bank
    //  const token = await axios.get("https://api.axisbank.com/getToken", {
    //    amount: }
    //  )}

    const token = Math.random().toString(); //simulating token for example
    if (!userId) {
        return {
            message: "User not logged in"
        };
    }

    await prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            amount: amount,
            status: "Processing",
            startTime: new Date(),
            provider,
            token: token
        }
    })
    return {
        message: "OnRamp Transaction Added"
    }

}