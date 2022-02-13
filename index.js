const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}

var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

var notes = getAllNotes();
renderNotes(notes);



// template made by Sajad Hashemian
// Javascript by viko menggunakan switch case
// thanks to Ikhya - viko - zhirr - zeks

// kasih creditsnya kaliii
const version = 1.4
var apikey = "rxking" // viko-api.herokuapp.com 
var apikey_token = "8OoDbSQm"

const BOT_IMG = "./profil.png";
const PERSON_IMG = "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png";
const BOT_NAME = "Micanss V" + version;
const PERSON_NAME = "You";
//audio notifnya
var audioer = new Audio("audio/error.wav");
var audiochat = new Audio("audio/chat-notif.wav");
// end audio

//panel chatnya
msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = `${msgerInput.value}`
  const chtar = msgerInput.value
  const args = chtar.trim().split(/ +/).slice(1)
  function botResponse() {
  switch(chtar){
	  case '#menu':
	   const botku = `Silahkan klik icon chat pojok kanan atas<br>Version: ${version} BETA<br>
	   `
      console.log("Sukses tanpa error")
  const msg000 = botku;
  const delay000 = msg000.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msg000);
  }, delay000);

	  break;
	  case '#play4':
	  pencarian = prompt("Pencarian video dari youtube");
	 fetch(`https://viko-api.herokuapp.com/api/yt/playmp4?query=${pencarian}&apikey=${apikey}`)
	 .then(response => response.json())
    .then(data => {
        console.log(data)
  console.log("Sukses tanpa error")
  msg001 = `<center>
  <video width="340" height="190" controls autoplay>
  <source src="${data.url}" type="video/mp4">
  <source src="${data.url}" type="video/ogg">
  Your browser does not support the video tag.
  </video></center>
	 <br><br>
	 <h4>${data.title}</h4><br>
	 Channel: ${data.channel}<br>
	 Viewer: ${data.views}<br>
	 Publish: ${data.published}<br><br>`
  delay001 = msg001.split(" ").length * 100;
  
  appendMessage(BOT_NAME, BOT_IMG, "left", "Buffering video...");
  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msg001);
  }, delay001);

    })
    .catch(err => {
     audioer.play();
    appendMessage(BOT_NAME, BOT_IMG, "left", err);
    });
	  break;
	  case '#cerpen':
	 fetch(`https://viko-api.herokuapp.com/api/cerpen/random?apikey=${apikey}`)
	 .then(response => response.json())
    .then(data => {
        console.log(data)
   const mainmenu = data.result
  console.log("Sukses tanpa error")
  const msg001 = mainmenu;
  const delay001 = msg001.split(" ").length * 100;
  const loading = "Loading, tunggu beberapa menit untuk mencari berkas di perpustakaan"
  appendMessage(BOT_NAME, BOT_IMG, "left", loading);
  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msg001);
  }, delay001);

    })
    .catch(err => {
     audioer.play();
        alert("Kesalahan saat mencari cerita pendek: " + err)
    appendMessage(BOT_NAME, BOT_IMG, "left", err);
    });
	  break;
	  case '#admin':
	  case '#owner':
	   const admin_bot = `
<style>
.asuw {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
	   <strong>Viko dwi kurniawan</strong><br>
     <a>Developer COPAS</a><br><br>
	    <a class="asuw" href="https://wa.me/6281515958390/">Whatsapp</a>&nbsp;<a class="asuw" href="https://viko-api.herokuapp.com/">Rest API</a>
	   `
      console.log("Sukses tanpa error")
  const msg003 = admin_bot;
  const delay003 = msg003.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msg003);
  }, delay003);

	  break;
    case '#play':
    const hasilny = prompt("masukan keyword pencarian youtube mp3");
     if (hasilny == "null") {
  appendMessage("Youtube MP3", BOT_IMG, "left", 'Membatalkan');
         }
    comd = "Silahkan tunggu " + hasilny
    appendMessage("Youtube MP3", BOT_IMG, "left", comd);
   fetch(`https://viko-api.herokuapp.com/api/yt/playmp3?query=${hasilny}&apikey=${apikey}`)
   .then(response => response.json())
    .then(data => {
     
      if (data.result == "masukkan parameter query") {
  appendMessage("Youtube MP3", "left", 'masukan keywordnya kosong');
         }
        console.log(data)
   const kuotes = `
   <style>
   h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 330px;
    }
   </style>
   <center>
   <img src="${data.thumb}"
     width="300" 
     height="150"</img></center>
	 <br><br>
	 <h4>${data.title}</h4><br>
	 Channel: ${data.channel}<br>
	 Viewer: ${data.views}<br>
	 Publish: ${data.published}<br><br>
	 <audio controls autoplay>
  <source src="${data.url}" type="audio/ogg">
  <source src="${data.url}" type="audio/mpeg">
  Your browser does not support
     </audio>
  </div>
</div>
	 `
  console.log("Sukses tanpa error")
  const msg004 = kuotes;
  const delay004 = msg004.split(" ").length * 100;
  setTimeout(() => {
    appendMessage("Youtube MP3", BOT_IMG, "left", msg004);
  }, delay004);
  if (data.statusCode) {
  appendMessage(BOT_NAME, BOT_IMG, "left", 'Terjadi kesalahan, server tiba tiba menutup laman');
}
    })
    .catch(err => {
     audioer.play();
        console.log("Kesalahan: " + err)
    appendMessage(BOT_NAME, BOT_IMG, "left", err);
    });
    break;
	case '#tiktok':
    const urlnya = prompt("masukan URL tiktok!!");
     if (urlnya == "null") {
  appendMessage(BOT_NAME, BOT_IMG, "left", 'Membatalkan');
         }
    comd = "Silahkan tunggu "
    appendMessage(BOT_NAME, BOT_IMG, "left", comd);
   fetch(`https://hadi-api.herokuapp.com/api/tiktok?url=${urlnya}`)
   .then(response => response.json())
    .then(data => {
     
      if (urlnya === undefined) {
  appendMessage(BOT_NAME, "left", 'masukan URL TIKTOKnya');
         } else {
        console.log(data)
   const katese = `
  <center>
  <video width="260" height="330" controls autoplay>
  <source src="${data.result.video.original}" type="video/mp4">
  <source src="${data.result.video.original}" type="video/ogg">
  Your browser does not support the video tag.
  </video></center><br>
<center><strong>untuk mendownload silahkan pilih dibawah. Audio atau Video NoWM</strong></center>
<center><h5>Tiktok Downloader ${version}</h5></center>
<br><br>
<center><a class="asuw" href="${data.result.video.nowm}"><strong>NoWM</strong></a>
<a class="asuw" href="${data.result.audio_only.audio1}"><strong>MP3</strong></a></center>`
  console.log("Sukses tanpa error")
  const msg005 = katese;
  const delay005 = msg005.split(" ").length * 100;
  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msg005);
  }, delay005);
  }
    })
    .catch(err => {
     audioer.play();
        console.log("Kesalahan: " + err)
    appendMessage(BOT_NAME, BOT_IMG, "left", err);
    });
    break;
	  default:
	  fetch(`https://viko-api.herokuapp.com/api/f/simi?apikey=${apikey}&query=${chtar}`)
	 .then(response => response.json())
    .then(data => {
        console.log(data)
  const mainsimi = data.result
  const chatsim = mainsimi;
  const delaykale = chatsim.split(" ").length * 100;
  var audio = new Audio("audio/chat-notif.wav");
  audiochat.play();
  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", chatsim);
  }, delaykale);
  var consolw = "jumlah kata diucapkan oleh micans " + mainsimi.length + "Kata"
  console.log(consolw)
    })
    .catch(err => {
     audioer.play();
      swal({
    title: "Periksa koneksi internet anda !!",
    type: "warning",
    confirmButtonColor: "#33cbf5",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
    });
	  break;
  }
}
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
  <style>
  div.msg-text {
  max-width: 400px;
  min-width: 100px;
  }
  </style>
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}



// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
};

recognition.onstart = function() { 
  instructions.text('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
  instructions.text('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}


/*-----------------------------
      App buttons and input 
------------------------------*/

$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});


$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition di berhentikan');
});

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})

$('#save-note-btn').on('click', function(e) {
  recognition.stop();

  if(!noteContent.length) {
    instructions.text('Could not save empty note. Please add a message to your note.');
  }
  else {
    // Save note to localStorage.
    // The key is the dateTime with seconds, the value is the content of the note.
    saveNote(new Date().toLocaleString(), noteContent);

    // Reset variables and update UI.
    noteContent = '';
    renderNotes(getAllNotes());
    noteTextarea.val('');
    instructions.text('Note saved successfully.');
  }
      
})


notesList.on('click', function(e) {
  e.preventDefault();
  var target = $(e.target);

  // Listen to the selected note.
  if(target.hasClass('listen-note')) {
    var content = target.closest('.note').find('.content').text();
    readOutLoud(content);
  }

  // Delete note.
  if(target.hasClass('delete-note')) {
    var dateTime = target.siblings('.date').text();  
    deleteNote(dateTime);
    target.closest('.note').remove();
  }
});



/*-----------------------------
      Speech Synthesis 
------------------------------*/

function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);
}



/*-----------------------------
      Helper Functions 
------------------------------*/

function renderNotes(notes) {
  var html = '';
  if(notes.length) {
    notes.forEach(function(note) {
      html+= `<li class="note">
        <p class="header">
          <span class="date">${note.date}</span>
          <a href="#" class="listen-note" title="Listen to Note">Listen to Note</a>
          <a href="#" class="delete-note" title="Delete">Delete</a>
        </p>
        <p class="content">${note.content}</p>
      </li>`;    
    });
  }
  else {
    html = '<li><p class="content">You don\'t have any notes yet.</p></li>';
  }
  notesList.html(html);
}


function saveNote(dateTime, content) {
  localStorage.setItem('note-' + dateTime, content);
}


function getAllNotes() {
  var notes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if(key.substring(0,5) == 'note-') {
      notes.push({
        date: key.replace('note-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    } 
  }
  return notes;
}


function deleteNote(dateTime) {
  localStorage.removeItem('note-' + dateTime); 
}