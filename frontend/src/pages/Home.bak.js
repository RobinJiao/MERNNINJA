import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

function Home() {
  const [workouts, setWorkouts]=useState(null)
  useEffect(()=>{
    const fetchWorkouts=async ()=>{
      const res=await fetch('/api/workouts')
      const json=await res.json()
      if(res.ok) {
        setWorkouts(json)
        console.log('workouts fetched! ',res, json)
      }
    }
    console.log('begin to fetch workouts ...')
    fetchWorkouts()
  },[])
  return (
    <div className="home">
      <div className="workouts">
        {workouts&& workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home