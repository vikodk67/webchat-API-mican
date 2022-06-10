__path = process.cwd()
// MODULE INDEX
const Database = require("@replit/database")
const db = new Database()
const secret = "qwertyuo";
const brainly = require('brainly-scraper');
const fs = require('fs');
var express = require('express');
var router = express.Router();
require('better-logging')(console);

   router.get('/', (req, res) => {
    res.render(__path + '/start.ejs')
       if(res){
        console.log("Pengunjung terdeteksi "+ req.ip);
    }
})

// Audio NOTIFICATION
router.get('/audio/chat-notif.wav', (req, res) => {
    res.sendFile(__path + '/audio/chat-notif.wav')
})
router.get('/audio/rec_cancel.wav', (req, res) => {
    res.sendFile(__path + '/audio/rec_cancel.wav')
})
router.get('/audio/rec.wav', (req, res) => {
    res.sendFile(__path + '/audio/rec.wav')
})
router.get('/audio/error.wav', (req, res) => {
    res.sendFile(__path + '/audio/error.wav')
})
// Panel HTML
router.get('/index.js', (req, res) => {
    res.sendFile(__path + '/index.js')
})

// api internal
alertno = "Akses ditolak administrator kunci api salah ";
router.get('/api/client/database', (req, res) => {
    query = req.query.query;
    apikey = req.query.apikey;
    if(apikey === undefined){
        res.json({ 
    alert: 'Masukan parameter apikey' 
    })
    }
                    
    if (apikey === secret){
    db.set("account", query).then((resp) => {
    res.json({ 
    result: 'Set ' + query, 
    resp
    })
    });
    } else {
        res.json({ 
    alert: alertno + ' ' + apikey
    })
    }
})

router.get('/api/client/database-get', (req, res) => {
    key = req.query.q
    apikey = req.query.apikey;
    if(apikey === undefined){
        res.json({ 
    alert: 'Masukan parameter apikey' 
    })
    }
    if (apikey === secret){
    db.get(key).then(value => {
    res.json({ 
    result: value
    })
    }); 
    } else {
        res.json({ 
    alert: alertno + ' ' + apikey
    })
    }

})

router.get('/api/brainly', (req, res) => {
    query = req.query.query
    
        brainly(query).then(respon => {
        res.json({ 
    api: 'brainly', 
    id: 0, 
    respon
        })
    });
    
})
// api internal
// redirect

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
let data = "Hai kak namaku mican. maukah bermain denganku? klik gambar chat yang ada di pojokan atas untuk melihat fitur yang ada";
  
fs.writeFile("./database/notif.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("NOTIFIKASI DITEMUKAN");
    console.log(fs.readFileSync("./database/notif.txt", "utf8"));
  }
const viko_notif = fs.readFileSync("./database/notif.txt", "utf8");
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
