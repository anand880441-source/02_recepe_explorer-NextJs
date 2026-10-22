import type { Recipe } from "@/types/recipe";
import Link from "next/link";

type Props = {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: Props) {
    return (
        <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="block aspect-video w-full object-cover"
            />

            <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                    {recipe.cuisine} - {recipe.difficulty}
                </p>

                <h2 className="my-2 text-xl font-semibold text-slate-900">
                        {recipe.title}
                </h2>

                <p className="leading-relaxed text-slate-600">{recipe.description}</p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                    <span className="text-slate-500">{recipe.prepTime} mins</span>

                    <Link
                        href={`/recipes/${recipe.id}`}
                        className="font-semibold text-emerald-800 hover:text-emerald-950"
                    >
                        View recipe
                    </Link>
                </div>
            </div>
        </article>
    )
}