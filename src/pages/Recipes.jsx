import RecipeList from "../components/RecipeList";

function Recipes() {
  return (
    <main className="bg-neutral-100">
      <div className="max-w-[1700px] mx-auto relative overflow-hidden sm:pt-12 lg:pt-20 lg:pb-24 lg:border-b lg:border-b-neutral-300">
        <section className="text-start md:text-center px-4 sm:px-8">
          <h1 className="font-extrabold text-neutrals-900 text-[40px] sm:text-5xl mb-3">
            Explore our simple, healthy recipes
          </h1>
          <p className="nunito__sans mb-12 lg:mb-16 max-w-2xl mx-auto">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </section>
        <RecipeList />
      </div>
    </main>
  );
}

export default Recipes;
