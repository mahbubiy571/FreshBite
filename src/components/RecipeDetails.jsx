import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function RecipeDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const recipe = data?.data?.find((item) => item.id === Number(id));

  if (!recipe) return <p className="text-center py-20">Recipe not found</p>;
  console.log(recipe.image.large);
  return (
    <div className="px-4 sm:px-8 lg:px-[124px] py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <img
          src={recipe.image?.large}
          alt={recipe.title}
          className="w-full h-[400px] object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            {recipe.title}
          </h1>
          <p className="text-neutral-700 mb-6">{recipe.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
