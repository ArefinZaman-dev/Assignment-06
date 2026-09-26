import Image from "next/image";
import { workouts } from "@/data/workouts";


const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

  const { id } = await params;


  const workout = workouts.find(
    (item) => item.id === Number(id)
  );


  if (!workout) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">

        <h2 className="text-4xl font-black">
          Workout Not Found
        </h2>

        <p className="mt-4 text-white/60">
          Unable to load workout data.
        </p>

      </main>
    );
  }


  return (
    <main className="container mx-auto px-4 py-16">


      <div className="grid gap-10 lg:grid-cols-2">


        {/* IMAGE */}

        <div className="relative h-[500px] overflow-hidden rounded-3xl">

          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />

        </div>



        {/* DETAILS */}

        <div>


          <h1 className="text-5xl font-black uppercase">
            {workout.name}
          </h1>



          <p className="mt-5 text-white/60">
            {workout.description}
          </p>



          {/* TAGS */}

          <div className="mt-6 flex flex-wrap gap-3">

            {
              workout.muscleGroups.map((group)=>(
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-4 py-2 font-bold text-black"
                >
                  {group}
                </span>
              ))
            }

          </div>




          {/* SPECS */}

          <div className="mt-8 rounded-2xl border border-white/10 p-6">


            <h2 className="mb-5 text-2xl font-bold">
              KEY SPECS
            </h2>



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




          {/* INSTRUCTIONS */}

          <div className="mt-8">

            <h2 className="mb-4 text-2xl font-bold">
              INSTRUCTIONS
            </h2>


            <ol className="space-y-3 text-white/70">

              {
                workout.instructions.map(
                  (step,index)=>(
                    <li key={step}>
                      {index+1}. {step}
                    </li>
                  )
                )
              }

            </ol>


          </div>




          {/* BUTTON */}

          <div className="mt-10 flex gap-4">


            <button className="rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black">

              Add to today's plan

            </button>



            <button className="rounded-full border border-white/20 px-6 py-3 font-bold">

              Save for later

            </button>


          </div>



        </div>


      </div>


    </main>
  );
};


export default WorkoutDetails;