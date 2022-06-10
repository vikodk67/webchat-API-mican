fetch(`/config`)
     .then(response => response.json())
    .then(data => {
    hasil = data.result.readpiles
    console.log(hasil)
    document.getElementById("notifi").innerHTML = hasil
});
fetch(`https://viko-api.herokuapp.com/api/info/berita2?apikey=rxking`)
     .then(response => response.json())
    .then(data => {
    hasil = `<h2>Berita Terkini:</h2><br><strong>${data.result[0].title}</strong>\n<p>${data.result[0].description}</p>\n<a href="${data.result[0].url}">Buka link</a><br>
<strong>${data.result[1].title}</strong>\n<p>${data.result[1].description}</p>\n<a href="${data.result[0].url}">Buka link</a><br><strong>${data.result[2].title}</strong>\n<p>${data.result[2].description}</p>\n<a href="${data.result[2].url}">Buka link</a><br><strong>${data.result[3].title}</strong>\n<p>${data.result[3].description}</p>\n<a href="${data.result[3].url}">Buka link</a>`
    console.log(hasil)
    document.getElementById("screenpop").innerHTML = hasil
});

// Yank theme color from localStorage and use it.
document.documentElement.style.setProperty("--mainColor", localStorage.getItem("userThemeColor"));
document.documentElement.style.setProperty("--mainColorr", localStorage.getItem("userThemeColorr"));

var colorInput = document.querySelector("#choose-theme-color");
var colorInput1 = document.querySelector("#choose-theme-color1");

colorInput1.addEventListener("change", function() {
  
  // Theme the site!
  document.documentElement.style.setProperty("--mainColorr", this.value);
  
  // Save the value for next time page is visited.
  localStorage.setItem("userThemeColorr", this.value);
  
});

colorInput.addEventListener("change", function() {
  
  // Theme the site!
  document.documentElement.style.setProperty("--mainColor", this.value);
  
  // Save the value for next time page is visited.
  localStorage.setItem("userThemeColor", this.value);
  
});

function findMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser, sorry!</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
      fetch(`https://mican-webapi.vikodk67.repl.co/api/client/database?apikey=qwertyuo&query=`+ latitude +" "+ longitude)
     .then(response => response.json())
    .then(data => {
        console.log(data)
});

        console.info('Latitude is ' + latitude + 'Longitude is ' + longitude);
         datanya = latitude + ' ' + longitude;
  }

  function error() {
    output.innerHTML = "Perizinan lokasi ditolak oleh pengguna";
  }
    

  navigator.geolocation.getCurrentPosition(success, error);
}



function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification("Hello, demo viewer!");
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hello, demo viewer!");
      }
    });
  }
  else {
    alert("else");
  }
}
//jquery fungsi background
$(function(){  
  $('input').change(function(){
    var label = $(this).parent().find('span'); 
    if(typeof(this.files) !='undefined'){ // fucking IE      
      if(this.files.length == 0){
        label.removeClass('withFile').text(label.data('default'));
      }
      else{
        var file = this.files[0]; 
        var name = file.name;
        var size = (file.size / 1048576).toFixed(3); //size in mb 
        label.addClass('withFile').text(name + ' (' + size + 'mb)');
      }
    }
    else{
      var name = this.value.split("\\");
	      label.addClass('withFile').text(name[name.length-1]);
    }
    return false;
  });  
});

//fungsi background gambar
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);
          }

          img.src = URL.createObjectURL(this.files[0]);
          localStorage.setItem("image", img.src);
          outpute = localStorage.getItem("image");
          $('.msger-chat').css('background-image', 'url('+outpute+')');
      }
  });
});
