import { MongoClient } from "mongodb";

//local connection
// const server = await MongoClient.connect("mongodb://localhost:27017/");
//online connection
const server = await MongoClient.connect(
  "mongodb+srv://default_user:JiwqC1lnQpShZbhf@online-acdemy-dotnet.wtazhzj.mongodb.net/?retryWrites=true&w=majority&appName=online-acdemy-dotnet"
);

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
