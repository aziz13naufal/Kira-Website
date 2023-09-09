import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
    const body = await request.json();
    const message = await prisma.message.create({
        data: {
            message: String(body.message) 
        }
    })
    return NextResponse.json(message, {status: 201});
}