import prisma from '../../../../lib/prisma'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(){
    try{
        const users = await prisma.user.findMany();
        return NextResponse.json(users,{status:200});
    }catch(error){
        NextResponse.json({error: "Failed to fetch users"},{status:200});
    }
}

export async function POST(req:NextRequest){
    try{
        const { name } = await req.json();
        const user = await prisma.user.create({
            data:{name,}
        })
        return NextResponse.json(user,{status:200});
    }catch(error){
        return NextResponse.json({error: "Failed to create user"},{status:500});
    }
}