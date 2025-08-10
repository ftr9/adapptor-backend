import dotenv from "dotenv";
import path from "node:path";

// load environment variables
dotenv.config({
  path: path.join(__dirname, "configs/.env"),
});

import app from "./app";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
