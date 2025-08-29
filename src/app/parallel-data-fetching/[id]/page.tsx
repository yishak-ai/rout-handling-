type post = {
  id: number;
  userId: number;
  body: string;
};
type album = {
  userId: number;
  id: number;
  title: string;
};
export async function fetchUserPosts(userId: string) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const response = await fetch(url);
  const post = await response.json();
  return post;
}
export async function fetchUserAlbums(userId: string) {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
  const response = await fetch(url);
  const album = await response.json();

  return album;
}
export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    throw new Error("User ID is required");
  }

  try {
    const [userPosts, userAlbums] = await Promise.all([
      fetchUserPosts(id),
      fetchUserAlbums(id),
    ]);

    if (!userPosts || !userAlbums) {
      throw new Error("Failed to fetch user data");
    }

    return (
      <div className="flex bg-slate-100 md:p-8 p-2 flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          User Profile Page
        </h1>
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          User Id: {id}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              User Posts:
            </h2>
            <ul>
              {userPosts.map((post: post) => (
                <div
                  key={post.id}
                  className="mb-4 p-4 border bg-slate-100 border-gray-400 rounded-md"
                >
                  <p className="text-slate-800">{post.body}</p>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              User Albums:
            </h2>
            <ul>
              {userAlbums.map((album: album) => (
                <div
                  className="mb-4 p-4 border bg-slate-100 border-gray-400 rounded-md"
                  key={album.id}
                >
                  <p className="text-slate-800">{album.title}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error occurred while fetching user data</div>;
  }
}
