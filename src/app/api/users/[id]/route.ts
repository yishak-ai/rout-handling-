import { NextResponse } from "next/server";
export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
){
const {id} = await context.params;
const userId = parseInt(id, 10);

const users = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
    {
        next: {revalidate: 3600}, // Cache for 1 hour
    }
);
if(!users.ok){
    throw new Error("Failed to fetch users");
}
const data = await users.json();
if(!data){
    return new Response(JSON.stringify({error: "User not found"}), {status: 404});
}
return NextResponse.json(data);
}