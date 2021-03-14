var suchary = new Array(60)
suchary[0] = "– Jak się nazywa lekarz który leczy pandy? <br/> – Pandoktor <br/>";
suchary[1] = "Na lekcji plastyki dzieci rysują sporty zimowe. Podchodzi pani do Jasia i pyta: <br/>– Jasiu, czemu nic nie narysowałeś? <br/>– Nieprawda, narysowałam Małysza. <br/>– A gdzie on jest? <br/>– No poleciał. <br/>";
suchary[2] = "– Dlaczego jajka nie potrafią dochować tajemnicy? <br/>– Bo pękają, gdy robi się gorąco. <br/>";
suchary[3] = "– Tatusiu, czy Ocean Spokojny zawsze jest spokojny? <br/>Ojciec odpowiada: <br/>– Czy nie możesz zapytać o coś mądrzejszego? <br/>– Mogę. Chciałbym wiedzieć, kiedy umarło Morze Martwe. <br/>";
suchary[4] = "Dwie muchy grają w piłkę nożną w filiżance. Po jakimś czasie jedna mówi do drugiej: <br/>– Staraj się, bo za tydzień gramy w pucharze. <br/>"
suchary[5] = "– Gdzie duchy i kościotrupy jadą na wakacje? <br/>– Nad Morze Martwe <br/>";
suchary[6] = "– Jakie są ulubione ryby matematyka? <br/>– Sumy <br/>";
suchary[7] = "– Dzień dobry, dzwonię w sprawie garażu. <br/>– Tutaj baza rakietowa. Źle pan trafił. <br/>– To wy źle trafiliście... <br/>";
suchary[8] = "– Panie doktorze, wszyscy mnie ignorują! <br/>– Następny proszę! <br/>";
suchary[9] = "– Jaki jest największy las na świecie? – pyta pani Jasia na przyrodzie. <br/>– Las Vegas <br/>";
suchary[10] = "Spotykają się dwa jeże. Jeden ma zabandażowaną łapkę. <br/>– Co ci się stało? <br/>– Chciałem się podrapać <br/>";
suchary[11] = "– Dlaczego duchy nie kłamią? <br/>– Bo wiedzą, że możesz je przejrzeć na wylot <br/>";
suchary[12] = "– Co mop zawsze ogląda w walentynki? <br/>– Przeminęło z wiadrem <br/>";
suchary[13] = "– Jaki jest film, którego boją się wszystkie pralki? <br/>– Człowiek z bielizną <br/>";
suchary[14] = "– Co jedna flaga powiedziała do drugiej? <br/>– Nic, tylko sobie pomachały <br/>";
suchary[15] = "– Jaki jest ulubiony film piłkarzy? <br/>– Robokop <br/>";
suchary[16] = "– Jak się czuje ogórek w towarzystwie śmietany? <br/>– Mizernie <br/>";
suchary[17] = "– Dlaczego lody się topią? <br/>– Bo nie umieją pływać <br/>";
suchary[18] = "– Budzę się, a to mój telefon frunie przez pokój. Okazało się, że był włączony tryb samolotowy. <br/>";
suchary[19] = "– Zofia po dwóch tygodniach diety zrzuciła wagę... z ósmego piętra. <br/>";
suchary[20] = "– Mamy twojego syna... <br/>– To strasznie! Czego chcecie? <br/>– Niech pan przyjdzie i go odbierze, zaraz zamykamy przedszkole. <br/>";
suchary[21] = "– A my mamy w domu wszystko! – chwali się koleżankom mała Ala. <br/>– Skąd wiesz? <br/>– Bo jak tata przywiózł delegacji gitarę, to mama powiedziała, że tylko tego brakowało <br/>";
suchary[22] = "– Przychodzi kucharz do lekarza i mówi: <br/>– Panie doktorze, ostatnio zauważyłem, że źle słyszę na jedno ucho. <br/>– A na drugie? <br/>– Kotlet schabowy, frytki i surówka z marchewki. <br/>";
suchary[23] = "– Kupiłam swojej córce kamerkę internetową. Dobra informacja jest taka, że połowa pokoju zawsze jest idealnie posprzątana. <br/>";
suchary[24] = "Idzie Jasiu do Bacy i mówi: <br/>– Powiedzcie: Chrząszcz brzmi w trzcinie. <br/>A baca na to: <br/>– Chrobok burcy w trowie <br/>";
suchary[25] = "– Pana pies szczeka całą noc – mówi rozcwścieczony sąsiad. <br/>– To nic, odeśpi w dzień – odpowiada właściciel psa. <br/>";
suchary[26] = "– Czy wiesz, za co uwielbiam łopaty? <br/>– Wiedzą, że grunt to zdrowie <br/>";
suchary[27] = "Rozmawiają koledzy: <br/>– Powtarzałeś coś przed egzaminem? <br/>– No jasne. <br/>– A co? <br/>– Będzie dobrze, będzie dobrze <br/>";
suchary[28] = "Badania wykazały, że nic tak pozytywnie wpływa na myślenie o sąsiadach, jak wykrycie zaraz po przeprowadzce niezabezpieczonej sieci WiFi. <br/>";
suchary[29] = "– Jasiu, dlaczego wnosisz na paluszkach to wiadro z wodą do sypialni? <br/>– Bo tata prosił, żeby go o piątej po cichutku obudzić. <br/>";
suchary[30] = "– Dzień dobry, do czego służą okulary? <br/>– Do widzenia. <br/>";
suchary[31] = "Jedno oko mówi do drugiego: <br/>– Tak między nami, wydaje mi się, że coś tu węszy <br/>";
suchary[32] = "Rozmawiają dwie pchły: <br/>– Gdzie byłaś na wakacjach? <br/>– Na krecie <br/>";
suchary[33] = "– Dlaczego dorośli pytają dzieci, kim chcą zostać w przyszłości? <br/>– Bo sami wciąż szukają na to pomysłu <br/>";
suchary[34] = "– Dlaczego nie da się zjeść zegarka? <br/>– Bo to zbyt czasochłonne <br/>";
suchary[35] = "Tata pyta Jasia:– Po co Ci w domu łopata i kompas? <br/>– Zamierzam posprzątać w moim pokoju <br/>";


function UstawSuchara(minuta)
{
	var ktorysuchar = (minuta % 31);
	document.getElementById("suchar").innerHTML = suchary[ktorysuchar];
}
