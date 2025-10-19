import Link from "next/link";

export default function UserComponent({ user }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Name: {user.name}
        </h1>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
      <div className="text-center">
        <Link
          href={`/users/${user.id}`}
          className="inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
}
