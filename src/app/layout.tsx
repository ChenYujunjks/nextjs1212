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
            <Link href="/">
              <div className="text-lg font-semibold text-gray-800">
                Next.js App
              </div>
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/add-number"
                  className="px-4 py-2 bg-blue-600 text-white hover:text-blue-500 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
                >
                  Add
                </Link>
              </li>
              <li>
                <Link
                  href="/todolist-sample"
                  className="px-4 py-2 bg-green-600 text-white hover:text-green-500 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
                >
                  UI todolist
                </Link>
              </li>
              <li>
                <Link
                  href="/fetch-user"
                  className="px-4 py-2 bg-orange-600 text-white hover:text-orange-500 rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
                >
                  see User
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4 mt-6">{children}</main>
        <footer className="bg-gradient-to-r from-gray-600 to-purple-500 text-white p-4 mt-8 text-center">
          <p>© 2024 My Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
