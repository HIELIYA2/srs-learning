const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");

const addCardRoutes = require("./routes/card-route");
const addUserRoutes = require("./routes/user-route");

const app = express();
let server = require("http").Server(app);
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true, // enable set cookie
    })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({
        secret: "borsood",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.get("/", (req, res) => {
    res.send("you are connected");
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

addCardRoutes(app);
addUserRoutes(app);
