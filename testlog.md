# Testlog

Website *Wise in cijfers*. De tests T1 tot en met T5 zijn uitgevoerd tijdens het bouwen op 17 oktober 2026
(macOS, Google Chrome). De tests T6 tot en met T9 moeten nog worden uitgevoerd en ingevuld.
T10 tot en met T13 zijn uitgevoerd na de verbeterronde op 17 oktober 2026 (Achtergrond-pagina, map `data`,
opmerking in grafiek 2). T14 tot en met T19 zijn uitgevoerd na de nieuwe vormgeving op 17 oktober 2026.
T20 tot en met T24 zijn uitgevoerd na het toevoegen van de animaties (GSAP) op 17 oktober 2026.
T25 tot en met T28 zijn uitgevoerd na het toevoegen van de eigen foto's op 17 oktober 2026.
T29 tot en met T31 zijn uitgevoerd na het toevoegen van het routepatroon op Achtergrond op 17 oktober 2026.

| Nr. | Test | Hoe getest | Verwacht | Resultaat | Status |
|---|---|---|---|---|---|
| T1 | Links en bestanden | Alle `href` en `src` in de vier pagina's gecontroleerd op bestaande bestanden en ankers (`#grafiek-1`, enz.) | Geen kapotte links of ontbrekende bestanden | 44 lokale links en bestanden gecontroleerd, 0 fout | Geslaagd |
| T2 | Lokaal openen zonder server | `index.html` geopend als bestand (`file://`), zonder webserver; doorgeklikt naar alle pagina's | Opmaak, icoon en grafieken laden | Alles laadt; de site gebruikt geen bestanden van internet | Geslaagd |
| T3 | Kopiëren | Hele map gekopieerd naar een andere map met een spatie in de naam (`andere map`) en daar opnieuw T1 en T2 gedaan | Alles blijft werken | 44 links, 0 fout; `cijfers.html` toont opmaak en grafieken | Geslaagd |
| T4 | Andere schermbreedte | Alle vier de pagina's bekeken op 375 px breed (telefoon); gemeten of de pagina breder wordt dan het scherm | Geen horizontaal scrollen, alles leesbaar | Paginabreedte overal 375 px; kaarten en tabellen stapelen onder elkaar | Geslaagd |
| T5 | Grafieken: bronregel | Grafiek 2 op `cijfers.html` bekeken op 1280 px breed | Volledige bronregel zichtbaar | **Fout:** de eerste bronregel liep rechts uit de grafiek en werd afgekapt ("geraadpleegd 15-09-20…") | Fout, zie hieronder |
| T5b | Hertest T5 | Na herstel dezelfde test opnieuw | Volledige bronregel zichtbaar | Bron staat op drie regels en is volledig leesbaar | Geslaagd |
| T6 | Broncijfers | Elk cijfer op de site naast de bron leggen (jaarverslag, kwartaalupdate, Wereldbank) | Alle cijfers kloppen met de bron | *nog invullen* | Open |
| T7 | Begrijpelijkheid: nieuwe gebruiker | Iemand die de site niet kent, beantwoordt zonder hulp de vraag op de startpagina | Kan de twee oplossingen en de reden noemen | *nog invullen* | Open |
| T8 | Medestudent legt grafieken uit | Een medestudent legt grafiek 1 en 2 in eigen woorden uit | Uitleg klopt met de boodschap en de beperkingen | *nog invullen: naam, datum, wat er werd gezegd* | Open |
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
| T9 | Andere browser | Site openen in Safari of Edge met dubbelklik op `index.html` | Zelfde resultaat als in Chrome | *nog invullen* | Open |

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

## Opmerking bij T28 (testmethode)

Een schermafbeelding met "beweging beperken" liet de kop eerst half doorzichtig zien. Een controle van de pagina
liet zien dat het script de animatie wel overslaat. Het testprogramma gebruikte nog een oud browservenster zonder
die instelling; met een nieuw venster was de kop meteen volledig zichtbaar. Geen fout in de site.

## Opmerking bij T4

Een eerste schermafbeelding met een testprogramma liet de pagina's op telefoonbreedte afgekapt zien. Bij
controle in een echte telefoonweergave van 375 px bleek de pagina niet breder dan het scherm. Het lag dus aan het
testprogramma en niet aan de site.
