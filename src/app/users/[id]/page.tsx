const UserDetailPage = async ({ params }: any) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.name}</h1>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="text-sm text-gray-500">User ID: {data.id}</p>
            <p className="text-lg font-medium text-gray-700">
              Username: {data.username}
            </p>
            <p className="text-lg font-medium text-gray-700">
              Email: {data.email}
            </p>
            <p className="text-lg font-medium text-gray-700">
              Phone: {data.phone}
            </p>
            <p className="text-lg font-medium text-gray-700">
              Website: {data.website}
            </p>
          </div>
          <div className="border-b pb-4">
            <p className="text-lg font-medium text-gray-700">
              Address: {data.address.city}, {data.address.street},{" "}
              {data.address.suite}
            </p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-700">
              Company: {data.company.name} - {data.company.catchPhrase}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
