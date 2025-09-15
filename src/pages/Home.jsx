function Home() {
  return (
    <main className="bg-neutral-100">
      <div className="max-w-[1700px] mx-auto relative overflow-hidden sm:py-12 lg:py-20">
        <section className="text-start sm:text-center px-4 sm:px-8">
          <h1 className="font-extrabold text-neutrals-900 text-[52px] sm:text-[62px] lg:text-7xl mb-4 lg:mb-3">
            <span className="bg-orange-500/40 inline-flex w-50 h-6 sm:w-[240px] sm:h-[29px] lg:w-[280px] lg:h-10 rounded-[4px] items-center pb-8">
              Healthy
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="nunito__sans mb-8 lg:mb-10 max-w-2xl mx-auto">
            Discover eight quick, whole-food recipes that you can cook tonight —
            no processed junk, no guesswork.
          </p>
          <button
            className="w-[198px] h-[60px] rounded-[10px] bg-neutral-900 
             hover:bg-neutral-800 hover:transition-normal 
             text-white font-bold leading-[140%] text-[19px] px-4 py-3
              focus-visible:outline-[2px] focus-visible:outline-neutral-900 focus-visible:outline-offset-3"
          >
            Start exploring
          </button>
        </section>

        <section className="relative mt-10 sm:mt-12 lg:mt-16">
          <div className="absolute inset-0 z-10">
            <img
              src="./assets/images/pattern-squiggle-1.svg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mb-16 sm:mb-20 lg:mb-24 flex justify-center relative z-20 px-4 sm:px-7 lg:px-[124px]">
            <div className="border-6 border-white rounded-xl overflow-hidden">
              <img
                src="./assets/images/image-home-hero-large.webp"
                alt="Cooking healthy food"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-[64px] sm:mb-[81px] md:mb-20 px-4 sm:px-8 lg:px-[124px] border-b border-neutral-300">
          <h2 className="font-extrabold text-start md::text-center text-neutral-900 text-[40px] sm:text-5xl mb-8 sm:mb-12 leading-[120%] tracking-[-2px]">
            What you’ll get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 sm:mb-20 md:mb-24">
            <div>
              <div className="bg-white w-[60px] h-[60px] items-center justify-center flex rounded-xl mb-5 sm:mb-6">
                <img
                  src="./assets/images/icon-whole-food-recipes.svg"
                  alt="icon-whole-food-recipes"
                  className="flex"
                />
              </div>
              <h3 className="font-bold text-[32px] leading-[130%] tracking-[-1px] text-neutral-900 mb-3">
                Whole-food recipes
              </h3>
              <p className="nunito__sans">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </div>
            <div>
              <div className="bg-white w-[60px] h-[60px] items-center justify-center flex rounded-xl mb-6">
                <img
                  src="./assets/images/icon-minimum-fuss.svg"
                  alt="icon-whole-food-recipes"
                  className="flex"
                />
              </div>
              <h3 className="font-bold text-[32px] leading-[130%] tracking-[-1px] text-neutral-900 mb-3">
                Minimum fuss
              </h3>
              <p className="nunito__sans">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
            <div>
              <div className="bg-white w-[60px] h-[60px] items-center justify-center flex rounded-xl mb-6">
                <img
                  src="./assets/images/icon-search-in-seconds.svg"
                  alt="icon-whole-food-recipes"
                  className="flex"
                />
              </div>
              <h3 className="font-bold text-[32px] leading-[130%] tracking-[-1px] text-neutral-900 mb-3">
                Search in seconds
              </h3>
              <p className="nunito__sans">
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 sm:mb-20 md:mb-[85px] px-4 sm:px-8 lg:px-[124px]">
          <div>
            <h2 className="text-[40px] sm:text-5xl font-extrabold text-neutral-900 mb-5">
              Built for real life
            </h2>
            <p className="nunito__sans mb-5">
              Cooking shouldn’t be complicated. These recipes come in under{" "}
              <span className="bg-orange-500/60 inline-flex w-[102px] h-3 rounded-[3px] items-center pb-2">
                30 minutes
              </span>{" "}
              of active time, fit busy schedules, and taste good enough to
              repeat.
            </p>
            <p className="nunito__sans">
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>
          <img
            src="./assets/images/image-home-real-life-large.webp"
            alt="Preparing food"
            className="rounded-xl shadow-sm"
          />
        </section>

        <section className="text-center px-4 sm:px-8 lg:px-[124px] relative">
          <div className="bg-neutral-200 rounded-xl py-12 sm:py-20 lg:py-24 relative z-0 overflow-hidden">
            <img
              src="./assets/images/pattern-fork.svg"
              alt="pattern-fork"
              className="hidden sm:block absolute bottom-[-50px] md::top-6 sm:left-[-45px] md:left-[-80px] sm:w-[170px] sm:h-[200px] md:w-[314px]  md:h-[390px] object-cover z-10"
            />
            <img
              src="./assets/images/pattern-knife.svg"
              alt="pattern-knife"
              className="hidden sm:block absolute top-[-50px] right-[-15px] w-[171px] h-[171px] md:top-5 md:right-[-80px] md:w-[338px] md:h-[338px] object-cover z-10"
            />

            <div className="relative z-20 px-4 sm:px-8">
              <h2 className="text-[40px] sm:text-5xl font-extrabold text-neutral-900 mb-3 leading-[100%] tracking-[-3%]">
                Ready to cook smarter?
              </h2>
              <p className="nunito__sans mb-6">
                Hit the button, pick a recipe, and get dinner on the table —
                fast.
              </p>
              <button
                className="w-[176px] h-[57px] rounded-[10px] bg-neutral-900 
             hover:bg-neutral-800 hover:transition-normal 
             text-white font-bold leading-[140%] text-[18px] px-4 py-3
              focus-visible:outline-[2px] focus-visible:outline-neutral-900 focus-visible:outline-offset-3"
              >
                Browse recipes
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
