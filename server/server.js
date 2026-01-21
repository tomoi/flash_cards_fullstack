const express = require("express");
const session = require("express-session");
const pool = require("./db");
const app = express();


app.listen(3000, () => {
    console.log("Server has started on port 3000.")
});

//middleware
app.use(express.json());

//TODO put secret in .env variable so it is not visible to git
app.use(session({
    secret: 'this-is-my-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 2 * 60 * 60 * 1000 } // 2 hours
}));

app.post("/users", async (req, res) => {
    try {
        
        console.log(req.body);

    } catch (error) {
        console.error(error.message)
    }
})

app.get("/", (req, res) => {
    console.log("hey")
    res.status(500).json({message: "Error"})
})