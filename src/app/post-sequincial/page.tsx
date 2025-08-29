import { PostList } from "../components/postList";
import FetchAuthor from "../components/fetchAuthor";
import { notFound } from "next/navigation";

export default async function PostSequentialPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

  const res = await fetch("http://localhost:3000/api/post", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    notFound();
  }

  const posts = await res.json();
  const filteredPosts = posts.filter(
    (post: { id: number }) => post.id % 10 === 1
  );

  // Attach author component slot to each post
  const postsWithAuthors = filteredPosts.map((post: any) => ({
    ...post,
    authorSlot: <FetchAuthor userId={post.userId} />,
  }));

  return (
    <div className="flex bg-slate-100 md:p-8 p-2 flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        Post Sequential Page
      </h1>
      <PostList posts={postsWithAuthors} />
    </div>
  );
}
