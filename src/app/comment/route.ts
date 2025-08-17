import {Comments} from "./comment";
import {NextResponse} from "next/server";
export async function GET() {
    return NextResponse.json(Comments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = { 
        id: Comments.length +1,
        body: comment.body,
        userId: comment.userId,
        postId: comment.postId
    }
    Comments.push(newComment);
    return new  Response(JSON.stringify(newComment),{
        headers: { "Content-Type": "application/json",  },  status:200
    }
    )
}

