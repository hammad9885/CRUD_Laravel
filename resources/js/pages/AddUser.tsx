import { useForm } from "@inertiajs/react";
import MainLayout from "@/layouts/MainLayout";

export default function AddUser() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/users");
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-6">Add New User</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                    {errors.name && (
                        <div className="text-red-500 text-sm">{errors.name}</div>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                    {errors.email && (
                        <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                    {errors.password && (
                        <div className="text-red-500 text-sm">{errors.password}</div>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    {processing ? "Saving..." : "Create User"}
                </button>
            </form>
        </div>
    );
}

// Layout attach
AddUser.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;