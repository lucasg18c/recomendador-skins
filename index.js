const express = require("express");
const app = express();

app.set('view engine', 'ejs');

const opciones = require("./opciones.json");

const intervalo = 3 * 60 * 1000;

let elegida = "";
let proxima = Date.now() + intervalo;

elegir = () => {

    const n = opciones.length;
    if ( elegida == "" || Date.now() >= proxima) {
        proxima = Date.now() + intervalo;

        let r = Math.round(Math.random() * n)

        if (r == n){ 
            r = n - 1
        }
        elegida = opciones[r]
    }
}

app.get("/", (req, res) => {
    elegir()
    res.render("pages/index", {
        elegida: elegida
    })
})


app.listen(8080, () => {
    console.log("App funcionando");
})