import { Link } from "@inertiajs/react";

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                
                {/* Logo */}
                <div className="text-xl font-bold tracking-wide">
                    MyApp
                </div>

                <ul className="flex items-center space-x-6">
                    <li>
                        <Link 
                            href="/" 
                            className="hover:text-gray-300 transition"
                        >
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link 
                            href="/users" 
                            className="hover:text-gray-300 transition"
                        >
                            Users
                        </Link>
                    </li>

                    <li>
                        <Link 
                            href="/users/create" 
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
                        >
                            + Add User
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
