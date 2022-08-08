import express from "express";

const port = 8000;
const app = express();

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.append("Warning", "code");
  res.type("html");
  res.location("");
  res.links({
    next: "dsfaf",
  });
  res.cookie("token", "dsdsdssd", {});
  res.clearCookie("token");
  res.send("Hello");
  res.end();
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
