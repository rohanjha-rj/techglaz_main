const mongoose = require("mongoose");

const uri = "mongodb+srv://rohantechglaz_db_user:yDTpoDkvraSEtOt5@cluster0.qz6vncd.mongodb.net/techglaz?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB Cluster!");
    
    // Check schemas/collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections in 'techglaz' database:");
    console.log(collections.map(c => c.name));
    
  } catch (error) {
    console.error("Connection failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

run();
