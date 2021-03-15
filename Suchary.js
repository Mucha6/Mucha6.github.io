const suchary = [
	"– Jak się nazywa lekarz który leczy pandy? <br/> – Pandoktor <br/>",
	"Na lekcji plastyki dzieci rysują sporty zimowe. Podchodzi pani do Jasia i pyta: <br/>– Jasiu, czemu nic nie narysowałeś? <br/>– Nieprawda, narysowałam Małysza. <br/>– A gdzie on jest? <br/>– No poleciał. <br/>",
	"– Dlaczego jajka nie potrafią dochować tajemnicy? <br/>– Bo pękają, gdy robi się gorąco. <br/>",
	"– Tatusiu, czy Ocean Spokojny zawsze jest spokojny? <br/>Ojciec odpowiada: <br/>– Czy nie możesz zapytać o coś mądrzejszego? <br/>– Mogę. Chciałbym wiedzieć, kiedy umarło Morze Martwe. <br/>",
	"Dwie muchy grają w piłkę nożną w filiżance. Po jakimś czasie jedna mówi do drugiej: <br/>– Staraj się, bo za tydzień gramy w pucharze. <br/>",
	"– Gdzie duchy i kościotrupy jadą na wakacje? <br/>– Nad Morze Martwe <br/>",
	"– Jakie są ulubione ryby matematyka? <br/>– Sumy <br/>",
	"– Dzień dobry, dzwonię w sprawie garażu. <br/>– Tutaj baza rakietowa. Źle pan trafił. <br/>– To wy źle trafiliście... <br/>",
	"– Panie doktorze, wszyscy mnie ignorują! <br/>– Następny proszę! <br/>",
	"– Jaki jest największy las na świecie? – pyta pani Jasia na przyrodzie. <br/>– Las Vegas <br/>",
	"Spotykają się dwa jeże. Jeden ma zabandażowaną łapkę. <br/>– Co ci się stało? <br/>– Chciałem się podrapać <br/>",
	"– Dlaczego duchy nie kłamią? <br/>– Bo wiedzą, że możesz je przejrzeć na wylot <br/>",
	"– Co mop zawsze ogląda w walentynki? <br/>– Przeminęło z wiadrem <br/>",
	"– Jaki jest film, którego boją się wszystkie pralki? <br/>– Człowiek z bielizną <br/>",
	"– Co jedna flaga powiedziała do drugiej? <br/>– Nic, tylko sobie pomachały <br/>",
	"– Jaki jest ulubiony film piłkarzy? <br/>– Robokop <br/>",
	"– Jak się czuje ogórek w towarzystwie śmietany? <br/>– Mizernie <br/>",
	"– Dlaczego lody się topią? <br/>– Bo nie umieją pływać <br/>",
	"– Budzę się, a to mój telefon frunie przez pokój. Okazało się, że był włączony tryb samolotowy. <br/>",
	"– Zofia po dwóch tygodniach diety zrzuciła wagę... z ósmego piętra. <br/>",
	"– Mamy twojego syna... <br/>– To strasznie! Czego chcecie? <br/>– Niech pan przyjdzie i go odbierze, zaraz zamykamy przedszkole. <br/>",
	"– A my mamy w domu wszystko! – chwali się koleżankom mała Ala. <br/>– Skąd wiesz? <br/>– Bo jak tata przywiózł delegacji gitarę, to mama powiedziała, że tylko tego brakowało <br/>",
	"– Przychodzi kucharz do lekarza i mówi: <br/>– Panie doktorze, ostatnio zauważyłem, że źle słyszę na jedno ucho. <br/>– A na drugie? <br/>– Kotlet schabowy, frytki i surówka z marchewki. <br/>",
	"– Kupiłam swojej córce kamerkę internetową. Dobra informacja jest taka, że połowa pokoju zawsze jest idealnie posprzątana. <br/>",
	"Idzie Jasiu do Bacy i mówi: <br/>– Powiedzcie: Chrząszcz brzmi w trzcinie. <br/>A baca na to: <br/>– Chrobok burcy w trowie <br/>",
	"– Pana pies szczeka całą noc – mówi rozcwścieczony sąsiad. <br/>– To nic, odeśpi w dzień – odpowiada właściciel psa. <br/>",
	"– Czy wiesz, za co uwielbiam łopaty? <br/>– Wiedzą, że grunt to zdrowie <br/>",
	"Rozmawiają koledzy: <br/>– Powtarzałeś coś przed egzaminem? <br/>– No jasne. <br/>– A co? <br/>– Będzie dobrze, będzie dobrze <br/>",
	"Badania wykazały, że nic tak pozytywnie wpływa na myślenie o sąsiadach, jak wykrycie zaraz po przeprowadzce niezabezpieczonej sieci WiFi. <br/>",
	"– Jasiu, dlaczego wnosisz na paluszkach to wiadro z wodą do sypialni? <br/>– Bo tata prosił, żeby go o piątej po cichutku obudzić. <br/>",
	"– Dzień dobry, do czego służą okulary? <br/>– Do widzenia. <br/>",
	"Jedno oko mówi do drugiego: <br/>– Tak między nami, wydaje mi się, że coś tu węszy <br/>",
	"Rozmawiają dwie pchły: <br/>– Gdzie byłaś na wakacjach? <br/>– Na krecie <br/>",
	"– Dlaczego dorośli pytają dzieci, kim chcą zostać w przyszłości? <br/>– Bo sami wciąż szukają na to pomysłu <br/>",
	"– Dlaczego nie da się zjeść zegarka? <br/>– Bo to zbyt czasochłonne <br/>",
	"Tata pyta Jasia:– Po co Ci w domu łopata i kompas? <br/>– Zamierzam posprzątać w moim pokoju <br/>"
];

const UstawSuchara = (minuta) =>
{
	document.getElementById("suchar").innerHTML = suchary[minuta % suchary.length];
}
