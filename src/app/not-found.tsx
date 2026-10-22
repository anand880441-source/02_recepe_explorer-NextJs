
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="text-5xl font-bold text-emerald-800">404</h1>

      <h2 className="mt-3 text-2xl font-semibold text-slate-900">Page Not Found</h2>

      <p className="mt-3 text-slate-600">
        Sorry, we couldn&apos;t find the page you are looking for.
      </p>

      <Link
        href="/"
        className="mt-5 inline-block rounded-md bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900"
      >
        Back to Recipes
      </Link>
    </div>
  );
}
