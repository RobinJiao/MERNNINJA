import {createSlice} from '@reduxjs/toolkit'

export const workoutsSlice=createSlice({
    name: 'workouts',
    initialState: {
        workouts:null,
        isPending:null,
        isError:null
    },
    reducers: {
        getWorkouts: (state, action)=>{
            //fetch workouts from API and "state.workouts"=res.json()
            state.workouts=action.payload
            console.log('getWorkouts reducer! ', action.payload)
        },
        addWorkout: (state,action)=>{
            //add a workout
            const workout={title:action.payload.title, load:action.payload.load, reps:action.payload.reps}
            state.workouts=[workout,...state.workouts]
            //fetch post 
        }
    }
})
export const {getWorkouts, addWorkout} =workoutsSlice.actions
export default workoutsSlice.reducer