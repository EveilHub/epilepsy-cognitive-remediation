import { NextResponse } from "next/server";

async function POSTEPI(req: Request, res: Response) {
    const data = await req.body;

    if (!data) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    };

    console.log("data ok from epilepsy => ", data);

    //return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.json({data: "API patient done"}, {status: 200});
};