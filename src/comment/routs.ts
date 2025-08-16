import {Comments} from "./comment";
import {NextResponse} from "next/server";
export async function GET() {
    return NextResponse.json(Comments);
}