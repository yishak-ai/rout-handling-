import UserList from "@/app/components/UserLists";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export default async function UserServerPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // let users: User[] = sampleUsers;
  let users: User[] = [];
  try {
    // Call your own API route instead of external API directly
    const res = await fetch("http://localhost:3000/api/users", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (res.ok) {
      users = await res.json();
    }
  } catch (error: null | number | string | any) {
    console.error("Failed to fetch users:", error.message);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      <UserList users={users} />
    </div>
  );
}
