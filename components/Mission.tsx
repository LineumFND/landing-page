export default function Mission() {
  return (
    <section className="bg-[#121212] text-[#ffffff] dark:bg-[#242424] px-6 py-20 ">
      <div className="max-w-6xl mx-[5rem] text-center ">
        <div className="w-[50%] text-start  ">
          <p className="text-teal-400 text-sm uppercase tracking-wider font-semibold">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-3xl font-bold mt-2">
            BUILD THE FUTURE, TOGETHER.
          </h2>
          <p className="mt-2  max-w-sm  text-[#DBDBDB] dark:text-gray-400">
            Empowering designers with unbreakable ownership and a shared
            marketplace.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12  grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl text-start bg-white dark:bg-[#F2F2F2] shadow">
            <img
              src="/assets/mission1.png"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <h3 className="font-semibold mb-2 text-[#181D27]">
              JOIN THE LINEUM
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Step into a designer-owned community built on real ownership, not
              speculation.
            </p>
          </div>

          <div className="p-5 rounded-2xl text-start bg-white dark:bg-[#F2F2F2] shadow">
            <img
              src="/assets/mission2.png"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <h3 className="font-semibold mb-2 text-[#181D27]">GOVERN & PLAN</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Shape the future of design by voting, planning, and building with
              fellow creators.
            </p>
          </div>

          <div className="p-5 rounded-2xl text-start bg-white dark:bg-[#F2F2F2] shadow">
            <img
              src="/assets/mission3.png"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <h3 className="font-semibold mb-2 text-[#181D27]">
              LAUNCH THE MARKETPLACE
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Turn collective vision into reality, a marketplace owned & powered
              by its creators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
