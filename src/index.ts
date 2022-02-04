import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.json({ status: "Ok" });
});
const port = Number(process.env.PORT ?? 3000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started at port ${port}`);
});
