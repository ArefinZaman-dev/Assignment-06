"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import PlanCard from "@/components/myPlan/PlanCard";

import { useWorkout } from "@/context/WorkoutContext";

import { toast } from "react-toastify";

const MyPlanPage = () => {
  const {
    plan,

    saved,

    removeFromSaved,
  } = useWorkout();

  const [mounted, setMounted] = useState(false);

  const [activeTab, setActiveTab] = useState("plan");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">Loading workouts...</h2>
      </main>
    );
  }

  const totalMinutes = plan.reduce(
    (total, item) => total + item.duration,

    0,
  );

  const totalCalories = plan.reduce(
    (total, item) => total + item.caloriesBurned,

    0,
  );

  const handleRemoveSaved = (id: number) => {
    removeFromSaved(id);

    toast.success("Removed from saved list");
  };

  const currentList = activeTab === "plan" ? plan : saved;

  return (
    <main className="container mx-auto px-4 py-16">
      <section>
        <h1 className="text-5xl font-black uppercase">My Plan</h1>

        <p className="mt-3 text-white/60">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white/60">Exercises</h3>

          <p className="mt-3 text-4xl font-black">{plan.length}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white/60">Minutes</h3>

          <p className="mt-3 text-4xl font-black">{totalMinutes}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white/60">Calories</h3>

          <p className="mt-3 text-4xl font-black">{totalCalories}</p>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex gap-4 border-b border-white/10 pb-5">
          <button
            onClick={() => setActiveTab("plan")}
            className={
              activeTab === "plan"
                ? "rounded-full bg-[#ccff00] px-5 py-2 font-bold text-black"
                : "rounded-full border border-white/20 px-5 py-2 font-bold"
            }
          >
            Todays Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={
              activeTab === "saved"
                ? "rounded-full bg-[#ccff00] px-5 py-2 font-bold text-black"
                : "rounded-full border border-white/20 px-5 py-2 font-bold"
            }
          >
            Saved
          </button>
        </div>

        {currentList.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-3xl font-black">NOTHING HERE YET</h2>

            <p className="mt-3 text-white/60">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6">
            {activeTab === "plan"
              ? plan.map((workout) => (
                  <PlanCard key={workout.id} workout={workout} />
                ))
              : saved.map((workout) => (
                  <div
                    key={workout.id}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <h2 className="text-2xl font-black uppercase">
                      {workout.name}
                    </h2>

                    <p className="mt-2 text-white/60">{workout.equipment}</p>

                    <div className="mt-5 flex gap-4">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full bg-[#ccff00] px-5 py-3 font-bold text-black"
                      >
                        View Details
                      </Link>

                      <button
                        onClick={() => handleRemoveSaved(workout.id)}
                        className="rounded-full border border-red-500/40 px-5 py-3 font-bold text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default MyPlanPage;
