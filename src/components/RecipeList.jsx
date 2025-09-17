import { useState, useCallback, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";

function RecipeList() {
  const { data, loading, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes"
  );

  // filter state
  const [filters, setFilters] = useState({
    prep: "",
    cook: "",
    search: "",
  });

  // umumiy filter handler
  function handleFilter(name, value) {
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  // debounced search
  const debouncedSearch = useCallback(
    debounce((value) => {
      handleFilter("search", value);
    }, 500),
    []
  );

  // cleanup for debounce
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // filterlangan data
  const filteredRecipes = data?.data?.filter((recipe) => {
    const matchPrep = filters.prep
      ? recipe.prepMinutes <= Number(filters.prep)
      : true;
    const matchCook = filters.cook
      ? recipe.cookMinutes <= Number(filters.cook)
      : true;
    const matchSearch = filters.search
      ? recipe.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        recipe.overview.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    return matchPrep && matchCook && matchSearch;
  });

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
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

  return (
    <>
      {/* Filter UI */}
      <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-8 lg:px-[124px] mb-8">
        {/* Prep Time */}
        <select
          value={filters.prep}
          onChange={(e) => handleFilter("prep", e.target.value)}
          className="border p-2 rounded-md font-semibold text-[18px] leading-[150%] text-neutral-900"
        >
          <option value="">Max Prep Time</option>
          <option value="0">0 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
        </select>

        {/* Cook Time */}
        <select
          value={filters.cook}
          onChange={(e) => handleFilter("cook", e.target.value)}
          className="border p-2 rounded-md font-semibold text-[18px] leading-[150%] text-neutral-900"
        >
          <option value="">Max Cook Time</option>
          <option value="0">0 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
        </select>

        {/* Search */}
        <div className="relative w-full sm:w-[320px] md:w-[310px] ml-auto">
          <img
            src="/assets/images/icon-search.svg"
            alt="Search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search by name or ingredient…"
            className="border p-2 rounded-xl w-full pl-10 text-[18px] font-semibold leading-[150%] text-neutral-900"
            onChange={(e) => debouncedSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Recipes List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-[124px]">
        {filteredRecipes?.map((recipe) => (
          <li
            key={recipe.id}
            className="bg-white p-2 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.image.small}
              alt={recipe.title}
              className="w-full h-[300px] sm:h-[450px] lg:h-[360px] object-cover rounded-xl"
            />

            <div className="p-5">
              <h3 className="font-bold text-[20px] text-neutral-900 mb-2 line-clamp-1">
                {recipe.title}
              </h3>
              <p className="nunito__sans mb-4 line-clamp-2">
                {recipe.overview}
              </p>

              <div className="recipe__meta flex flex-col sm:flex-row lg:flex-col gap-2 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="./assets/images/icon-servings.svg"
                      alt="Servings"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">{recipe.servings} servings</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      src="./assets/images/icon-prep-time.svg"
                      alt="Prep time"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">
                      Prep {recipe.prepMinutes} min
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="./assets/images/icon-cook-time.svg"
                    alt="Cook time"
                    className="w-5 h-5"
                  />
                  <span className="text-sm">Cook {recipe.cookMinutes} min</span>
                </div>
              </div>

              <Link to={`/recipe/${recipe.id}`}>
                <button className="bg-neutral-900 text-white px-4 py-3 w-full rounded-full font-bold hover:bg-neutral-800">
                  View Recipe
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
