import { MongoClient, Db, ServerApiVersion } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export const connectDb = async (): Promise<Db | undefined> => {
  try {
    if (cachedClient && cachedDb) {
      return cachedDb;
    }

    const uri = `mongodb+srv://footfinesse789:7Hqd0I7y2Qnjoss7@cluster0.6qdai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    const options = { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    };

    // Create a new MongoClient instance if no cached client exists
    const client = new MongoClient(uri, options);
    
    // Connect to MongoDB
    await client.connect();

    // Cache the connected client and database
    cachedClient = client;
    cachedDb = client.db("foot-finesse");

    return cachedDb;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    return undefined;
  }
};
