import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNames = {
  TEST_USER: "next_auth_users",
  PRACTICE_DATA: "practice_data",
};

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cname) => {
  return client.db(process.env.DB_NAME).collection(cname);
};
