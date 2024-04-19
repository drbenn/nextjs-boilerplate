'user server';

// import { NextResponse } from "next/server"
import executeQuery from '../../lib/mysqldb';

// export async function GET() {
//     console.log('IN GET ==============');
    
//     // const result = await executeQuery("SELECT * FROM posts", []);
//     // console.log('route results');
    
//     // console.log(result);
//     // // return NextResponse.json({
//     // //     hello: 'world'
//     // // })
//     return NextResponse.json({
//         data: [{thing: 'yolo' }]
//     })
// }


import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        hello: 'world'
    })
}