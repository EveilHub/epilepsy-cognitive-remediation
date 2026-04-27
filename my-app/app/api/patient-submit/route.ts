import { NextResponse } from "next/server";

async function POST(req: Request, res: Response) {
    const data = await req.body;

    if (!data) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    };

    console.log("Ok with data from patient");

    //return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.json({data: "API patient done"}, {status: 200});
};