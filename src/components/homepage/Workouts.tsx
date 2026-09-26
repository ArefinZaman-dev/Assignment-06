import { Workout } from "@/types/workout.type";
import WorkoutCard from "./WorkoutCard";


interface WorkoutsProps {
  workouts: Workout[];
}


const Workouts = ({ workouts }: WorkoutsProps) => {
  return (
    <section
      id="library"
      className="container mx-auto px-4 py-16"
    >

      <div className="mb-10">
        <h2 className="text-4xl font-black uppercase">
          The Library
        </h2>

        <p className="mt-3 text-white/60">
          Twelve lifts covering every major muscle group.
        </p>
      </div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {
          workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))
        }

      </div>

    </section>
  );
};

export default Workouts;