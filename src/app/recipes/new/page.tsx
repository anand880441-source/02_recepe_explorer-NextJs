"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { saveRecipe } from "../../../data/recipe";
import type { Recipe } from "../../../types/recipe";

export default function NewRecipePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleSubmit() {
    const recipe: Recipe = {
      id: Date.now().toString(),
      title,
      cuisine,
      category,
      difficulty,
      prepTime: Number(prepTime),
      servings: Number(servings),
      image,
      description,
      ingredients: ingredients.split("\n").filter((item) => item.trim()),
      instructions: instructions.split("\n").filter((item) => item.trim()),
    };

    // saveRecipe(recipe);
    // alert("Recipe saved successfully!");
    // router.push("/");
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Add a New Recipe
      </h1>

      <p className="mb-6 mt-2 text-slate-600">
        Share your favorite recipe!
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <label className="mb-2 block font-medium text-slate-700">Recipe Title</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter recipe title"
          required
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <label className="mb-2 block font-medium text-slate-700">Cuisine</label>
        <select
          value={cuisine}
          onChange={(event) => setCuisine(event.target.value)}
          required
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Select cuisine</option>
          <option value="Asian">Asian</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
          <option value="American">American</option>
        </select>

        <label className="mb-2 block font-medium text-slate-700">Category</label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Select category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
        </select>

        <label className="mb-2 block font-medium text-slate-700">Difficulty</label>
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          required
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <label className="mb-2 block font-medium text-slate-700">Preparation Time (minutes)</label>
        <input
          type="number"
          min="1"
          value={prepTime}
          onChange={(event) => setPrepTime(event.target.value)}
          placeholder="e.g. 30"
          required
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <label className="mb-2 block font-medium text-slate-700">Servings</label>
        <input
          type="number"
          min="1"
          value={servings}
          onChange={(event) => setServings(event.target.value)}
          placeholder="e.g. 4"
          required
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <label className="mb-2 block font-medium text-slate-700">Image URL</label>
        <input
          type="url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="https://example.com/recipe.jpg"
          required
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <label className="mb-2 block font-medium text-slate-700">Description</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe your recipe"
          required
          rows={3}
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <label className="mb-2 block font-medium text-slate-700">Ingredients (one per line)</label>
        <textarea
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          placeholder={"2 tomatoes\n1 onion\n1 teaspoon salt"}
          required
          rows={5}
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <label className="mb-2 block font-medium text-slate-700">Instructions (one step per line)</label>
        <textarea
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
          placeholder={"Chop the vegetables\nHeat the pan\nCook and serve"}
          required
          rows={5}
          className="mb-5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <button
          type="submit"
          className="w-full rounded-md bg-emerald-800 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-900"
        >
          Save Recipe
        </button>
      </form>
    </main>
  );
}