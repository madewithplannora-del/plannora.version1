const dns = require("node:dns");
const colo = require("colo");
const path = require("path");

// Load environment variables from backend/.env
require('dotenv').config({ path: path.join(__dirname, '.env') });

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = require("../backend/src/app")
const ConnectToMongo = require("../backend/src/database/mongoDB")

ConnectToMongo()

app.listen(process.env.PORT, () => {
    console.log(colo.green("Server running on 5000"))
})