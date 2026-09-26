import Image from "next/image";
import { Workout } from "@/types/workout.type";


const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

  const { id } = await params;


  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );


  if (!res.ok) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Workout Not Found
        </h2>

        <p className="mt-3 text-white/60">
          Unable to load workout data.
        </p>
      </div>
    );
  }


  const data = await res.text();


  let workout: Workout;


  try {
    workout = JSON.parse(data);
  } catch {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Something went wrong
        </h2>

        <p className="mt-3 text-white/60">
          Workout API is temporarily unavailable.
        </p>
      </div>
    );
  }



  return (
    <main className="container mx-auto px-4 py-16">

      <div className="grid gap-10 lg:grid-cols-2">


        <div className="relative h-[500px] overflow-hidden rounded-3xl">

          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />

        </div>



        <div>


          <h1 className="text-5xl font-black uppercase">
            {workout.name}
          </h1>



          <p className="mt-5 text-white/60">
            {workout.description}
          </p>



          <div className="mt-6 flex flex-wrap gap-3">

            {
              workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
                >
                  {group}
                </span>
              ))
            }

          </div>




          <div className="mt-8 rounded-2xl border border-white/10 p-6">


            <h3 className="mb-5 text-2xl font-bold">
              KEY SPECS
            </h3>



            <div className="space-y-3 text-white/70">


              <p>
                Equipment:
                <span className="ml-2 text-white">
                  {workout.equipment}
                </span>
              </p>


              <p>
                Difficulty:
                <span className="ml-2 text-white">
                  {workout.difficulty}
                </span>
              </p>


              <p>
                Sets:
                <span className="ml-2 text-white">
                  {workout.sets}
                </span>
              </p>


              <p>
                Reps:
                <span className="ml-2 text-white">
                  {workout.reps}
                </span>
              </p>


              <p>
                Duration:
                <span className="ml-2 text-white">
                  {workout.duration} min
                </span>
              </p>


              <p>
                Calories:
                <span className="ml-2 text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </p>


              <p>
                Rating:
                <span className="ml-2 text-white">
                  ⭐ {workout.rating}
                </span>
              </p>


            </div>


          </div>




          <div className="mt-8">


            <h3 className="mb-4 text-2xl font-bold">
              INSTRUCTIONS
            </h3>


            <ol className="space-y-3">

              {
                workout.instructions.map(
                  (step, index) => (
                    <li
                      key={step}
                      className="text-white/70"
                    >
                      {index + 1}. {step}
                    </li>
                  )
                )
              }

            </ol>


          </div>




          <div className="mt-10 flex gap-4">


            <button
              className="rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
            >
              Add to todays plan
            </button>



            <button
              className="rounded-full border border-white/20 px-6 py-3 font-bold"
            >
              Save for later
            </button>


          </div>



        </div>


      </div>


    </main>
  );
};


export default WorkoutDetails;