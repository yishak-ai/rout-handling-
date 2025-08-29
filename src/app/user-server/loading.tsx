export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-4 border-t-2 border-b-2 border-gray-500 h-32 w-32 mb-4"></div>
      <h2 className="text-center text-xl font-semibold">Loading...</h2>
      <p className="text-center text-gray-500">Please wait</p>
    </div>
  );
}
