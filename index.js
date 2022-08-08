import express from "express";

const port = 8000;

const app = express();

app.all("/hello", (req, res, next) => {
  console.log("All");
  next();
});

const cb = (req, res, next) => {
  console.log("CB");
  next();
};

app
  .route("/user")
  .get("/hello", [cb], (req, res) => {
    res.send("Привет!"); //hello, helo (hel?lo), hel(lll+)o (hel+lo), heldsadalo(hel*lo)
  })
  .post("hello", (req, res) => {
    res.send("Привет POST!");
  });

// app.post("/hello", (req, res) => {
//   res.statusCode = 200;
//   res.send("Привет!");
// });

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
