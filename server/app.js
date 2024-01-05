const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");
// "mongodb+srv://coreTechTive:0000@pms-desktop.egbnt3r.mongodb.net/pmsDesktop";

app.use(express.json());
app.use(cors());

//database connection
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nazeedkhan10:nazeedkhan10@cluster0.36c5qga.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // Creating Database


    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening at server ${PORT}`);
});
