const express = require("express")
const cors = require("cors")
const mybooksRouters = require("./routers/apiBooks.routers")
const errorHandLing = require('./error/errorHandling');
const app = express();

app.set("port", process.env.PORT || 3500)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(mybooksRouters);

app.use((req, res, next) => {
    res.status(404).json({error:true,
                          codigo: 404,
                          message: "endpoint doesnt found"})
})

app.use(errorHandLing);


module.exports = app;