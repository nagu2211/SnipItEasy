import { NextResponse } from "next/server";
export async function GET(){
    return NextResponse.json({
        hello:"world"
    })
}

export async function POST(request:Request){
    const url = await request.json();
    const shortUrl = Math.random().toString(36).substring(2, 5);
    return NextResponse.json({
        url,shortUrl
    })
}