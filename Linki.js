var linki = new Array(31);
linki[0] = "https://www.youtube.com/channel/UC70N5rd4k6--UNJ4eXx675g";
linki[1] = "https://aniagotuje.pl/przepis/parowki-w-ciescie-francuskim";
linki[2] = "https://images.app.goo.gl/rbEHGfqcX3yNt2G47";
linki[3] = "https://images.app.goo.gl/6M8ezojEVeioDBxa6";
linki[4] = "https://pl.m.wikipedia.org/wiki/Pr%C4%85d_Zatokowy";
linki[5] = "https://www.granddeco.pl/product-pol-4800-Kamienie-rzeczne-200g-naturalne.html";
linki[6] = "https://www.polsat.pl/program/nasz-nowy-dom/";
linki[7] = "https://www.izolacje.com.pl/produkt/metody-osuszania-budynkow/202047,folia-polietylenowa-hdpe";
linki[8] = "https://en.m.wikipedia.org/wiki/Polytetrafluoroethylene";
linki[9] = "https://en.m.wikipedia.org/wiki/Chinese_characters";
linki[10] = "https://pl.wikipedia.org/wiki/Wikipedia:Neutralny_punkt_widzenia";
linki[11] = "https://es.pons.com/traducci%C3%B3n/polaco-espa%C3%B1ol/dziko";
linki[12] = "https://www.mjakmama24.pl/ciaza/dieta-i-suplementy/herbata-w-ciazy-jaka-herbate-pic-w-ciazy-aa-Mrj3-hX4m-HjTA.html";




function UstawLink(dzien)
{
	var ktorylink = (dzien % 12);
	var nowya = '<a href="'+linki[ktorylink]+'" target="blank" class="zlinkiem"> xd </a>';
	document.getElementById("randomlink").innerHTML = nowya;
}