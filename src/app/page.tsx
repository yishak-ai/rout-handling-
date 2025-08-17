// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
type comment = {
  id: number;
  body: string;
  userId: number;
  postId: number;
};

export default function HomePage() {
  const [comments, setComments] = useState<comment[]>([]);
  useEffect(() => {
    fetch("comment")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <table className="table-auto">
        <thead className="bg-gray-500 text-yellow-600">
          <tr className="bg-gray-500 m-28 text-yellow-600 p-3 border-2  ">
            <th className="p-3 border-l-2">Id</th>
            <th className="p-3 border-l-2 ">UserId</th>
            <th className="p-3 border-l-2 ">PostId</th>
            <th className="border-l-2 border-r-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr
              className="bg-slate-300 m-28 text-gray-600 p-3 border-2 "
              key={index}
            >
              <td className="p-3 border-l-2">{comment.id}</td>
              <td className="p-3 border-l-2">{comment.userId}</td>
              <td className="p-3 border-l-2">{comment.postId}</td>
              <td className="p-3 border-l-2 border-r-2">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
