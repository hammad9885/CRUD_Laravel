import MainLayout from '@/layouts/MainLayout';

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
            <p className="text-gray-700">This is the home page of your application.</p>

        </>
    );
}
Home.layout = (page: React.ReactNode) => (
    <MainLayout>{page}</MainLayout>
);