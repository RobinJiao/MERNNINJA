import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { getWorkouts } from '../redux/workoutsSlice'

function Home() {
  // const [workouts, setWorkouts]=useState(null)
  const {workouts}=useSelector((state)=>state.workouts)
  console.log('workouts from useSelector', workouts, workouts.length)
  const dispatch=useDispatch()

  useEffect(()=>{
    const fetchWorkouts=async ()=>{
      const res=await fetch('/api/workouts')
      const json=await res.json()
      if(res.ok) {
        // setWorkouts(json)
        console.log('workouts fetched! ',json)
        dispatch(getWorkouts(json))
      }
    }
    console.log('begin to fetch workouts ...')
    fetchWorkouts()
  },[dispatch])
  return (
    <div className="home">
      <div className="workouts">
        {workouts.length!==0?
        workouts.map((workout)=>
          <WorkoutDetails key={workout._id} workout={workout} />):<></>}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home