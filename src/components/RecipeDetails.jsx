import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function RecipeDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes"
  );

  const {
    data: moreData,
    loading: moreLoading,
    error: moreError,
  } = useFetch("https://json-api.uz/api/project/recipes/recipes?limit=4");

  console.log(moreData);

  if (loading)
    return (
      <div className="flex justify-center items-center py-40">
        <div className="flex items-center gap-3 text-neutral-700 text-lg font-semibold">
          <svg
            className="animate-spin h-6 w-6 text-neutral-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span>Loading recipes...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center py-20">
        <div className="bg-red-100 border border-red-300 text-red-700 px-6 py-4 rounded-xl shadow-sm">
          ❌ <span className="font-medium">Error:</span> {error}
        </div>
      </div>
    );

  const recipe = data?.data?.find((item) => item.id === Number(id));

  if (!recipe) return <p className="text-center py-20">Recipe not found</p>;
  console.log(recipe.image.large);
  return (
    <div className="px-4 sm:px-8 lg:px-[124px] py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <img
          src={`/assets/images/${recipe.slug}-large.webp`}
          alt={recipe.title}
          className="w-full h-[400px] object-cover rounded-xl"
        />

        {/* Content */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            {recipe.title}
          </h1>
          <p className="text-neutral-700 mb-6">{recipe.overview}</p>

          <div className="flex flex-wrap gap-6 mb-6 text-sm text-neutral-800">
            <span>👥 {recipe.servings} servings</span>
            <span>⏱ Prep {recipe.prepMinutes} min</span>
            <span>🔥 Cook {recipe.cookMinutes} min</span>
          </div>

          <h2 className="text-xl font-semibold mb-3">Ingredients:</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-3">Instructions:</h2>
          <ol className="list-decimal pl-6 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {moreData?.data
          ?.filter((item) => item.id !== recipe.id) // hozirgi recipeni chiqaramiz
          .slice(0, 3) // faqat 3 ta retsept olamiz
          .map((item) => (
            <div
              key={item.id}
              className="bg-white p-2 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`/assets/images/${item.slug}-large.webp`}
                alt={item.title}
                className="w-full h-[220px] object-cover rounded-xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-neutral-900 mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                  {item.overview}
                </p>
                <button className="bg-neutral-900 text-white px-4 py-2 w-full rounded-full font-bold hover:bg-neutral-800">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
