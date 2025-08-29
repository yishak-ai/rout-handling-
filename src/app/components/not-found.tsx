export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-center text-3xl font-semibold">DATA NOT FOUND</h2>
      <p className="text-center text-gray-500">
        The user you are looking for does not exist.
      </p>
    </div>
  );
}
