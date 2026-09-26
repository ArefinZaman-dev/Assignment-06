import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";
import { workouts } from "@/data/workouts";


const HomePage = () => {


  return (
    <main>

      <Banner />

      <Workouts workouts={workouts} />

    </main>
  );
};


export default HomePage;