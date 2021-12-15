var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')
var popup = require('popups');

var mainrouter = require('./view.js')
var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter)

app.listen(PORT, () => {
    console.log(color("Server berjalan pada port " + PORT,'green'))
	console.log(color("MICANSS BOT WEB - Viko dwi kurniawan",'yellow'))
})

module.exports = app
