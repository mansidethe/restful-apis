import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if(conn){
        console.log('MongoDB connected');
    }
}
connectDB();

app.get('/health',(req,res)=>{
    res.json(
       { success:"true",
        message:"health api "
})
})

app.get('/buses',(req,res)=>{
    res.send(
       { success:"true",
       data:[
        {
            id:1,
            name:`Bus 1`,
            seats:20
        },
        {
            id:2,
            name:`Bus 2`,
            seats:20
        },
       ],
        message:"Buses fetched "
})
})

app.post('/bookings',async (req,res)=>{
    //const {} = req.body;
    //craeted booking;

    res.status(201).json(
        { success:"true",
        data:{},
         message:"Booking craeted"
 })
})

app.get('/bookings',async (req,res)=>{
  
    //get all booking;
    
    res.json(
        { success:"true",
        data:{},
         message:"Booking fetched"
 })
})

app.get('/bookings/:id',async (req,res)=>{
  
    //get single booking;
    const {id} = req.params;

    if(id==20){
        return res.status(404).json({
            success:"false",
        data:{},
         message:"Booking not found"
        })
    }
    
    res.json(
        { success:"true",
        data:{
            //id:req.params.id
            id:id
        },
        message:"Booking fetched"
 })
})

app.put('/bookings/:id',async (req,res)=>{
  
    //updated booking;
    const {id} = req.params;
    
    res.json(
        { success:"true",
        data:{
           
            id:id
        },
        message:"Booking updated"
 })
})

app.patch('/bookings/:id',async (req,res)=>{
  
    //updated booking;
    const {id} = req.params;
    //logic for booking updated
    res.json(
        { success:"true",
        data:{
           id:id
        },
        message:"Booking updated"
 })
})

app.delete('/bookings/:id',async (req,res)=>{
  
    //deleted booking;
    const {id} = req.params;
    //logic for booking updated
    res.json(
        { success:"true",
        data:{
           id:id
        },
        message:"Booking deleted"
 })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})