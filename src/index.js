import express, {urlencoded} from "express"
import {engine} from "express-handlebars"
import __dirname from "./utils.js"


const app = express();
const PORT = 4000;

app.use(express.json());
app.use(urlencoded({ extended: true}));

app.engine("handlebars", engine());
app.set("view engine", "handlebars")


app.get("/", (req, res) => {
    res.send("Hola soy un servidor por express");
})

app.listen(PORT, () => {
    console.log(`Sevidor por puerto ${PORT}`);
})
