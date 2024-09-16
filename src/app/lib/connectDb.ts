import { MongoClient,Db, ServerApiVersion } from "mongodb";

export const connectDb = async (): Promise<Db | undefined> => {
  try {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.6qdai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const options = {
      poolSize: 10, // Limit the number of connections
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    };
    const client = new MongoClient(uri,options );
    const db = client.db("foot-finesse");
    return db;
  } catch (error) {
    console.log(error);
  }
};
