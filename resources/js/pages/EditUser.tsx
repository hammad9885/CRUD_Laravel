import { useForm } from "@inertiajs/react";
import MainLayout from "@/layouts/MainLayout";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function EditUser({ user }: { user: User }) {

    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-bold mb-4">Edit User</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="border p-2 w-full"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}

                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className="border p-2 w-full"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2"
                >
                    Update
                </button>
            </form>
        </div>
    );
}

EditUser.layout = (page: React.ReactNode) => (
    <MainLayout>{page}</MainLayout>
);