import { recipes } from "@/data/recipes"
import { notFound } from "next/navigation"
import Link from "next/link"

type Props = {
    params: Promise<{ id: string }>
}

export default async function RecipeDetailsPage({ params }: Props) {

    const { id } = await params;

    const data = recipes.find((item) => (item.id === id));

    if (!data) {
        notFound();
    }

    return (
            <div className="mx-auto max-w-5xl px-5 py-10">
                <Link
                    href="/"
                    className="font-semibold text-emerald-800 hover:text-emerald-950"
                >
                    Back to recipes
                </Link>

                <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                        {data.cuisine} · {data.category} · {data.difficulty}
                    </p>

                    <h1 className="mb-3 mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {data.title}
                    </h1>

                    <p className="max-w-3xl leading-relaxed text-slate-600">
                        {data.description}
                    </p>

                    <img
                        src={data.image}
                        alt={data.title}
                        className="mt-6 aspect-video w-full rounded-xl object-cover"
                    />

                    <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-slate-200 py-5 text-sm text-slate-600">
                        <p><span className="font-semibold text-slate-900">Prep time:</span> {data.prepTime} minutes</p>
                        <p><span className="font-semibold text-slate-900">Servings:</span> {data.servings}</p>
                        <p><span className="font-semibold text-slate-900">Difficulty:</span> {data.difficulty}</p>
                    </div>

                    <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900">Ingredients</h2>

                            <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
                                {data.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900">Instructions</h2>

                            <ol className="mt-3 list-inside list-decimal space-y-3 text-slate-600">
                                {data.instructions.map((instruction, index) => (
                                    <li key={index}>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
    )
}