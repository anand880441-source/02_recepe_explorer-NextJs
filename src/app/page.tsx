
import RecipeCard from "@/component/recipeCard"
import { recipes } from '@/data/recipes'

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <section className="mb-8 rounded-xl bg-emerald-50 px-6 py-8 sm:px-8">
          <p className="mb-3 text-sm font-medium text-slate-500">
            Home <span className="mx-1 text-slate-300">/</span> Recipes
          </p>

          <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900">
            All Recipes
          </h1>

          <p className="max-w-2xl leading-relaxed text-slate-600">
            Discover delicious recipes for your everyday cooking.
            Find something wonderful to make today.
          </p>

          <p className="mt-4 text-sm font-semibold text-emerald-900">
            {recipes.length} recipes to explore
          </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((data) => (
          <RecipeCard key={data.id} recipe={data} />
        ))}
      </div>
    </div>
  )
}