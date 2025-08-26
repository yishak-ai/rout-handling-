import {Comments} from "./comment";

// fatching all Comments
export async function GET() {
    return Response.json(Comments);
}

// fatching  single or more comment by spesfic  columen value

// export async function GET(request: NextRequest) {
//     const url = new URL(request.url);
//     const postId = url.searchParams.get("postId");
//     const comments = Comments.filter((comment) => comment.postId == postId);
//     return Response.json(comments);
// }

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

