const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

let files = []
const imageFolder = 'images'
if (fs.statSync(imageFolder)) {
  files = fs.readdirSync(path.join(__dirname, imageFolder))
}
console.log(files)
app.use('/images', express.static(path.join(__dirname + imageFolder)))
app.get('/', function (req, res) {
  res.send(`
      <head>
      <script>
        window.images = ${JSON.stringify(files)}
      </script>
      </head>
      <body>
      <div>
        <h1>Hello</h1>
      </div>
      </body>
      `);
})

app.listen(8080, function () {
  console.log('server listen on 8080')
})

