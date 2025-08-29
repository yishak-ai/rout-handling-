// src/app/components/fetchAuthor.tsx
type Author = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export default async function FetchAuthor({ userId }: { userId: number }) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

  const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    return <p className="text-red-500">Failed to load author details.</p>;
  }

  const author: Author = await res.json();

  return (
    <div className=" rounded-none p-4   bg-gray-100 mt-4">
      <h2 className=" font-semibold mb-4">
        Author:
        <span className="text-blue-500"> {author.username}</span>{" "}
      </h2>
    </div>
  );
}
