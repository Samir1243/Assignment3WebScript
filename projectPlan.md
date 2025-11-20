My plan is to continue Workout plan:

NextLevel is the name of my website. 

NextLevel is a web-based workout planning and tracking platform designed to help users improve their fitness through structured routines, progress tracking, and personalized workout plans. The goal is to create a simple but professional fitness directory where users can create, view, edit, and delete workouts using a secure CRUD system.



Further down, the Add Workout form allows users to input new routines with fields for title, muscle group, difficulty, and notes—mirroring the CRUD functionality required for the project. The entire design is simple, responsive, and visually consistent, focusing on usability while maintaining a fitness-centered aesthetic ideal for motivating users to track and improve their workouts.




Bootstrap source: 

https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css


MongoDB Compass: 


Had issues in putting the samples into the MongoDB application. I'm going to put it here for reference







const mongoose = require('mongoose');{




  
}




const workoutSchema = new mongoose.Schema({ 
  // Exercise name (e.g., "Bench Press", "Squats", "Deadlift")
  exerciseName: {
    type: String,
    required: [true, 'Exercise name is required'],
    trim: true,
    minlength: [2, 'Exercise name must be at least 2 characters'],
    maxlength: [100, 'Exercise name cannot exceed 100 characters'],
},

  
  //Number of sets performed
  sets: {
    type: Number,
    required: [true, 'Sets are required'],
    min: [1, 'Sets must be at least 1'],
    max: [100, 'Sets cannot exceed 100'],
  },
  
  // Number of repetitions per set
  reps: {
    type: Number,
    required: [true, 'Reps are required'],
    min: [1, 'Reps must be at least 1'],
    max: [1000, 'Reps cannot exceed 1000'],
  },
  
  // Weight used in the exercise (in pounds)
  weight: {
    type: Number,
    required: [true, 'Weight is required'],
    min: [0, 'Weight cannot be negative'],
    max: [1000, 'Weight cannot exceed 1000 lbs'],
  },
  
  // Date when the workout was performed
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now,
  },
  
  // Optional notes/comments about the workout
  notes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Notes cannot exceed 1000 characters'],
  },


});

