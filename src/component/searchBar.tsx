"use client";


import { useState } from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "./recipeCard";

export default function SearchRecipes() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="mx-auto max-w-6xl px-5 py-8">
      <div className="mb-6">
        <label
          htmlFor="recipe-search"
          className="mb-2 block font-semibold text-slate-900"
        >
          Search Recipes
        </label>

        <input
          id="recipe-search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by recipe name, cuisine, or description..."
          className="w-full max-w-2xl rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />
      </div>

      <p className="mb-5 text-sm text-slate-500">
        {filteredRecipes.length}{" "}
        {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
      </p>

      {filteredRecipes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="py-5 text-slate-500">
          No recipes found. Try another search.
        </p>
      )}
    </div>
  );
}
