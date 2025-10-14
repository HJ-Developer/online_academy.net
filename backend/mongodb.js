import { MongoClient } from "mongodb";

//local connection
const server = await MongoClient.connect("mongodb://localhost:27017/");
//online connection
// const server = await MongoClient.connect("");

export const client = server.db("oa_dotnet");
if (client) {
  console.log("Conection to databse succefull!");
} else {
  console.error("Error conecting to database ");
}

// const userScheema = client.Scheema({
//   userName: String,
//   userMail: String,
//   userPassword: String,
// });
