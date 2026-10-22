
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "../../../data/recipes";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CuisinePage({ params }: Props) {
  const { slug } = await params;

  const cuisine = slug.charAt(0).toUpperCase() + slug.slice(1);

  const cuisineRecipes = recipes.filter(
    (recipe) => recipe.cuisine === cuisine
  );

  if (cuisineRecipes.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <p className="text-sm font-medium text-slate-500">
        <Link href="/" className="hover:text-emerald-800">
          Home
        </Link>{" "}
        <span className="mx-1 text-slate-300">/</span>
        <Link href="/cuisines" className="hover:text-emerald-800">
          Cuisines
        </Link>{" "}
        <span className="mx-1 text-slate-300">/</span> {cuisine}
      </p>

      <h1 className="mb-3 mt-4 text-3xl font-bold tracking-tight text-slate-900">{cuisine} Recipes</h1>

      <p className="leading-relaxed text-slate-600">
        Explore our delicious {cuisine} recipes.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cuisineRecipes.map((recipe) => (
          <article key={recipe.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="aspect-video w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900">{recipe.title}</h2>

              <p className="mt-2 leading-relaxed text-slate-600">
                {recipe.description}
              </p>

              <Link
                href={`/recipes/${recipe.id}`}
                className="mt-4 inline-block font-semibold text-emerald-800 hover:text-emerald-950"
              >
                View recipe
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
