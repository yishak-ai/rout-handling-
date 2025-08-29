"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error in User Server Page:", error.message);
  }, [error]);

  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.h2
        className="text-center text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Something went wrong!
      </motion.h2>
      <motion.p
        className="text-center text-gray-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {error.message}
      </motion.p>
      <motion.button
        onClick={reload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Try Again
      </motion.button>
    </div>
  );
}
