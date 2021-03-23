const hasla = [
	'ANDRZEJ DUDA JEST DEBILEM',
	'GRA W WISIELCA JEST BEZ SENSU',
	'MITOCHONDRIUM JEST CENTRUM KOMÓRKI',
	'NOT FAR APYL TRI',
	'COŚ SIĘ KOŃCZY COŚ ZACZYNA',
	'A TO ZAWSZE ZOSI WINA',
	'KOGO W NOCY SWĘDZI DUPA, TEMU RANO ŚMIERDZI PALEC',
	'GDZIE KUCHAREK SZEŚĆ PRZEPLATA TROCHĘ OD JABŁONI TAKI SYN',
	'ZŁOTY WIEK KULTURY POLSKIEJ',
	'KUKUŁKA KUKA',
	'ROKSI KARBON',
	'WTF YOLO XD',
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
	'***** ***',
	'NARODOWY SEREK HETEROGENIZOWANY',
	'ŁOTS RONG ŁIF JU',
	'AJM FEJMYS',
	'ZOSIA ŚMIERDZI',
	'A WŁAŚNIE ŻE NIEE',
	'DŻIZAS BICZ',
	'AJNOŁRAJT',
]

var haslo1 = hasla[Math.floor(Math.random() * hasla.length)];

var haslo2 = "";

var dlugosc = haslo1.length;


for (i = 0; i < dlugosc; i++) {
	if (haslo1.charAt(i) == " " || haslo1.charAt(i) == "<"
		|| haslo1.charAt(i) == "b" || haslo1.charAt(i) == "r" || haslo1.charAt(i) == ">") 
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
	var ok = false;
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

		var nowy = "Fotosy/rys" + zle + ".png";
		document.getElementById("obrazki").innerHTML = '<img src="' + nowy + '" alt="" />';
	}
	if (haslo1 == haslo2) {
		document.getElementById("alfabet").innerHTML = "Brawo ty! <br> <br> <span class='odnowa' onclick='location.reload()'> EGEN? </span>";
		haslo2 = "¡" + haslo2 + "!";
		WypiszHaslo();
	}
	
	if (zle >= 8)
		document.getElementById("alfabet").innerHTML = "Phi, pasztecik! <br> <br> <span class='odnowa' onclick='location.reload()'> EGEN? </span>";
}


// klawiatura
document.addEventListener("keydown", e => {
	if (e.key === "a") Check(0);
	else if (e.key === "ą") Check(1);
	else if (e.key === "b") Check(2);
	else if (e.key === "c") Check(3);
	else if (e.key === "ć") Check(4);
	else if (e.key === "d") Check(5);
	else if (e.key === "e") Check(6);
	else if (e.key === "ę") Check(7);
	else if (e.key === "f") Check(8);
	else if (e.key === "g") Check(9);
	else if (e.key === "h") Check(10);
	else if (e.key === "i") Check(11);
	else if (e.key === "j") Check(12);
	else if (e.key === "k") Check(13);
	else if (e.key === "l") Check(14);
	else if (e.key === "ł") Check(15);
	else if (e.key === "m") Check(16);
	else if (e.key === "n") Check(17);
	else if (e.key === "ń") Check(18);
	else if (e.key === "o") Check(19);
	else if (e.key === "ó") Check(20);
	else if (e.key === "p") Check(21);
	else if (e.key === "r") Check(22);
	else if (e.key === "s") Check(23);
	else if (e.key === "ś") Check(24);
	else if (e.key === "t") Check(25);
	else if (e.key === "u") Check(26);
	else if (e.key === "w") Check(27);
	else if (e.key === "y") Check(28);
	else if (e.key === "z") Check(29);
	else if (e.key === "ź") Check(30);
	else if (e.key === "ż") Check(31);
});
