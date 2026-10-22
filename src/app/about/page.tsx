
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <p className="text-sm font-medium text-slate-500">Home <span className="mx-1 text-slate-300">/</span> About</p>

      <section className="mt-6 rounded-xl bg-emerald-50 px-6 py-12 text-center sm:px-10">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
          About Everyday Recipes
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          Everyday Recipes helps you discover delicious meals that are simple
          to prepare. Whether you are a beginner or an experienced cook,
          there is always something new to try.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-emerald-800 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-900"
        >
          Explore Recipes
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">
          What We Believe
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Simple Cooking</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Easy-to-follow recipes that make cooking less stressful.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Everyday Ingredients</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Delicious ideas using ingredients you can find easily.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Discover New Flavors</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Explore recipes and cuisines from around the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
