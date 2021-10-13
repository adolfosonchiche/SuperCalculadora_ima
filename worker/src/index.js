//importamos los modulos que vamos a utilizar
const express = require('express')
const app = express()

//declaramos el puerto del worker
const puerto = 3002

app.use(express.json())
app.use(express.urlencoded())

const router = require('./routes/worker')

app.use('/', router)

//exponemos la api del worker en el puerto 3002
app.listen(puerto, () => console.log(`worker expuesto en el pueerto ${puerto}`))
