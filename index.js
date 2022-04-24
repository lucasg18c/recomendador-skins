const express = require("express");
const app = express();

const opciones = require("./opciones.json");

const intervalo = 10 * 60 * 1000;

let elegida = "";
let proxima = Date.now() + intervalo;

elegir = () => {

    const n = opciones.length;
    if ( elegida == "" || Date.now() >= proxima) {
        proxima = Date.now() + intervalo;
        elegida = opciones[Math.round(Math.random() * n)]
    }
}

app.get("/", (req, res) => {
    elegir()
    res.send(`Usar Skin ${elegida}`)
})


app.listen(8080, () => {
    console.log("App funcionando");
})