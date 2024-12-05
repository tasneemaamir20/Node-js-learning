const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://aamirtasneem2:HC6osSRpopbwQ44o@learningnode.g34zy.mongodb.net/";
const client = new MongoClient(url);

const dbName = "Practice";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  // the following code examples can be pasted here...

  // ? For inserting the Data...
  // const data = {
  //   firstname: "Tamseel",
  //   lastname: " Aijaz",
  //   city: "Mau",
  //   phonenumber: "6387975546",
  // };
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  // ? For updating the data...
  // const updatedData = {
  //   firstname: "Kulsum",
  //   lastname: "Imaan",
  //   city: "Azamgarh",
  //   phonenumber: "9876543210",
  // };
  // const updateResult = await collection.updateOne(
  //   { enrollment :"19001012" },
  //   { $set: { examnationnumber :"190102179"} }
  // );
  // console.log("Updated documents =>", updateResult);

  // ? For replacing the field
  // const replaceOne = await collection.replaceOne(
  //   { enrollment: "19001012" },
  //   { enrollment: "1900101395" }
  // );
  // console.log("ReplaceOne =>", replaceOne);

  //? For findOneAndDelete ...
  // const findOneAndDelete = await collection.findOneAndDelete({ enrollment: "1900101395" });
  // console.log("findOneAndDelete=>", findOneAndDelete);

  // ? For watching the documents
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
