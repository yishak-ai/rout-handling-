"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
};

// Fallback data in case the API fails

export default function UserList({ users }: { users: User[] }) {
  // Use provided users or fallback if empty
  const displayUsers = users.length > 0 ? users : notFound();
  return (
    <main className="p-6">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        User Client Page
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-4"
      >
        This is a user client page.
      </motion.p>

      <table className="border border-gray-300 w-full">
        <thead>
          <motion.tr
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              borderColor: "#fbbf24",
              borderWidth: 2,
            }}
            transition={{ duration: 1 }}
            className="bg-gray-200 border-amber-100 border-0 "
          >
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </motion.tr>
        </thead>
        <tbody>
          {displayUsers.map((data: User, index: number) => (
            <motion.tr
              key={data.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                borderColor: "#fbbf24",
                borderWidth: 2,
              }}
              transition={{ delay: index * 0.1, duration: 0.5 }} // staggered animation
              className="hover:bg-gray-100"
            >
              <motion.td
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor: "#fbbf24",
                  borderWidth: 2,
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {data.id}
              </motion.td>

              <motion.td
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor: "#fbbf24",
                  borderWidth: 2,
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {data.name}
              </motion.td>

              <motion.td
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor: "#fbbf24",
                  borderWidth: 2,
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {data.username}
              </motion.td>

              <motion.td
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor: "#fbbf24",
                  borderWidth: 2,
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {data.email}
              </motion.td>

              <motion.td
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor: "#fbbf24",
                  borderWidth: 2,
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {data.phone}
              </motion.td>

              <motion.td
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor: "#fbbf24",
                  borderWidth: 2,
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {data.website}
              </motion.td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
