import Navbar from "@/component/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="p-4">
                {children}
            </main>
        </>
    );
}
