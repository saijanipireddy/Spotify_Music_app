import express from "express";
import cors from "cors"
import "dotenv/config"
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";
import User from "./src/models/UserModel.js";
import jwt from 'jsonwebtoken'
import authMiddleware from "./src/middleware/authMiddleware.js";


//app config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json())
app.use(cors())

//initializing routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)
app.get('/', (req, res) => res.send("API Working"));


app.get('/sai', authMiddleware, (req,res) => {
   res.json('Hi Naga sai')
})

app.post("/register", async (req,res) => {
    try {
          const {userName, email, password} = req.body;

          if (!userName || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
          }
      

          let exist = await User.findOne({email});

          if (exist) {
            return res.status(400).send({success: false, message:'User Already Exists'})
          }

          let newUser = new User ({
            userName,
            email,
            password
          })
          await newUser.save();
          let payload = {
            user: {
                id: newUser.id
            }
           }
    
           jwt.sign(payload, 'secretKey', {expiresIn: 3600000},
            (err,token) => {
                if (err) throw err;
                return res.json({token});
            }
           )
          
    }
    catch(err) {
         console.log(err);
         return res.status(500).send('Internal Server Error');
    }
})


app.post("/login", async (req,res) => {
    try {
       const {email,password} = req.body;

       let exist = await User.findOne({email});

       if(!exist) {
        return res.status(400).send('User Not Found');
       }
       if (exist.password !== password) {
        return res.status(400).send('Invalid Credentials');
       }

       let payload = {
        user: {
            id: exist.id
        }
       }

       jwt.sign(payload, 'secretKey', {expiresIn: 3600000},
        (err,token) => {
            if (err) throw err;
            return res.json({token});
        }
       )
    }
    catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
})


app.listen(port, () => console.log(`Server started on ${port}`));
