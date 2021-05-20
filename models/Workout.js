const mongoose = require('mongoose');
const schema = mongoose.Schema;
const workoutTemplate = new schema ({
    day: {
        type: Date
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Enter the exercise type"
            },
            name: {
                type: String,
                required: "Enter the exercise name"
            },
            duration: {
                type: Number,
                required: "Enter the exercise duration"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutTemplate);
module.exports = Workout