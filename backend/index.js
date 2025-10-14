import express, { json } from "express";
import cors from "cors";
import { client } from "./mongodb.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Response from the back");
});

app.post("/login", (req, res) => {
  const coll = client.collection("users");
  const { userMail, userPass } = req.body;
  const filter = { userMail: userMail.toString() };

  coll
    .findOne(filter)
    .then((user) => {
      if (user) {
        if (user.userPassword === userPass.toString()) {
          res.json(["userLogged", user.userID]);
        } else {
          res.json("badPassword " + userMail);
        }
      } else {
        res.json("userNotFound");
      }
    })
    .catch((err) => res.json(err));
});
app.post("/signup", (req, res) => {
  const newID = async () => {
    const id = Math.floor(1000 + Math.random() * 9000);

    coll.findOne({ userID: id }).then((user) => {
      if (user) newID();
      return id;
    });
  };
  const coll = client.collection("users");
  const { userName, userMail, userPass } = req.body;

  coll
    .insertOne({
      userID: newID,
      userName: userName,
      userMail: userMail,
      userPassword: userPass,
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.json("Error caugh\n" + err));
});

app.get("/profile", async (req, res) => {
  const coll = client.collection("users");
  // const id = req.body;
  // const filter = { userMail: "user@named.com" };
  const filter = { userName: "named user 1" };

  await coll.findOne(filter).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.json("userNotFound");
    }
  });
});

app.listen(5174, () => {
  console.log("listening...");
});
