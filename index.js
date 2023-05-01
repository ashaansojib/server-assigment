const express = require('express')
const app = express()
const port = 9988

const fakeData = require('./data/FakeData.json')

app.get('/', (req, res) =>{
    res.send('hello word this is dude')
})

app.get('/fakedata', (req, res)=>{
    res.send(fakeData)
})

app.listen(port, ()=>{
    console.log('the port is running on: ', port)
})