import { MongoClient,Db, ServerApiVersion } from "mongodb";

let db;

export const connectDb = async (): Promise<Db | undefined> => {
  try {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.6qdai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    const db = client.db("foot-finesse");
    return db;
  } catch (error) {
    console.log(error);
  }
};
