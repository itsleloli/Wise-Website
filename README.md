# Wise in cijfers

Lokale website bij het adviesrapport *Money without borders, maar met welke digitale strategie?*
(L. Bonora, Business IT & Management, Hogeschool Rotterdam, BIMGST05R1, 2026-2027).

## Doelgroep

Het management van Wise Group plc, dezelfde lezers als het adviesrapport. De lezer kent de markt
voor internationale betalingen, maar heeft geen tijd voor het hele rapport. Begrippen als neobank en
stablecoin worden kort uitgelegd.

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

Alle bronnen met URL en raadpleegdatum staan op `bronnen.html`.

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
├── bronnen.html                Alle bronnen met URL en raadpleegdatum
├── css/
│   └── style.css               Opmaak van alle pagina's (alleen systeemlettertypes)
├── grafieken/
│   ├── omzet-per-inkomstenstroom.svg   Grafiek 1
│   └── kosten-overboeking.svg          Grafiek 2
├── afbeeldingen/
│   └── icoon.svg               Eigen icoon voor de kop en het tabblad
├── README.md                   Dit bestand
├── testlog.md                  Uitgevoerde tests, gevonden fout en hertest
└── ai-log.md                   Logmomenten van het gebruik van AI bij het bouwen
```

## Opmerkingen

- De grafieken zijn losse SVG-bestanden. Ze zijn scherp op elk scherm en hebben geen JavaScript nodig.
- Onder elke grafiek staan titel, eenheid, periode en bron, een uitleg, de beperkingen en de cijfers als tabel.
- Het overzicht in de app op `advies.html` is een schets met verzonnen cijfers en geen echt ontwerp van Wise.
- Dit is geen website van Wise. Het icoon is eigen werk; er is geen logo van Wise gebruikt.
