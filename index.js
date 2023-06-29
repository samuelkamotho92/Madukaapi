const express = require('express');
const userRouter = require('./routers/userRoutes')
const epRouter = require('./routers/enterprise')
const auctionRouter = require('./routers/auctionRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({path:'./.env'});
// const db = require('./model');
const app = express();
app.use(cors({
    origin:["http://localhost:5173"]
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
 //query
app.use('/users',userRouter);
app.use('/enterprise',epRouter);
app.use('/auctions',auctionRouter)
app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running`)
})


