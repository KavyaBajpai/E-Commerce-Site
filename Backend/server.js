import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';



//App Configuration
const app= express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors());

//API Endpoints
app.get('/', (req, res)=>{
   res.send("API Working")
})
//res.send is sending a response to the client onto the webpage... webpage pe client ke question ka answer likh ke de rha hai...

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})