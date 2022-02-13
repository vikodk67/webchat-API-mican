__path = process.cwd()
// MODULE
const fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/start.html')
})
// Audio NOTIFICATION
router.get('/audio/chat-notif.wav', (req, res) => {
    res.sendFile(__path + '/audio/chat-notif.wav')
})
router.get('/audio/error.wav', (req, res) => {
    res.sendFile(__path + '/audio/error.wav')
})
// Panel HTML
router.get('/index.js', (req, res) => {
    res.sendFile(__path + '/index.js')
})
router.get('/profil.png', (req, res) => {
    res.sendFile(__path + '/profil.png')
})
router.get('/css/style.css', (req, res) => {
    res.sendFile(__path + '/css/style.css')
})
router.get('/css/preload.css', (req, res) => {
    res.sendFile(__path + '/css/preload.css')
})
router.get('/icon/exclamation-circle-solid.png', (req, res) => {
    res.sendFile(__path + '/icon/exclamation-circle-solid.png')
})
router.get('/icon/chat.png', (req, res) => {
    res.sendFile(__path + '/icon/chat.png')
})
router.get('/icon/chat.png', (req, res) => {
    res.sendFile(__path + '/icon/chat.png')
})
router.get('/lib/note.js', (req, res) => {
    res.sendFile(__path + '/lib/note.js')
})
router.get('/icon/preload.jpg', (req, res) => {
    res.sendFile(__path + '/icon/preload.jpg')
})
let data = "hai coba katakan sesuatu sama micanss sekarang. bot web dalam masa pengembangan beta version";
  
fs.writeFile("notif.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("NOTIFIKASI DITEMUKAN");
    console.log(fs.readFileSync("notif.txt", "utf8"));
  }
const viko_notif = fs.readFileSync("notif.txt", "utf8");
router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            readpiles : viko_notif,
            namabot: 'Micanss WEB',
            namaowner: 'Viko dwi kurniawan',
            instagram: 'vikodwik_rmx',
            youtube : 'Studiovdk entertainment'
        }
    }
    res.json(config)
})
});
module.exports = router