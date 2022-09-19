import {createSlice} from '@reduxjs/toolkit'

export const workoutsSlice=createSlice({
    name: 'workouts',
    initialState: {
        workouts:[],
        isPending:null,
        isError:null
    },
    reducers: {
        getWorkouts: (state, action)=>{
            //after fetch workouts from API OK and "action.payload"=res.json(), dispatch this, so UI is synced with DB
            console.log('getWorkouts reducer! ', action.payload)
            state.workouts=action.payload
        },
        addWorkout: (state,action)=>{
            //after post one workout to API ok then dispatch this
            console.log('addWorkout reducer! ', action.payload)
            state.workouts=[action.payload,...state.workouts]
        },
        deleteWorkout: (state,action)=>{
            console.log('deleteWorkout reducer ', action, action.payload)
            state.workouts=state.workouts.filter((w)=>w._id!==action.payload._id)
        }
    }
})
export const {getWorkouts, addWorkout, deleteWorkout} =workoutsSlice.actions
export default workoutsSlice.reducer