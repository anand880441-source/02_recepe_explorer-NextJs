
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-900 px-5 py-9 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-8">
        <div className="max-w-sm">
          <h2 className="font-semibold">Everyday Recipes</h2>

          <p className="mt-3 leading-relaxed text-slate-300">
            Discover delicious recipes and make every meal special.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <div className="mt-3 flex flex-col gap-2 text-slate-300">
            <Link className="hover:text-white" href="/">
              Home
            </Link>

            <Link className="hover:text-white" href="/cuisines">
              Cuisines
            </Link>

            <Link className="hover:text-white" href="/about">
              About
            </Link>

            <Link className="hover:text-white" href="/recipes/new">
              Add a Recipe
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-700 pt-5 text-center text-sm text-slate-300">
        © 2026 Everyday Recipes. All rights reserved.
      </div>
    </footer>
  );
}