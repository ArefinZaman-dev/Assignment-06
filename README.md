# 💪 FitLog

FitLog is a modern workout library and workout planning application built with Next.js.

Users can explore different exercises, view detailed workout information, create today's workout plan, save favorite workouts, and manage their fitness routine easily.

---

## 🚀 Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Context API
- React Toastify
- LocalStorage
- Lucide React Icons

---

## ✨ Features

### 1. Workout Library

- Display all available workouts
- Responsive workout card design
- Show workout image, category, equipment, duration, calories, and rating
- Sort workouts by duration, calories, and rating

---

### 2. Workout Details Page

- Dynamic route based workout details
- Complete workout information
- Exercise instructions
- Equipment and difficulty information
- Add workout to today's plan
- Save workout for later

---

### 3. Workout Planning System

- Create a personal workout plan
- Add workouts to today's plan
- Maximum 5 workout limit
- Remove workouts from the plan
- Mark workouts as completed

---

### 4. Saved Workout List

- Save favorite workouts
- View saved workouts separately
- Remove saved workouts anytime

---

### 5. Persistent Data Management

- Store plan and saved workouts using LocalStorage
- Data remains available after page reload
- Context API based state management

---

### 6. Responsive Design

- Fully responsive for mobile, tablet, and desktop
- Modern dark gym-style interface
- Adaptive workout grid layout

---

### 7. User Experience Features

- Toast notifications for user actions
- Loading states
- Custom 404 page
- Smooth navigation between pages

---

## 📂 Project Structure

```
src
│
├── app
│   ├── workout
│   ├── my-plan
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── homepage
│   ├── workoutDetails
│   ├── myPlan
│   └── shared
│
├── context
│   └── WorkoutContext.tsx
│
└── types
    └── workout.type.ts
```

---

## 🌐 API

Workout Data API:

```
https://api.abcz.workers.dev/api/fitlog
```

---

## 🛠 Installation & Setup

Clone the repository:

```bash
git clone your-repository-link
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📌 Project Name

**FitLog - Workout Library & Planner**