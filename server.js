const express = require('express')
const cors = require('cors')
const data = require('./dataBase.json')

const app = express();

app.use(cors());

app.get('/api/countries', (req, res) => {

    res.send({ contries: Object.keys(data).slice(1) })
})
app.get('/api', (req, res) => {

    res.send("<h1 style='display:flex;justify-content:center;'>welcome to coronaVirus api</h1>")
})
app.get('/api/total', (req, res) => {

    res.send(data.total)
})
app.get('/api/countries/:country', (req, res) => {
    res.send(data[req.params.country])

})


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT} ...`);
})