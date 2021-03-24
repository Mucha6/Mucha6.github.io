const hasla = [
	'***** ***',
	'ANDRZEJ DUDA JEST DEBILEM',
	'GRA W WISIELCA JEST BEZ SENSU',
	'MITOCHONDRIUM JEST CENTRUM KOMÓRKI',
	'NOT FAR APYL TRI',
	'COŚ SIĘ KOŃCZY COŚ ZACZYNA',
	'A TO ZAWSZE ZOSI WINA',
	//'KOGO W NOCY SWĘDZI DUPA TEMU RANO ŚMIERDZI PALEC',
	//'GDZIE KUCHAREK SZEŚĆ PRZEPLATA TROCHĘ OD JABŁONI TAKI SYN',
	'ZŁOTY WIEK KULTURY POLSKIEJ',
	'KUKUŁKA KUKA',
	'ROKSI KARBON',
	'WTF YOLO IKSDE',
	'ALTERNATYWNA JESIENIARA',
	'ELUWINA TAK KAŻDY DZIEŃ SIĘ MÓJ ZACZYNA',
	'TOMEK TRAKTOR',
	'NIEDOROZWÓJ CHARAKTERU',
	'BICZ JEST DE BEST',
	'BICZ PLIS',
	'AJM BETA DEN JU',
	'ZUZUZUZUZUANKA',
	'BRONCHITIS',
	'BRATNI CZITOS',
	'TAK TO ROBI EKIPA',
	'CHODŹCIE BRONIĆ CZĘSTOCHOWY',
	'NARODOWY SEREK HETEROGENIZOWANY',
	'ŁOTS RONG ŁIF JU',
	'AJM FEJMYS',
	'ZOSIA ŚMIERDZI',
	'A WŁAŚNIE ŻE NIEE',
	'DŻIZAS BICZ',
	'AJNOŁRAJT',
	'RANDOMAJZING',
	'JEZUS NA ULANYM KRZYŻU',
	'TWOJE OCZY HIPNOTAJZING',
	'MASZ POTENSZAL',
	'DOEDUKUJ SIĘ DZIECKO',
	'TAP MADYL SONG',
	'JA JESTEM TRENDSETERKĄ',
	'FIIIIIIIIIIIIINDUS WRACAJ',
]

var haslo1 = hasla[Math.floor(Math.random() * hasla.length)];

var haslo2 = "";

var dlugosc = haslo1.length;

let papiezowa = false;


for (i = 0; i < dlugosc; i++) {
	if (haslo1.charAt(i) == " " || haslo1.charAt(i) == "<"
		|| haslo1.charAt(i) == "b" || haslo1.charAt(i) == "r" 
		|| haslo1.charAt(i) == ">" || haslo1.charAt(i) == "*") 
		haslo2 = haslo2 + haslo1.charAt(i);
	else
		haslo2 = haslo2 + "_";
}

function WypiszHaslo()
{
	document.getElementById('dhaslo').innerHTML = haslo2;
}

const litery = [
	'A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł',
	'M','N','Ń','O','Ó','P','R','S','Ś','T','U','W','Y','Z','Ź','Ż',
]

const tab = []
for (let i in litery) 
	tab.push(false); 


window.onload = WyswietlLiterki;

function WyswietlLiterki()
{
	var divy = "";
	for (i = 0; i < 32; i++) {
		var numer = "nr" + i;
		divy = divy + '<div class = "litera" onclick="Check('+i+')" id="'+numer+'">' +litery[i]+ '</div>';
		if ((i + 1) % 16 == 0)
			divy = divy + '<div style="clear: both;"> </div>';
	}
	document.getElementById('alfabet').innerHTML = divy;

	WypiszHaslo();
	//Check(-1);
}

String.prototype.Zmien = function(co, naco) {
	if (co > this.length - 1) 
		return this.toString();
	else 
		return this.substr(0, co) + naco + this.substr(co + 1);
};

var zle = 1;

function Check(nr)
{
	if (nr >= 0) {	
		var ok = false;
		if (tab[nr]) {
			return;
		}
		tab[nr] = true;
		for (i = 0; i < dlugosc; i++) {
			if (haslo1.charAt(i) == litery[nr]) {
				haslo2 = haslo2.Zmien(i, litery[nr]);
				ok = true;
			}
		}



		if (ok == true) {
			var numer = "nr" + nr;
			document.getElementById(numer).style.background = "#426145";
			document.getElementById(numer).style.color = "#04FF00";
			document.getElementById(numer).style.border = "3px solid #04FF00";
			document.getElementById(numer).style.cursor = "default";
			document.getElementById(numer).setAttribute("onclick", ";");
			WypiszHaslo();
		}
		else {
			zle++;
			var numer = "nr" + nr;
			document.getElementById(numer).style.background = "#614444";
			document.getElementById(numer).style.color = "#FF0000";
			document.getElementById(numer).style.border = "3px solid #FF0000";
			document.getElementById(numer).style.cursor = "default";
			document.getElementById(numer).setAttribute("onclick", ";");

			if (papiezowa)
				var nowy = "Fotosy/rys" + zle + "jp.png";
			else
				var nowy = "Fotosy/rys" + zle + ".png";
			document.getElementById("obrazki").innerHTML = '<img src="' + nowy + '" alt="" />';
		}
	}
	if (haslo1 === haslo2) {
		document.getElementById("alfabet").innerHTML = "Brawo ty! <br> <br> <span class='odnowa' onclick='location.reload()'> EGEN? </span>";
		haslo2 = "¡" + haslo2 + "!";
		WypiszHaslo();
	}
	else if (zle >= 8 || (papiezowa && zle >= 5)) {
		document.getElementById("alfabet").innerHTML = "Phi, pasztecik! <br> <br> <span class='odnowa' onclick='location.reload()'> EGEN? </span>";
		document.getElementById('dhaslo').innerHTML = haslo1;
	}
}


// klawiatura
document.addEventListener("keydown", e => {
	if (new Date().getHours() === 21 && new Date().getMinutes() === 37)
		papiezowa = true;
	const numer = litery.indexOf(e.key.toUpperCase());
	if (numer >= 0)
		Check(numer);
	else if (e.key === "Enter") location.reload();
});


if (new Date().getHours() === 21 && new Date().getMinutes() === 37)
	papiezowa = true;
