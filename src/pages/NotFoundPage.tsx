/**
 * 404 Not Found page.
 *
 * Requirements: 16.1, 16.4
 */

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Evergreen Arbor Services</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main
        id="main-content"
        className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24 text-center"
      >
        {/* Large decorative numeral */}
        <div
          className="text-9xl font-extrabold text-green-200 select-none leading-none mb-4"
          aria-hidden="true"
        >
          404
        </div>

        {/* Tree icon */}
        <div className="text-green-700 mb-6" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22V12" />
            <path d="M12 12C12 12 7 9 7 6a5 5 0 0 1 10 0c0 3-5 6-5 6z" />
            <path d="M12 12C12 12 17 9 17 6" />
            <path d="M9 16l-3 3" />
            <path d="M15 16l3 3" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          We can't find that page
        </h1>

        <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
          The page you're looking for may have moved, been removed, or the link
          might be slightly off. Don't worry — you can head back to our home page
          and find everything you need from there.
        </p>

        <Link
          to="/"
          className="
            inline-block rounded-lg bg-green-700 px-8 py-3
            text-base font-semibold text-white shadow-sm
            transition-colors duration-200
            hover:bg-green-800
            focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2
          "
        >
          Back to the home page
        </Link>
      </main>
    </>
  )
}
