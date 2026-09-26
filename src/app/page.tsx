import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";
import { Workout } from "@/types/workout.type";

const workoutApi =
  "https://api.abcz.workers.dev/api/fitlog";

const HomePage = async () => {
  const res = await fetch(workoutApi);

  const workouts: Workout[] = await res.json();

  return (
    <main>
      <Banner />

      <Workouts workouts={workouts} />
    </main>
  );
};

export default HomePage;