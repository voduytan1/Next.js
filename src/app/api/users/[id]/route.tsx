import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'

export async function GET(req:NextRequest, { params }: { params: { id: string } }){
    try{
        const id = parseInt(params.id)
        const user = await prisma.user.findUnique({
            where:{id,}
        })
        return NextResponse.json(user,{status:200});
    }catch(error){
        return NextResponse.json({error: "Failed to create user"},{status:500});
    }
}

export async function PUT(req:NextRequest,  { params }: { params: { id: string } }){
    try{
        const id = parseInt(params.id);
        const {name} = await req.json();
        const user = await prisma.user.update({
            where: {id},
            data: {name}
        })
        return NextResponse.json(user,{status:200});
    }catch(error){
        return NextResponse.json({error: "Failed to update user"},{status:500});
    }
}



export async function DELETE(req:NextRequest,  { params }: { params: { id: string } }){
    try{
        const id = parseInt(params.id);
        const user = await prisma.user.delete({
            where: {id},
        })
        return NextResponse.json(user,{status:200});
    }catch(error){
        return NextResponse.json({error: "Failed to delete user"},{status:500});
    }
}