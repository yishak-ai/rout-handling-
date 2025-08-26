import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
    // const headerlist =  new Headers(request.headers);
    // console.log(headerlist.get("Authorization"));
    const headrList = await headers();
    const cookiesStore = await cookies();
    // cookiesStore.set("theme", "dark");
    cookiesStore.set("role", "admin");
    console.log(headrList.get("Authorization"));
    const cookiesTeam =  request.cookies.get("theme");
    console.log(cookiesTeam);   
    return new Response("<h1>header page </h1>",{
        headers: { 
            "Content-Type": "text/html"

         }, status: 200
    });
}