const PORT = 5001
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'data.json'))
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/gameon', router)
server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`))

const express = require("express");
const mongoose = require("mongoose");
const users = require("./scripts/loginRoutes");
const bodyParser = require("body-parser");
var cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
const db = "mongodb+srv://saiii:jvs<3gag@clustersaiii-iacxx.mongodb.net/members?retryWrites=true"

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Mongodb connected successfully"))
    .catch(err => console.log(err));
//routes use
app.use("/api/users", users);
const host = "0.0.0.0";
const port = 5002;
console.log("deployed on the port: " + port);
app.listen(port, () => console.log(`server is running on port ${port}`));



