import UserComponent from "@/components/UserComponent";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Users
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((user: any) => (
            <div key={user.id}>
              <UserComponent user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
