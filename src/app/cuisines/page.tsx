
import Link from "next/link";
import { recipes } from "../../data/recipes";

export default function CuisinesPage() {
  const cuisines = [...new Set(recipes.map((recipe) => recipe.cuisine))];

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <p className="text-sm font-medium text-slate-500">Home <span className="mx-1 text-slate-300">/</span> Cuisines</p>

      <h1 className="mb-3 mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Explore Cuisines
      </h1>

      <p className="leading-relaxed text-slate-600">
        Discover recipes from different cuisines around the world.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cuisines.map((cuisine) => {
          const count = recipes.filter(
            (recipe) => recipe.cuisine === cuisine
          ).length;

          return (
            <Link
              key={cuisine}
              href={`/cuisines/${cuisine.toLowerCase()}`}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
            >
              <h2 className="text-xl font-semibold text-slate-900">{cuisine}</h2>

              <p className="mt-2 text-sm text-slate-500">
                {count} {count === 1 ? "recipe" : "recipes"}
              </p>

              <span className="mt-5 inline-block font-semibold text-emerald-800">
                Explore recipes
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
