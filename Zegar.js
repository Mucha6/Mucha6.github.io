const UstawCzas = () =>
{
	const data = new Date()
	let godzina = data.getHours()
	if (godzina < 10) godzina = '0' + godzina
	let minuta = data.getMinutes()
	if (minuta < 10) minuta = '0' + minuta
	let sekunda = data.getSeconds()
	if (sekunda < 10) sekunda = '0' + sekunda

	document.getElementById("zegar").innerHTML = godzina + ':' + minuta + ':' + sekunda

	UstawSuchara(minuta)
	setTimeout(UstawCzas, 1000)
}

UstawCzas()