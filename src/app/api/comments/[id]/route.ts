import { Comments } from "@/app/comment/comment";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } 
) {
  const { id } = await context.params; 
  const commentId = parseInt(id, 10);

  const comment = Comments.find((c) => c.id === commentId);

  if (!comment) {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(comment), { status: 200 });
}



export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const commentId = parseInt(id, 10);

  // Find existing comment
  const commentIndex = Comments.findIndex((c) => c.id === commentId);
  if (commentIndex === -1) {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
    });
  }

  // Get body data from request
  const newRequest = await request.json();

  // Update comment in array
 const {body} = newRequest;
  Comments[commentIndex].body = body;
  return Response.json(Comments[commentIndex]) ;
}