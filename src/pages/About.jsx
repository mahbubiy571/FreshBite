import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-neutral-100">
      <div className="max-w-[1700px] mx-auto relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16 sm:mb-20 md:mb-24 px-4 sm:px-8 lg:px-[124px] border-b border-neutral-300">
          <div className="max-w-[530px]">
            <span className="inline-block font-bold text-[20px] leading-[140%] tracking-[-0.5px] text-neutral-900 mb-6 bg-orange-500/70 rounded-[6px] px-2 py-1">
              Our mission
            </span>
            <h2 className="text-[40px] sm:text-5xl font-extrabold text-neutral-900 mb-5">
              Help more people cook nourishing meals, more often.
            </h2>
            <p className="nunito__sans mb-5">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="nunito__sans">
              We showcase quick, whole-food dishes that anyone can master — no
              fancy equipment, no ultra-processed shortcuts — just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <img
            src="./assets/images/image-about-our-mission-small.webp"
            alt="Healthy meal preparation"
            className="rounded-xl shadow-sm w-full mb-16 sm:mb-20 md:mb-24"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20 md:mb-24 px-4 sm:px-8 lg:px-[124px] border-b border-neutral-300">
          <h2 className="text-[40px] sm:text-5xl font-extrabold text-neutral-900">
            Why we exist
          </h2>
          <ul className="space-y-6 sm:space-y-8 lg:space-y-12 mb-16 sm:mb-20 md:mb-24">
            <li>
              <div className="flex items-start gap-5">
                <img
                  src="./assets/images/icon-bullet-point.svg"
                  alt="Bullet point icon for cutting through the noise"
                />
                <div>
                  <h3 className="font-bold text-2xl leading-[130%] tracking-[-1px] text-neutral-900">
                    Cut through the noise.
                  </h3>
                  <p className="nunito__sans">
                    The internet is bursting with recipes, yet most busy cooks
                    still default to take-away or packaged foods. We curate a
                    tight collection of fool-proof dishes so you can skip the
                    scrolling and start cooking.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-start gap-5">
                <img
                  src="./assets/images/icon-bullet-point.svg"
                  alt="Bullet point icon for empowering home kitchens"
                />
                <div>
                  <h3 className="font-bold text-2xl leading-[130%] tracking-[-1px] text-neutral-900">
                    Empower home kitchens.
                  </h3>
                  <p className="nunito__sans">
                    When you control what goes into your meals, you control how
                    you feel. Every recipe is built around unrefined ingredients
                    and ready in about half an hour of active prep.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-start gap-5">
                <img
                  src="./assets/images/icon-bullet-point.svg"
                  alt="Bullet point icon for making healthy food look good"
                />
                <div>
                  <h3 className="font-bold text-2xl leading-[130%] tracking-[-1px] text-neutral-900">
                    Make healthy look good.
                  </h3>
                  <p className="nunito__sans">
                    High-resolution imagery shows you exactly what success looks
                    like—because we eat with our eyes first, and confidence
                    matters.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20 md:mb-24 px-4 sm:px-8 lg:px-[124px] border-b border-neutral-300">
          <h2 className="text-[40px] sm:text-5xl font-extrabold text-neutral-900 lg:max-w-[400px]">
            Our food philosophy
          </h2>
          <ul className="space-y-6 sm:space-y-8 lg:space-y-12  mb-16 sm:mb-20 md:mb-24">
            <li>
              <div className="flex items-start gap-5">
                <img
                  src="./assets/images/icon-bullet-point.svg"
                  alt="Bullet point icon for cutting through the noise"
                />
                <div>
                  <h3 className="font-bold text-2xl leading-[130%] tracking-[-1px] text-neutral-900">
                    Whole ingredients first.
                  </h3>
                  <p className="nunito__sans">
                    Fresh produce, grains, legumes, herbs, and quality fats form
                    the backbone of every recipe.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-start gap-5">
                <img
                  src="./assets/images/icon-bullet-point.svg"
                  alt="Bullet point icon for empowering home kitchens"
                />
                <div>
                  <h3 className="font-bold text-2xl leading-[130%] tracking-[-1px] text-neutral-900">
                    Flavor without compromise.
                  </h3>
                  <p className="nunito__sans">
                    Spices, citrus, and natural sweetness replace excess salt,
                    sugar, and additives.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-start gap-5">
                <img
                  src="./assets/images/icon-bullet-point.svg"
                  alt="Bullet point icon for making healthy food look good"
                />
                <div>
                  <h3 className="font-bold text-2xl leading-[130%] tracking-[-1px] text-neutral-900">
                    Respect for time.
                  </h3>
                  <p className="nunito__sans">
                    Weeknight meals should slot into real schedules; weekend
                    cooking can be leisurely but never wasteful.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-start gap-5">
                <img
                  src="./assets/images/icon-bullet-point.svg"
                  alt="Bullet point icon for making healthy food look good"
                />
                <div>
                  <h3 className="font-bold text-2xl leading-[130%] tracking-[-1px] text-neutral-900">
                    Sustainable choices.
                  </h3>
                  <p className="nunito__sans">
                    Short ingredient lists cut down on food waste and carbon
                    footprint, while plant-forward dishes keep things
                    planet-friendly.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16 sm:mb-20 md:mb-24 px-4 sm:px-8 lg:px-[124px]">
          <div>
            <h2 className="text-[40px] sm:text-5xl font-extrabold text-neutral-900 mb-5">
              Beyond the plate
            </h2>
            <p className="nunito__sans mb-5 md:max-w-[480px]">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="md:max-w-[480px] list-disc list-inside space-y-2">
              <li className="nunito__sans">
                Encourage family dinners and social cooking.
              </li>
              <li className="nunito__sans">
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li className="nunito__sans">
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
          <img
            src="./assets/images/image-about-beyond-the-plate-large.webp"
            alt="Beyond the Plate concept illustration"
            className="rounded-xl shadow-sm w-full"
          />
        </section>

        <section className="text-center px-4 sm:px-8 lg:px-[124px] relative">
          <div className="bg-neutral-200 rounded-xl py-12 sm:py-20 lg:py-24 relative z-0 overflow-hidden">
            <img
              src="./assets/images/pattern-fork.svg"
              alt="fork pattern decoration"
              className="hidden sm:block absolute bottom-[-50px] md:top-6 sm:left-[-45px] md:left-[-80px] sm:w-[170px] sm:h-[200px] md:w-[314px] md:h-[390px] object-cover z-10"
            />
            <img
              src="./assets/images/pattern-knife.svg"
              alt="knife pattern decoration"
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
              <Link to="/recipes">
                <button
                  className="w-[176px] h-[57px] rounded-[10px] bg-neutral-900 
                hover:bg-neutral-800 transition-colors 
                text-white font-bold leading-[140%] text-[18px] px-4 py-3
                focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-3"
                >
                  Browse recipes
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
