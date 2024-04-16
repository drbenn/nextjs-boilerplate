import { NextResponse } from "next/server"
import { createUser, getUsers } from '@/app/lib/userApiService';


export async function GET() {
    console.log('IN GETETETS');
    let users = await getUsers();
    console.log(users);
    return NextResponse.json({
        users
    })
    // return NextResponse.json({
    //     hello: 'world'
    // })
}

export async function POST(request: Request) {
    console.log('IN Request');

    // const data = await request.json();  
    // return NextResponse.json({
    //     data,
    // });
    const data = await request.json()
}