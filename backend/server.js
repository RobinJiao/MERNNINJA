require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')

const app=express()

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
app.use(express.json())

//routes
app.use('/api/workouts',workoutRoutes)
app.get('/', (req,res)=>{
    res.json({msg:"Welcome to Robin MERN App !~"})
})

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Express server is running on port 4000!!!')
        })
    })
    .catch((err) => {
        console.log(err)
    })

// moved inside the mongoose connect 
// app.listen(process.env.PORT, ()=>{
//     console.log('server is running on port 4000!!!')
// })

