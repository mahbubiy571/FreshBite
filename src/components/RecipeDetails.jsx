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
    <div className="py-10">
      <div className="mb-16 border-b border-b-neutral-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-[124px]">
          <div>
            <h4 className="font-semibold text-[18px] leading-[150%] mb-4">
              Mediterranean Chickpea Salad
            </h4>
            <img
              src={recipe.image.large.replace("./", "/")}
              alt={recipe.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-extrabold text-neutral-900 mb-5 mt-10">
              {recipe.title}
            </h1>
            <p className="nunito__sans mb-5">{recipe.overview}</p>

            <div className="flex flex-wrap gap-6 mb-5 text-sm text-neutral-800">
              <div className="flex lg:flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src="../assets/images/icon-servings.svg"
                    alt="Servings"
                    className="w-5 h-5"
                  />
                  <span className="text-sm">{recipe.servings} servings</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="../assets/images/icon-prep-time.svg"
                    alt="Prep time"
                    className="w-5 h-5"
                  />
                  <span className="text-sm">Prep {recipe.prepMinutes} min</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="../assets/images/icon-cook-time.svg"
                  alt="Cook time"
                  className="w-5 h-5"
                />
                <span className="text-sm">Cook {recipe.cookMinutes} min</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Ingredients:</h2>
            <ol className="nunito__sans mb-5 space-y-2">
              {recipe.ingredients?.map((item, index) => (
                <li key={index}>
                  <div className="flex items-start gap-5">
                    <img
                      src="../assets/images/icon-bullet-point.svg"
                      alt="Bullet point icon"
                      className="w-8 h-8"
                    />
                    <p>{item}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold mb-4">Instructions:</h2>
            <ol className="nunito__sans mb-16 space-y-2">
              {recipe.instructions?.map((step, index) => (
                <li key={index}>
                  <div className="flex items-start gap-5">
                    <img
                      src="../assets/images/icon-bullet-point.svg"
                      alt="Bullet point icon"
                      className="w-8 h-8"
                    />
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-[124px]">
        <h2 className="mb-6 font-bold text-[32px] leading-[130%]">
          More recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreData?.data
            ?.filter((item) => item.id !== recipe.id)
            .slice(0, 3)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white p-2 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image.large.replace(
                    "./assets/images",
                    "/assets/images"
                  )}
                  alt={item.title}
                  className="w-full h-[360px] object-cover rounded-xl mb-2"
                />
                <div className="p-2">
                  <h3 className="font-bold text-[20px] text-neutral-900 mb-2.5 leading-[140%] line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="nunito__sans mb-4">{item.overview}</p>

                  <div className="flex mb-4 gap-x-4">
                    <div className="flex flex-col  sm:flex-row lg:flex-col gap-4 lg:gap-0">
                      <div className="flex gap-2">
                        <img
                          src="../assets/images/icon-servings.svg"
                          alt="Servings"
                          className="w-5 h-5"
                        />
                        <span className="text-sm">
                          {item.servings} servings
                        </span>
                      </div>
                      <div className="flex gap-2 lg:mt-2">
                        <img
                          src="../assets/images/icon-prep-time.svg"
                          alt="Prep time"
                          className="w-5 h-5"
                        />
                        <span className="text-sm">
                          Prep {item.prepMinutes} min
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <img
                        src="../assets/images/icon-cook-time.svg"
                        alt="Cook time"
                        className="w-5 h-5"
                      />
                      <span className="text-sm">
                        Cook {item.cookMinutes} min
                      </span>
                    </div>
                  </div>

                  <button className="bg-neutral-900 text-white px-4 py-2 w-full rounded-full font-bold hover:bg-neutral-800">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
