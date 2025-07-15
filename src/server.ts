import mongoose from "mongoose";
import app from "./app";

const port:number = 3000;

//using cors

//Database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("successfully connected");
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error, "error");
  }
}
main();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
