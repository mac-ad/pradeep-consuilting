import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-2/3 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Blog Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, the blog post you are looking for doesn&apos;t exist or has
          been removed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Home size={18} />
            <span>Go Home</span>
          </Link>

          <Link
            href="/blogs"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            <RefreshCw size={18} />
            <span>See All Blogs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
