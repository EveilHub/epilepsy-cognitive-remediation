import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    //const data = await req.body;
    const patientId = await cookies();

    // if (!patientId) {

    // }

    // if (!data) {
    //     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    // };

    console.log("Ok with data from patient");

    //return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.json({data: "API patient done"}, {status: 200});
};