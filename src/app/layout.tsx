// src/app/layout.tsx
import "@/styles/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="text-lg font-semibold text-gray-800">
              My Next.js App
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/add"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Add User
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4 mt-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
          <p>© 2024 My Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
