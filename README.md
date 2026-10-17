# Wise in cijfers

Lokale website bij het adviesrapport *Money without borders, maar met welke digitale strategie?*
(L. Bonora, Business IT & Management, Hogeschool Rotterdam, BIMGST05R1, 2026-2027).

## Doelgroep

Het management van Wise Group plc, dezelfde lezers als het adviesrapport. De lezer kent de markt
voor internationale betalingen, maar heeft geen tijd voor het hele rapport. Begrippen als neobank en
stablecoin worden bij het eerste gebruik kort uitgelegd en staan in de begrippenlijst op `achtergrond.html`.

## Doel en boodschap

De site beantwoordt één vraag met openbare cijfers:

> Met welke twee digitale oplossingen kan Wise in 2027-2029 zijn actieve klanten behouden, nu anderen
> net zo snel en goedkoop worden?

Boodschap: de omzet van Wise hangt af van klanten die blijven en geld laten staan, en het prijsvoordeel
wordt kleiner. Daarom adviseert het rapport twee oplossingen: stablecoins als extra route in het netwerk,
en een persoonlijk overzicht in de app.

## Cijferbronnen van Wise

1. Wise Group plc (2026a), *Annual report and accounts FY2026*: grafiek 1 en de kerncijfers.
2. Wise Group plc (2026b), *Wise Q1 FY27 trading update*: grafiek 2 (samen met World Bank, 2025).

Alle bronnen met URL en raadpleegdatum staan op `achtergrond.html`. De cijfers achter de grafieken staan
met bron per regel in de map `data/`.

## De site openen

1. Kopieer of pak de hele map `wise-website` uit.
2. Dubbelklik op `index.html`. De site opent in de browser.

Er is geen internet en geen server nodig. Alle paden zijn relatief, dus de map werkt ook na kopiëren naar
een andere plek of computer. Alleen de links naar de externe bronnen hebben internet nodig.

## Mappenstructuur

```
wise-website/
├── index.html                  Start: de vraag, vier kerncijfers en het verhaal in drie stappen
├── cijfers.html                De cijfers: grafiek 1 en 2 met uitleg, beperkingen en tabel
├── advies.html                 Het advies: de twee pijlers en een schets van het overzicht in de app
├── achtergrond.html            Achtergrond: begrippen, perioden, beperkingen en bronnen
├── css/
│   └── style.css               Opmaak van alle pagina's, met design tokens bovenaan
├── fonts/                      Lettertypes Fraunces en IBM Plex Sans (lokaal, met OFL-licentie)
├── grafieken/
│   ├── omzet-per-inkomstenstroom.svg   Grafiek 1
│   └── kosten-overboeking.svg          Grafiek 2
├── afbeeldingen/
│   ├── icoon.svg               Eigen icoon voor de kop en het tabblad
│   ├── og-image.png            Voorbeeldafbeelding voor links (Open Graph, 1200 x 630)
│   └── iconen/                 Lucide-iconen (ISC-licentie), inline gebruikt in de pagina's
├── data/
│   ├── grafiek-1-omzet-per-inkomstenstroom.csv   Cijfers grafiek 1, met bron per regel
│   └── grafiek-2-kosten-overboeking.csv          Cijfers grafiek 2, met bron per regel
├── README.md                   Dit bestand
├── testlog.md                  Uitgevoerde tests, gevonden fout en hertest
└── ai-log.md                   Logmomenten van het gebruik van AI bij het bouwen
```

## Vormgeving

Alle kleuren, maten en afstanden staan als variabelen (design tokens) bovenaan `css/style.css`.

- **Kleuren:** een warme neutrale schaal (papier, wit, lijnen, grijze tekst, zwarte tekst), één accentkleur
  (donker petrol, `#1f5f5b`) en een waarschuwingskleur alleen voor de beperkingen. Bewust niet het groen van Wise.
- **Lettertypes:** Fraunces voor koppen, IBM Plex Sans voor tekst. Beide staan lokaal in `fonts/`, zodat de site
  ook zonder internet in de juiste letter verschijnt.
- **Maten:** tekst 14 / 16 / 20 / 24 / 32 / 48 px; afstanden 4 tot 96 px; hoeken 6 px (knoppen) en 12 px (kaarten);
  geen schaduwen.
- **Toegankelijk:** alle tekstkleuren halen WCAG AA, elke link en knop heeft een zichtbare focusrand, er is een
  link "Naar de inhoud" voor toetsenbordgebruikers, en animaties staan uit bij "beweging beperken".

## Opmerkingen

- De CSV-bestanden gebruiken een puntkomma en een decimale komma, zodat ze goed openen in een Nederlandse Excel.
- De grafieken zijn losse SVG-bestanden. Ze zijn scherp op elk scherm en hebben geen JavaScript nodig. De tekst in
  de grafieken gebruikt IBM Plex Sans als die op de computer staat, anders de systeemletter: een SVG die als
  afbeelding wordt geladen kan de lettertypes van de site niet gebruiken.
- De Open Graph-tags werken pas als de site ooit online staat; lokaal hebben ze geen effect.
- Onder elke grafiek staan titel, eenheid, periode en bron, een uitleg, de beperkingen en de cijfers als tabel.
- Het overzicht in de app op `advies.html` is een schets met verzonnen cijfers en geen echt ontwerp van Wise.
- Dit is geen website van Wise. Het icoon is eigen werk; er is geen logo van Wise gebruikt.
