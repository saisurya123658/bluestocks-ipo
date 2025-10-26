const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const adminRoutes = require("./routes/adminauth")
const userRoutes = require("./routes/userauth"); 

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes); 
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

