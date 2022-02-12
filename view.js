__path = process.cwd()

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
router.get('/icon/preload.jpg', (req, res) => {
    res.sendFile(__path + '/icon/preload.jpg')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '#',
            namabot: 'Micanss WEB',
            namaowner: 'Viko dwi kurniawan',
            instagram: 'vikodwik_rmx',
            youtube : 'Studiovdk entertainment'
        }
    }
    res.json(config)
})

module.exports = router
