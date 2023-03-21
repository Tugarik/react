import mongoose from "mongoose";
const MONGODB_API= 'mongodb+srv://tugAdmin:555555@cluster0.z8ursva.mongodb.net/sample_ecommerce';

mongoose.connect(MONGODB_API)
.then(console.log('Database connected'))
.catch((error)=>console.log(error));

export default mongoose.connection;