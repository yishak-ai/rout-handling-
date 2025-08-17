"use client";

import { useState, useEffect } from "react";
type commenttype = {
  id: number;
  body: string;
  userId: number;
  postId: number;
};
export default function CommentById() {
  const [comments, setcommentId] = useState<commenttype[]>([]);
  useEffect(() => {
    fetch("api/comments/1")
      .then((res) => res.json())
      .then((data) => setcommentId(data));
  }, []);
  console.log(comments);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Body</th>
            <th>UserId</th>
            <th>PostId</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.body}</td>
              <td>{c.userId}</td>
              <td>{c.postId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
