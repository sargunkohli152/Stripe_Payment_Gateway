const app = require("./app");
const connectDB = require("./data/database");

connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is  working on port: ${PORT}`);
})