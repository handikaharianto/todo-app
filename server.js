const express = require("express");

const app = express();

const port = process.env.PORT || 3500;

const start = () => {
  try {
    // Start server
    app.listen(port, () => console.log(`Server is listening on PORT ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
