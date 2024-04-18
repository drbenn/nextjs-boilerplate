'user server';

import { NextResponse } from "next/server"
import executeQuery from '../../lib/mysqldb';

export async function GET() {
    const result = await executeQuery("SELECT * FROM posts", []);
    console.log('route results');
    
    console.log(result);
    // return NextResponse.json({
    //     hello: 'world'
    // })
    return NextResponse.json({
        data: result
    })
}