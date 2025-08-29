import { NextResponse } from "next/server";
export async function GET(){
const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
if(!posts.ok){
    throw new Error("Failed to fetch posts");
}
const data = await posts.json();
return NextResponse.json(data);
}