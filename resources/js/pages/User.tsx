import { Link, router } from "@inertiajs/react";
import MainLayout from "@/layouts/MainLayout";

type UserType = {
    id: number;
    name: string;
    email: string;
};

export default function User({ users }: { users: UserType[] }) {

    const deleteUser = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(`/users/${id}`);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">

            {/* Heading */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Users List
                </h1>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white shadow rounded-lg">

                <table className="min-w-full divide-y divide-gray-200">

                    {/* Head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                ID
                            </th>

                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Name
                            </th>

                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                Email
                            </th>

                            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-gray-200">

                        {users?.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition">

                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        {user.id}
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                        {user.name}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {user.email}
                                    </td>

                                    <td className="px-6 py-4 text-right space-x-3">

                                        <Link
                                            href={`/users/${user.id}/edit`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-6 text-center text-gray-500"
                                >
                                    No users found
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
}

User.layout = (page: React.ReactNode) => (
    <MainLayout>{page}</MainLayout>
);