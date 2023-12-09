require("express-async-errors");
require("dotenv/config");

const express = require("express");
const cors = require("cors");

const routes = require("./routes/index");

const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

migrationsRun();

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
