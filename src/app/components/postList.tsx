"use client";
import { motion } from "framer-motion";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  authorSlot?: React.ReactNode; // 👈 placeholder for author component
};

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <motion.div
      className="grid bg-slate-200 grid-cols-1 md:grid-cols-2 gap-4 py-4 px-1 md:p-6"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: post.id * 0.1 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.1, type: "spring" },
          }}
          className="mb-4 p-4 border bg-slate-100 border-gray-400 rounded-md"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: post.id * 0.15 }}
            className="text-xl font-bold mb-2"
          >
            {post.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: post.id * 0.2 }}
            className="text-gray-700"
          >
            {post.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: post.id * 0.25 }}
            className="mt-4"
          >
            {post.authorSlot}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
