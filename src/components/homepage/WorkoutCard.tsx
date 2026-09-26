import Image from "next/image";
import Link from "next/link";

import { Workout } from "@/types/workout.type";


interface WorkoutCardProps {
  workout: Workout;
}


const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#ccff00]"
    >

      <div className="relative h-56 overflow-hidden rounded-xl">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>


      <div className="mt-5">

        <div className="flex flex-wrap gap-2">
          {
            workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
              >
                {group}
              </span>
            ))
          }
        </div>


        <h3 className="mt-4 text-xl font-bold uppercase">
          {workout.name}
        </h3>


        <p className="mt-2 text-sm text-white/60">
          {workout.equipment}
        </p>


        <div className="mt-4 flex justify-between text-sm text-white/70">

          <span>
            ⏱ {workout.duration} min
          </span>

          <span>
            🔥 {workout.caloriesBurned} kcal
          </span>

          <span>
            ⭐ {workout.rating}
          </span>

        </div>

      </div>


    </Link>
  );
};

export default WorkoutCard;