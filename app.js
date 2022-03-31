const express = require("express");
const cors = require("cors");
const {BadRequestError, errorHandler} = require("./app/errors");
const app = express();
const setupContactRoutes = require("./app/routes/contact.routes");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.json({message: "Welcome to contact book application."});
});

setupContactRoutes(app);

//handle 404 response
app.use((req, res, next) => {
    //code o day se chay khi khong co route duoc dinh nghia nao
    //    khop voi yeu cau. goi next() de chuyen sang middleware xu ly loi
    next(new BadRequestError(404, "Resource not found"));
});

//define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    //middleware xu ly loi tap trung.
    //trong cac doan code xu ly o cac route, goi next(error)
    //   se chuyen ve middleware xu ly loi nay
    errorHandler.handleError(error, res);
});

module.exports = app;