import { Workout } from "@/types/workout.type";


export const workouts: Workout[] = [
  {
    id: 1,
    name: "Barbell Bench Press",
    image:
      "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    muscleGroups: [
      "Chest",
      "Arms",
    ],
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    duration: 25,
    caloriesBurned: 180,
    sets: 4,
    reps: "6-8",
    rating: 4.8,
    description:
      "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    instructions: [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back.",
    ],
  },


  {
    id: 2,
    name: "Pull-Up",
    image:
      "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740",
    muscleGroups:[
      "Back",
      "Arms",
    ],
    equipment:"Pull-up Bar",
    difficulty:"Intermediate",
    duration:15,
    caloriesBurned:120,
    sets:4,
    reps:"6-10",
    rating:4.7,
    description:
      "Bodyweight vertical pull that hammers lats, biceps, and grip while improving relative strength.",
    instructions:[
      "Hang from the bar with a shoulder-width overhand grip.",
      "Brace your core and pull your chest toward the bar.",
      "Pause at the top with elbows tucked.",
      "Lower with control.",
    ],
  },


  {
    id:3,
    name:"Back Squat",
    image:
      "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691401.jpg?w=740",
    muscleGroups:[
      "Legs",
      "Core",
    ],
    equipment:"Barbell, Rack",
    difficulty:"Advanced",
    duration:30,
    caloriesBurned:240,
    sets:5,
    reps:"5-8",
    rating:4.9,
    description:
      "The king of lower-body lifts building quads, glutes and stability.",
    instructions:[
      "Set the bar on your upper traps.",
      "Brace your core and squat down.",
      "Keep knees tracking over toes.",
      "Drive through your feet to stand.",
    ],
  },


  {
    id:4,
    name:"Overhead Press",
    image:
      "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666703.jpg?w=740",
    muscleGroups:[
      "Shoulders",
      "Arms",
    ],
    equipment:"Barbell",
    difficulty:"Intermediate",
    duration:20,
    caloriesBurned:150,
    sets:4,
    reps:"6-8",
    rating:4.6,
    description:
      "Strict standing press that builds shoulders and triceps.",
    instructions:[
      "Hold the bar at shoulder level.",
      "Brace your body.",
      "Press the bar overhead.",
      "Lower with control.",
    ],
  },


  {
    id:5,
    name:"Dumbbell Bicep Curl",
    image:
      "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666702.jpg?w=740",
    muscleGroups:[
      "Arms",
    ],
    equipment:"Dumbbells",
    difficulty:"Beginner",
    duration:12,
    caloriesBurned:80,
    sets:3,
    reps:"10-12",
    rating:4.3,
    description:
      "Isolation exercise for stronger biceps.",
    instructions:[
      "Stand with dumbbells.",
      "Curl without swinging.",
      "Squeeze at the top.",
      "Lower slowly.",
    ],
  },
];