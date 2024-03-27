
import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://yuribychkov15:PQYydW85g3s1GJb7@cluster0.n7pakwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to database successfully");
        // Here you can return the client or the specific database you want to use
        return client.db('CFT-411'); // Replace with your database name
    } catch (e) {
        console.error("Failed to connect to the database", e);
        process.exit(1);
    }
}

export { connectToDatabase };
