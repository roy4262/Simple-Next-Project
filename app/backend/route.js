import { NextResponse} from "next/server";

export function GET(){            //GET is a method not identifier
    return NextResponse.json({
        msg: "hi this is backend response"
    })
}
export async function POST(req){            //GET is a method not identifier
    const data=await req.json();
    return NextResponse.json({
       data
    })
}