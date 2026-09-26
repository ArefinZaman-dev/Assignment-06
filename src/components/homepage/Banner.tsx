import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2">

      <div>
        <p className="mb-4 text-sm font-bold tracking-[4px] text-[#ccff00]">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
          Train With Intent.
          <br />
          Log Every Set.
        </h1>

        <p className="mt-6 max-w-xl text-white/60">
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          lock it into today's plan, and watch the week's work add up.
        </p>


        <Link
          href="#library"
          className="mt-8 inline-block rounded-full bg-[#ccff00] px-8 py-3 font-bold text-black"
        >
          Browse Workouts
        </Link>
      </div>


      <div className="flex justify-center">
        <Image
          src="/banner.png"
          alt="Workout"
          width={500}
          height={500}
          priority
        />
      </div>

    </section>
  );
};

export default Banner;