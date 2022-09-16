const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')

//Get all workouts
const getWorkouts=async (req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

//get a workout
const getWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"Not such workout!"})
    }
    const workout=await Workout.findById({_id:id})
    if (!workout) {
        return res.status(404).json({err:"Can't find this workout"})
    }
    res.status(200).json(workout)
    // res.status(200).json({id, type:typeof(id)})
}

//Post a new workout

const createWorkout=async (req,res)=>{
    const {title, reps, load}=req.body
    try {
        const workout=await Workout.create({title, reps,load})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error:err.message})
        console.log(err)
    }
    // res.json({msg:"Post a new workout", all:req.headers})
}

//Delete a workout
const deleteWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"Not such workout!"})
    }
    const workout=await Workout.findOneAndDelete({_id:id})
    if (!workout) {
        return res.status(400).json({err:"Can't find this workout"})
    }
    res.status(200).json(workout)
    // res.status(200).json({id, type:typeof(id)})
}

//Update a workout
const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"Not such workout!"})
    }
    const workout=await Workout.findOneAndUpdate({_id:id},...req.body)
    if (!workout) {
        return res.status(400).json({err:"Can't find this workout"})
    }
    res.status(200).json(workout)
    // res.status(200).json({id, type:typeof(id)})
}

module.exports ={createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} 