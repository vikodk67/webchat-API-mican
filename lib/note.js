fetch(`http://localhost:8080/config`)
	 .then(response => response.json())
    .then(data => {
	hasil = data.result.readpiles
	console.log(hasil)
	document.getElementById("notifi").innerHTML = hasil
});