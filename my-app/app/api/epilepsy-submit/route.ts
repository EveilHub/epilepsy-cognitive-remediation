import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const data = await cookies();
    const patientId = cookieStore.get("selectedPatientId")?.value;

    if (!patientId) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
    };

    const { fatigue, aDouleur, evaDouleur } = await req.json();

    if (!fatigue || aDouleur === undefined) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
    };

    if (patientId) {
        return NextResponse.json({data: "API patient done"}, {status: 201});
    };

    return NextResponse.json({response: "something went wrong"}, {status: 500});
};