export default function CTA() {
  return (
    <section className="bg-white dark:bg-[#0A0D12] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto p-6 sm:p-8 lg:p-12 rounded-2xl bg-[#FAFAFA] dark:bg-[#242424] dark:text-[] border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                THE FUTURE OF DESIGN IS DECENTRALIZED.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
                Be one of the first 100 founders to shape it.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
              <button className="w-full px-6 py-3 bg-black hover:bg-gray-800 font-semibold text-white rounded-xl dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-200 min-h-[44px]">
                Secure Your Founder Spot
              </button>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left">
                We care about your data in our{" "}
                <span className="underline hover:no-underline cursor-pointer">
                  privacy policy
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
