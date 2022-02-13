fetch(`http://localhost:8080/config`)
	 .then(response => response.json())
    .then(data => {
	hasil = data.result.readpiles
	console.log(hasil)
	document.getElementById("notifi").innerHTML = hasil
});
(async () => {
    // create and show the notification
    const showNotification = () => {
        // create a new notification
        const notification = new Notification('Micanss BOT', {
            body: 'Hay bermainlah sama micanss disini, walau bot ini sedang dalam pengembangan oleh developer Viko',
            icon: './icon/preload.jpg'
        });

        // close the notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {

            window.open('https://api.whatsapp.com/message/6IUZGPOAXTKUG1?autoload=1&app_absent=0', '_blank');
        });
		// ucapan ges
		var h=(new Date()).getHours();
        var m=(new Date()).getMinutes();
        var s=(new Date()).getSeconds();
if (h >= 4 && h < 10) {
			viko = new Notification('Micanss BOT', {
            body: 'Selamat pagi, selamat beraktifitas kak',
            icon: './icon/preload.jpg'
        });
        setTimeout(() => {
            viko.close();
        }, 10 * 1000);
}
if (h >= 10 && h < 15){
			viko = new Notification('Micanss BOT', {
            body: 'Selamat siang kak, mican kangen nih wkwkwk',
            icon: './icon/preload.jpg'
        });
        setTimeout(() => {
            viko.close();
        }, 10 * 1000);
}
if (h >= 15 && h < 18){
			viko = new Notification('Micanss BOT', {
            body: 'Selamat sore kak, istirahat yoo oke:3',
            icon: './icon/preload.jpg'
        });
        setTimeout(() => {
            viko.close();
        }, 10 * 1000);
}
if (h >= 18 || h < 4){
			viko = new Notification('Micanss BOT', {
            body: 'Selamat Malam, selamat beristirahat yo, ga mau chat sama mican nih?',
            icon: './icon/preload.jpg'
        });
        setTimeout(() => {
            viko.close();
        }, 10 * 1000);
};
    }
    // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'Notifikasi micans diblokir oleh pengguna';
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    granted ? showNotification() : showError();

})();