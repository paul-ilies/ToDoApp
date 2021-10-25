const http = require("http");
const app = require("./app");
const { connectDB } = require("./db");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
connectDB()

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})