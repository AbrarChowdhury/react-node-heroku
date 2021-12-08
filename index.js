const express = require('express')
var cors = require('cors')
const path = require('path');
const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/users', (req, res) => {
  let users=["abrar","sajid","#9","mutu","A-Zahin", "mehedi"]
    res.json(users)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})