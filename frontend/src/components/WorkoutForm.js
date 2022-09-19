import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWorkout } from '../redux/workoutsSlice'

function WorkoutForm() {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error,setError] = useState(null)
    const dispatch=useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout ={title, load, reps}
        const res=await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-type':'application/json'
            }
        })
        const json=await res.json()
        if(!res.ok) {
            setError(json.error)
        } else {
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            dispatch(addWorkout(json))
            console.log('New workout added', json)
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>
            <label>Excecise Title: </label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Load (in kg): </label>
            <input
                type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <label>Repeats: </label>
            <input
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div> }
        </form>
    )
}

export default WorkoutForm