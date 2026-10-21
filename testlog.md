# Testlog

Website *Wise in cijfers*. De tests T1 tot en met T5 zijn uitgevoerd tijdens het bouwen op 17 oktober 2026
(macOS, Google Chrome). De tests T6 tot en met T9 moeten nog worden uitgevoerd en ingevuld.
T10 tot en met T13 zijn uitgevoerd na de verbeterronde op 17 oktober 2026 (Achtergrond-pagina, map `data`,
opmerking in grafiek 2). T14 tot en met T19 zijn uitgevoerd na de nieuwe vormgeving op 17 oktober 2026.
T20 tot en met T24 zijn uitgevoerd na het toevoegen van de animaties (GSAP) op 17 oktober 2026.
T25 tot en met T28 zijn uitgevoerd na het toevoegen van de eigen foto's op 17 oktober 2026.
T29 tot en met T31 zijn uitgevoerd na het toevoegen van het routepatroon op Achtergrond op 17 oktober 2026.
T32 tot en met T34 zijn uitgevoerd nadat het patroon een echte routekaart werd op 17 oktober 2026.

| Nr. | Test | Hoe getest | Verwacht | Resultaat | Status |
|---|---|---|---|---|---|
| T1 | Links en bestanden | Alle `href` en `src` in de vier pagina's gecontroleerd op bestaande bestanden en ankers (`#grafiek-1`, enz.) | Geen kapotte links of ontbrekende bestanden | 44 lokale links en bestanden gecontroleerd, 0 fout | Geslaagd |
| T2 | Lokaal openen zonder server | `index.html` geopend als bestand (`file://`), zonder webserver; doorgeklikt naar alle pagina's | Opmaak, icoon en grafieken laden | Alles laadt; de site gebruikt geen bestanden van internet | Geslaagd |
| T3 | Kopiëren | Hele map gekopieerd naar een andere map met een spatie in de naam (`andere map`) en daar opnieuw T1 en T2 gedaan | Alles blijft werken | 44 links, 0 fout; `cijfers.html` toont opmaak en grafieken | Geslaagd |
| T4 | Andere schermbreedte | Alle vier de pagina's bekeken op 375 px breed (telefoon); gemeten of de pagina breder wordt dan het scherm | Geen horizontaal scrollen, alles leesbaar | Paginabreedte overal 375 px; kaarten en tabellen stapelen onder elkaar | Geslaagd |
| T5 | Grafieken: bronregel | Grafiek 2 op `cijfers.html` bekeken op 1280 px breed | Volledige bronregel zichtbaar | **Fout:** de eerste bronregel liep rechts uit de grafiek en werd afgekapt ("geraadpleegd 15-09-20…") | Fout, zie hieronder |
| T5b | Hertest T5 | Na herstel dezelfde test opnieuw | Volledige bronregel zichtbaar | Bron staat op drie regels en is volledig leesbaar | Geslaagd |
| T6 | Broncijfers | Op 21-10-2026 elk cijfer op de site naast de bron gelegd: Wise FY26 Results (zelfde jaarcijfers als het jaarverslag, met de resultatenrekening en noot 3), Wise Q1 FY27 trading update, de homepage van de Wereldbank en het rapport *Remittance Prices Worldwide, Issue 54*; eigen berekeningen nagerekend | Alle cijfers kloppen met de bron | Alle cijfers van Wise kloppen (zie de lijst hieronder). Drie formuleringen waren onduidelijk of zonder bron en zijn aangepast. Cijfers van de Wereldbank kloppen ook: 6,36%, 14,99% (banken), 3,54% (digitale aanbieders) en het doel van 3% | Geslaagd |
| T7 | Begrijpelijkheid: nieuwe gebruiker | Een familielid dat de site niet kende, heeft de site zonder hulp gelezen | Kan de twee oplossingen en de reden noemen, en begrijpt hoe ze werken | **Fout:** vond het "een interessant verhaal", maar begreep niet hoe stablecoins werken en hoe advies 1 dan zou werken | Fout, zie hieronder |
| T7b | Hertest T7 | Hetzelfde familielid leest advies 1 opnieuw, na herstel | Kan in eigen woorden uitleggen hoe het geld via een stablecoin bij de ontvanger komt | Legt het zelf uit: een stablecoin is gekoppeld aan een munt ("1 Scooby-dollar is 1 dollar") en die kun je versturen zonder dat er banken nodig zijn. Het risico en de keuze tussen twee routes noemde ze niet; de kern begreep ze wel | Geslaagd |
| T35 | Opmaak na nieuwe app-schets | `advies.html` bekeken na het vervangen van de app-schets | Label "Voorbeeld met verzonnen cijfers" is opgemaakt | **Fout:** het label had geen opmaak meer | Fout, zie hieronder |
| T35b | Hertest T35 | Zelfde pagina opnieuw bekeken; stijlblad gecontroleerd op losse regels; breedte op 375 px gemeten | Label opgemaakt; geen losse regels; geen horizontaal scrollen | Label weer opgemaakt; stijlblad klopt; alle pagina's 375 px, stappen onder elkaar, app-schets 343 px breed | Geslaagd |
| T8 | Medestudent legt grafieken uit | Medestudent Mijndert IJzerdoorn heeft in de les beide grafieken op `cijfers.html` uitgelegd, zonder hulp | Uitleg klopt met de boodschap en de beperkingen | Beide grafieken waren duidelijk. **Twee punten onduidelijk:** grafiek 2: "Banken" zegt niet om welke banken het gaat (welk werelddeel?); grafiek 1: wat betekent "1.257,0", 1.257 miljoen? | Fout, zie hieronder |
| T8b | Hertest T8 | Mijndert IJzerdoorn kijkt opnieuw naar beide grafieken, na herstel | Weet dat het om wereldwijde gemiddelden en om miljoenen US-dollar gaat | Akkoord: beide punten zijn nu duidelijk | Geslaagd |
| T10 | Links na hernoemen | `bronnen.html` hernoemd naar `achtergrond.html`; alle links en ankers opnieuw gecontroleerd, ook naar `data/` en `#aannames` | Geen kapotte links | 60 lokale links en bestanden gecontroleerd, 0 fout; geen verwijzing meer naar `bronnen.html` | Geslaagd |
| T11 | Grafiek 2: nieuwe opmerking | Opmerking over de Wise-staaf toegevoegd in `kosten-overboeking.svg` en de grafiek bekeken | Opmerking volledig zichtbaar | **Fout:** de opmerking was te lang en liep rechts uit de grafiek ("…metingen voor USD 2") | Fout, zie hieronder |
| T11b | Hertest T11 | Na herstel dezelfde grafiek opnieuw bekeken | Opmerking volledig zichtbaar | Opmerking past op één regel binnen de grafiek | Geslaagd |
| T12 | Kopiëren en schermbreedte na verbeterronde | Map opnieuw gekopieerd naar `andere map` en T1 herhaald; alle vier de pagina's op 375 px breed gemeten | Alles werkt, geen horizontaal scrollen | 60 links, 0 fout in de kopie; paginabreedte overal 375 px; begrippenlijst stapelt onder elkaar | Geslaagd |
| T13 | CSV-bestanden | Beide bestanden in `data/` gecontroleerd op kolommen en vergeleken met de tabellen op `cijfers.html` | Zelfde cijfers, elke regel 8 kolommen met bron | Beide bestanden 5 regels, 8 kolommen; cijfers gelijk aan de tabellen | Geslaagd |
| T14 | Drie schermbreedtes | Alle vier de pagina's bekeken op 1440, 768 en 375 px breed | Alles leesbaar, geen horizontaal scrollen | 1440 en 768: goed. 375: **fout** op `achtergrond.html`, zie T16 | Fout, zie T16 |
| T15 | Lettertypes zonder internet | Pagina's geopend als bestand (`file://`) en in een gekopieerde map; gecontroleerd welke lettertypes zijn geladen | Fraunces en IBM Plex Sans laden uit `fonts/` | Fraunces en IBM Plex Sans 400/600 geladen; niets van internet | Geslaagd |
| T16 | Achtergrond op 375 px | Breedte van `achtergrond.html` gemeten op 375 px | Pagina is 375 px breed | **Fout:** pagina was 390 px breed, dus horizontaal scrollen | Fout, zie hieronder |
| T16b | Hertest T16 | Na herstel dezelfde meting | Pagina is 375 px breed | 375 px; ook de andere drie pagina's 375 px | Geslaagd |
| T17 | Contrast | Contrast van elke combinatie van tekst- en achtergrondkleur berekend volgens WCAG | Minimaal 4,5:1 (AA) | Laagste waarde 6,0:1 (grijze tekst op bijschrift), hoogste 15,8:1 | Geslaagd |
| T18 | Toetsenbord | Met Tab door de pagina gegaan | Zichtbare focusrand op elke link en knop | Petrolkleurige rand zichtbaar, ook op de donkere band en in de voet | Geslaagd |
| T19 | Links en kopie na nieuwe vormgeving | Alle links en bestanden opnieuw gecontroleerd, ook in een kopie in `andere map` | Geen kapotte links | 77 lokale links en bestanden, 0 fout, in beide mappen | Geslaagd |
| T20 | Animaties: werking | Elke pagina geladen en stap voor stap naar beneden gescrold | Kop komt in beeld, cijfers tellen op, blokken schuiven in beeld; aan het eind is alles zichtbaar | Alle vier de pagina's: 0 onzichtbare elementen na scrollen; geen fouten in de console | Geslaagd |
| T21 | Animaties: eindwaarden | Na het optellen de tekst van elk kerncijfer vergeleken met de oorspronkelijke waarde | Precies dezelfde cijfers als zonder animatie | Start: 18,9 · 2,5 · 0,50 · 77; Advies: 513,6 · 5 · 60 · 132 · 25 | Geslaagd |
| T22 | Beweging beperken | Pagina geopend met de instelling "beweging beperken" | Geen animatie, alles meteen zichtbaar | Kop, cijfers en blokken direct zichtbaar met de eindwaarden | Geslaagd |
| T23 | Zonder JavaScript | Zelfde pagina geladen zonder scripts | Alles meteen zichtbaar | 0 verborgen elementen | Geslaagd |
| T24 | Offline en telefoon met animaties | Links en bestanden gecontroleerd (ook `js/`), en de breedte op 375 px gemeten | Geen kapotte links, geen scripts van internet, geen horizontaal scrollen | 89 lokale links en bestanden, 0 fout; alle scripts lokaal; alle pagina's 375 px | Geslaagd |
| T25 | Foto's: geen persoonlijke gegevens | Metadata van de originele foto's bekeken, en de WebP-bestanden doorzocht op EXIF, "GPS" en "iPhone" | Geen locatie of toestel in de bestanden op de site | Originelen: GPS-locatie en iPhone-model aanwezig. Websitebestanden: geen EXIF, geen GPS, geen toesteltype | Geslaagd |
| T26 | Foto's: contrast | Slechtste geval berekend: tekst boven een witte pixel van de foto, op telefoon en desktop | Minimaal 4,5:1 (AA) | Laagste waarde 5,2:1 (lichte tekst op telefoon); vraag op Start op eigen paneel 6,1:1 of hoger | Geslaagd |
| T27 | Foto's: laden en formaat | Alle zes bestanden opgevraagd; op 375 px gekeken welk formaat de browser kiest | Alles laadt; telefoon krijgt het kleine formaat | Alle bestanden laden (548 KB samen); op 375 px wordt de versie van 800 px gekozen | Geslaagd |
| T28 | Foto's: beweging en breedte | Op 375 px de breedte gemeten en gekeken of de foto inzoomt en meescrolt; ook met "beweging beperken" | Geen horizontaal scrollen; beweging alleen zonder "beweging beperken" | Alle pagina's 375 px; foto zoomt van 1,08 naar 1 en schuift mee bij scrollen; met "beweging beperken" staat hij stil | Geslaagd |
| T29 | Routepatroon: animatie | `achtergrond.html` geladen en de animatie gevolgd; daarna naar beneden en terug gescrold | Haltes verschijnen, alle routes tekenen zich, stroom loopt; stroom pauzeert buiten beeld | 10/10 haltes en 10/10 routes getekend na 4,4 s; stroom beweegt, staat stil buiten beeld en loopt verder terug in beeld; geen fouten | Geslaagd |
| T30 | Routepatroon: contrast | Slechtste geval berekend: tekst boven een witte halte, op telefoon | Minimaal 4,5:1 (AA) | **Eerst 4,61:1**: net genoeg, weinig marge. Patroon op telefoon zwakker gemaakt (20% naar 14%): nu 5,51:1 | Geslaagd na aanpassing |
| T31 | Routepatroon: beweging beperken en breedte | Pagina met "beweging beperken" bekeken; breedte op 375 px gemeten | Patroon direct helemaal getekend, niets beweegt; geen horizontaal scrollen | Patroon volledig zichtbaar en stil; alle pagina's 375 px | Geslaagd |
| T32 | Routekaart: begrijpelijkheid | Zelf naar het eerste patroon gekeken: wat stelt het voor? | De bezoeker ziet geld tussen landen | **Fout:** het abstracte patroon (punten en lijnen zonder namen) liet niet zien wat het moest voorstellen | Fout, zie hieronder |
| T32b | Hertest T32 | Kop van Achtergrond bekeken na de nieuwe routekaart | Echte steden met namen, directe routes en een extra route, met uitleg | Londen, Amsterdam, Tokio (Zengin), São Paulo (PIX), Singapore en "?" met legenda; de betekenis is zonder uitleg te zien | Geslaagd |
| T33 | Routekaart: namen leesbaar | Alle namen op de kaart bekeken op 1440 px | Geen lijn door een naam | **Fout:** "Amsterdam" werd doorkruist door de lijn naar Tokio, en na verplaatsen door de lijn naar Singapore | Fout, zie hieronder |
| T33b | Hertest T33 | Zelfde weergave na herstel | Alle namen vrij leesbaar | Lijnen lopen achter de namen langs; alle namen leesbaar | Geslaagd |
| T34 | Routekaart: animatie en breedte | Animatie gevolgd; breedte op 375 px gemeten; console bekeken | Steden, namen, routes, extra route en stroom verschijnen op volgorde; geen horizontaal scrollen; geen fouten | 6/6 steden, 4/4 routes getekend, extra route en stroom zichtbaar en in beweging na 4,7 s; alle pagina's 375 px; geen fouten | Geslaagd |
| T36 | App-schets in de browser van de gebruiker | `advies.html` geopend in de eigen browser na de nieuwe app-schets | App-schets zichtbaar met de nieuwe opmaak | **Fout:** de telefoon was helemaal zwart en het label had geen rand: de browser gebruikte nog een oude, bewaarde versie van `style.css` bij de nieuwe HTML | Fout, zie hieronder |
| T36b | Hertest T36 | Na herstel dezelfde pagina geladen, via de server en met een dubbelklik op het bestand | Nieuwe opmaak zonder handmatig verversen | Pagina laadt `style.css?v=20261021`; app-schets en label goed zichtbaar, ook als bestand (`file://`); 94 links, 0 fout | Geslaagd |
| T9 | Andere browser | Op 21-10-2026 `index.html` geopend in Safari 27.0.1 als bestand (`file://`), zonder server, en alle vier de pagina's doorgeklikt | Zelfde resultaat als in Chrome | Alles werkt: foto's, optellende cijfers, beide grafieken en de tabellen, de stappen en de app-schets bij het advies, de routekaart en de lettertypes | Geslaagd |

## Gevonden fouten T7 en T35

- **Fout (T7):** een nieuwe lezer begreep niet hoe stablecoins werken en hoe advies 1 in de praktijk zou gaan. De site
  zei wel *wat* het advies is, maar niet *hoe* het werkt.
- **Herstel:** bij advies 1 staat nu "Zo werkt het, in vier stappen": wat een stablecoin is (met een vergelijking met
  een pakketje en een koerier), de vier stappen van euro's tot lokaal geld bij de ontvanger, en hoe Wise per overboeking
  kiest tussen de twee routes. De uitleg bij "stablecoin" op Achtergrond noemt nu voorbeelden (USDC, EURC) en verwijst
  naar deze stappen. "Pijler 1 en 2" heten nu "Advies 1 en 2", omdat dat duidelijker is voor de lezer.
- **Hertest (T7b):** nog doen: hetzelfde familielid advies 1 opnieuw laten lezen.
- **Fout (T35):** bij het vervangen van de app-schets werden de oude stijlregels verwijderd, maar van één regel bleef de
  inhoud achter zonder kop. De browser sloeg daardoor de volgende regel over: de opmaak van het label "Voorbeeld met
  verzonnen cijfers".
- **Herstel:** de losse regels verwijderd en het hele stijlblad gecontroleerd op losse declaraties en accolades.
- **Hertest (T35b):** het label is weer opgemaakt.
- **Fout (T36):** in de browser van de gebruiker was de app-schets een zwart vlak. De browser had de nieuwe HTML geladen,
  maar een oude, bewaarde versie van het stijlblad gebruikt. Zonder de nieuwe stijlen stond donkere tekst op de zwarte
  telefoon.
- **Herstel:** de links naar `css/style.css` en `js/animaties.js` hebben nu een versienummer (`?v=20261021`). Bij een
  nieuw nummer haalt de browser altijd de nieuwste versie op, ook bij een dubbelklik op het bestand.
- **Hertest (T36b):** de nieuwe opmaak laadt meteen, zonder handmatig verversen.
- **Let op bij testen:** de browser kan een oude versie van het stijlblad bewaren. Zie je de oude opmaak, druk dan op
  Cmd+Shift+R (Mac) of Ctrl+F5 (Windows) om de pagina zonder cache te laden.

## Gevonden fouten T8

- **Fout (T8), grafiek 2:** bij "Banken" stond niet dat het een wereldwijd gemiddelde is. Een lezer vroeg zich af om
  banken in welk werelddeel het ging.
- **Herstel:** de staven heten nu "Banken, wereldwijd", "Alle aanbieders, wereldwijd" en "Digitale aanbieders,
  wereldwijd", met eronder "gemiddelde, USD 200, Q3 2025". De ondertitel, de tabel, de uitleg, de alt-tekst en het
  CSV-bestand zeggen hetzelfde. Bij de beperkingen staat nu dat het gaat om 367 routes van 48 naar 105 landen.
- **Fout (T8), grafiek 1:** bij de getallen stond geen eenheid ("1.257,0"); die stond alleen in de ondertitel.
- **Herstel:** elk getal heeft nu zijn eenheid ("USD 1.257,0 mln (50%)") en onder de as staat "miljoen US-dollar".
  Grafiek 2 kreeg onder de as "% van het verstuurde bedrag".
- **Hertest (T8b):** dezelfde medestudent keek opnieuw en vond beide punten nu duidelijk.
- De grafieken hebben nu ook een versienummer (`?v=20261021c`), zodat de browser niet de oude versie laat zien.

## Uitwerking T6 (broncijfers)

Gecontroleerd op 21 oktober 2026. Bronnen: *Wise FY26 Results* (26 juni 2026, met de resultatenrekening en noot 3
"Transaction revenue by nature"), *Wise Q1 FY27 trading update* (17 juli 2026) en de homepage van Remittance Prices
Worldwide van de Wereldbank, en het rapport *Remittance Prices Worldwide Quarterly, Issue 54* (september 2025).

| Cijfer op de site | Waarde in de bron | Klopt? |
|---|---|---|
| Omzet USD 2.502,8 mln | Net revenue FY26: 2,502.8 | Ja |
| Overboekingen 1.257,0 · kaart 391,6 · overig 245,0 | Noot 3: Cross-border 1,257.0 · Card 391.6 · Other 245.0 | Ja |
| Rente na uitkering 609,2 (24%) | Interest income 806.1 min interest expense 196.9 = 609.2 | Ja |
| 18,9 mln actieve klanten, +21% | Active customers 18.9 (FY25: 15.6), 21% | Ja |
| Volume USD 243,5 mld, +31% | Cross-border volume 243.5 (FY25: 185.2), 31% | Ja |
| Transactiekosten USD 513,6 mln, ongeveer een vijfde van de omzet | Transaction expense 513.6 = 20,5% van de omzet | Ja |
| 11,3 mln actief in het laatste kwartaal (ongeveer 60%) | Active customers Q4 FY26: 11,290 duizend = 59,7% van 18,9 mln | Ja |
| Vergoeding 0,50% in Q1 FY27; 0,58% in boekjaar 2025 | Take rate Q1 FY27 0.50%; FY25 0.58% | Ja |
| 77% van de overboekingen binnen 20 seconden | Q1 FY27 "Instant transfers 77%"; FY26 Results noemt instant "under 20 seconds" | Ja |
| Tegoeden +40% | Customer holdings 27.8 naar 39.0 (+40%) | Ja |
| Bruto rente-inkomsten +6% | Interest income 758.3 naar 806.1 (+6,3%) | Ja |
| Directe aansluitingen in Japan (Zengin) en Brazilië (PIX) | "two new direct connections in Brazil and Japan" | Ja |
| USD 132 per klant, 189.000 klanten, USD 25 mln, USD 5 mln | Nagerekend: 2.502,8 / 18,9 = 132,4; 1% van 18,9 mln; 189.000 × 132,4; 1% van 513,6 | Ja |
| Wereldgemiddelde 6,36% (Q3 2025) | Homepage Wereldbank: "an average of 6.36 percent" | Ja |
| Banken 14,99% (Q3 2025) | Issue 54: "Banks remain the most expensive type of service provider, with an average cost of 14.99 percent" | Ja |
| Volledig digitale aanbieders 3,54% (Q3 2025) | Issue 54: "The Digital-only MTO index experienced a decrease to 3.54 percent from 3.55 percent in Q1 2025" | Ja |
| Doel van 3% | Issue 54: "the G20 commitment to reduce the global average to 3 percent" | Ja |

**Aangepast na de controle:**
- **Start:** "(was 0,58%)" werd "(boekjaar 2025: 0,58%)". De 0,58% is van twee jaar eerder; vlak ervoor was het 0,52%.
- **De cijfers:** "de rente-inkomsten met maar 6%" werd "de **bruto** rente-inkomsten". De grafiek toont de rente ná
  uitkering, en die groeide met 10%; de 6% gaat over de bruto rente.
- **Achtergrond:** de uitleg van "instant betalen" kwam van de ECB, maar die stond niet bij de bronnen. De ECB is
  toegevoegd onder Bronnen.

**Opmerking over de bron:** de jaarcijfers zijn gecontroleerd in *Wise FY26 Results*, die dezelfde resultatenrekening
bevat als het jaarverslag. Het jaarverslag zelf (pdf) kon niet automatisch worden geopend; het is verstandig om daar
zelf nog een paar cijfers in na te kijken.

## Gevonden fout, herstel en hertest

- **Fout (T5):** in `grafieken/kosten-overboeking.svg` stonden de twee bronnen op één lange regel. Die regel
  was breder dan de grafiek (760 px), waardoor het einde van de raadpleegdatum wegviel. De bron was dus niet
  volledig te lezen, terwijl de opdracht een volledige bronvermelding eist.
- **Herstel:** de bronvermelding verdeeld over drie regels en de grafiek 20 px hoger gemaakt (400 naar 420 px).
  In `cijfers.html` is de hoogte van de afbeelding ook aangepast naar 420.
- **Hertest (T5b):** dezelfde pagina op dezelfde breedte opnieuw bekeken. De bronvermelding is nu volledig zichtbaar.

- **Fout (T11):** de nieuwe opmerking in grafiek 2 was langer dan de breedte van de grafiek, dezelfde soort fout als
  bij T5. Het einde van de zin viel weg.
- **Herstel:** de zin ingekort tot "Let op: Wise is een gemiddelde over alle bedragen, niet direct vergelijkbaar met de
  USD 200-metingen."
- **Hertest (T11b):** grafiek opnieuw bekeken; de opmerking is volledig zichtbaar.
- **Leerpunt:** tekst in een SVG-grafiek loopt niet vanzelf door naar een volgende regel, dus elke nieuwe tekst in een
  grafiek moet je zelf nakijken.

- **Fout (T16):** op `achtergrond.html` was de pagina op een telefoon 390 px breed in plaats van 375 px. De
  inhoudsopgave en de inhoud staan in een raster met één kolom van `1fr`. Een kolom van `1fr` wordt nooit smaller
  dan de breedste inhoud, en de lange bron-URL's en de tabel met perioden waren breder dan het scherm.
- **Herstel:** de kolom is nu `minmax(0, 1fr)` en de onderdelen in het raster hebben `min-width: 0`, zodat de
  tabel binnen zijn eigen scrollvak blijft en de URL's afbreken.
- **Hertest (T16b):** dezelfde meting op 375 px: de pagina is 375 px breed.

## Opmerking bij T14 (grafieken in een verborgen venster)

In het testvenster leken de grafieken op `cijfers.html` eerst niet te laden. Ze hadden `loading="lazy"` en het
venster stond op de achtergrond, waardoor de browser ze nooit "in beeld" zag. In een zichtbaar venster laden ze wel.
Voor de zekerheid laadt grafiek 1, die direct onder de kop staat, nu meteen; alleen grafiek 2 laadt pas als je ernaartoe scrolt.

## Opmerking bij T20 (testmethode en twee verbeteringen)

De eerste test met een testprogramma dat de tijd versnelt, liet de blokken na afloop nog doorzichtig zien. Dat lag
aan de testmethode: GSAP vangt grote sprongen in tijd op ("lag smoothing") en het testprogramma tekent bijna geen
beeldjes. Daarna is getest in een gewone browser, beeldje voor beeldje. Twee verbeteringen zijn wel doorgevoerd:

- **Lag smoothing uit:** de animaties zijn nu altijd op tijd klaar, ook als een computer even hapert.
- **Alleen opacity:** eerst werd ook `visibility: hidden` gebruikt. Dan is tekst die nog niet in beeld was niet te
  vinden met Ctrl+F en niet te lezen voor schermlezers. Nu wordt alleen de doorzichtigheid veranderd.

- **Fout (T32):** het eerste routepatroon was abstract: punten en lijnen zonder namen. Het moest "geld tussen landen"
  voorstellen, maar dat was niet te zien.
- **Herstel:** een echte routekaart: steden op hun echte plek (lengte- en breedtegraad), met namen, Zengin en PIX uit
  het rapport, een gestreepte extra route (pijler 1) en een legenda.
- **Hertest (T32b):** de betekenis is nu zonder uitleg te zien.
- **Fout (T33):** de naam "Amsterdam" werd doorkruist door een route.
- **Herstel:** elke naam heeft een rand in de achtergrondkleur (een "halo", zoals op echte kaarten), zodat de lijnen
  achter de namen langs lopen.
- **Hertest (T33b):** alle namen zijn vrij leesbaar.

## Opmerking bij T28 (testmethode)

Een schermafbeelding met "beweging beperken" liet de kop eerst half doorzichtig zien. Een controle van de pagina
liet zien dat het script de animatie wel overslaat. Het testprogramma gebruikte nog een oud browservenster zonder
die instelling; met een nieuw venster was de kop meteen volledig zichtbaar. Geen fout in de site.

## Opmerking bij T4

Een eerste schermafbeelding met een testprogramma liet de pagina's op telefoonbreedte afgekapt zien. Bij
controle in een echte telefoonweergave van 375 px bleek de pagina niet breder dan het scherm. Het lag dus aan het
testprogramma en niet aan de site.
