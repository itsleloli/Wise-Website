# AI-log website

Gebruikte AI: Claude (Anthropic). Er zijn geen persoonlijke of vertrouwelijke gegevens ingevoerd, alleen het
eigen adviesrapport (openbare cijfers) en de opdrachtomschrijving.

De opdracht vraagt minimaal **5 eigen logmomenten**, verspreid over het bouwen. Logmoment 1 is de eerste
bouwstap. De kolommen *Eigen controle*, *Keuze* en *Leerpunt* vul je zelf in, want die gaan over wat jij
hebt gecontroleerd en besloten.

| Nr. | Datum | Prompt (samengevat) | Voorstel van AI | Eigen controle | Keuze (houden / aanpassen / afwijzen) | Leerpunt |
|---|---|---|---|---|---|---|
| 1 | 17-10-2026 | Adviesrapport (pdf) en de opdracht voor de website gegeven: "We need to make a website for it." | Vier pagina's (start, cijfers, advies, bronnen); doelgroep management van Wise; twee grafieken als losse SVG-bestanden (omzet per inkomstenstroom, kosten van overmaken); een schets van pijler 2; README, testlog en deze AI-log. Ook zelf getest: links, openen zonder server, kopiëren, 375 px, en een afgekapte bronregel in grafiek 2 gevonden en hersteld. | *zelf invullen* | *zelf invullen* | *zelf invullen* |
| 2 | 17-10-2026 | Dia's van de opdracht gedeeld ("Een website voor jouw bezoeker", "Een complete map die lokaal werkt", "Twee grafieken met controleerbare uitleg") en gevraagd de site daarop te verbeteren. | Site vergeleken met de dia's: een Achtergrond-pagina met begrippen, perioden en beperkingen (in plaats van alleen Bronnen), uitleg van vaktermen bij het eerste gebruik, een map `data/` met de cijfers per grafiek als CSV met bron, en een opmerking in grafiek 2 dat de Wise-staaf een ander soort meting is. Daarbij een eigen fout gevonden en hersteld (opmerking liep uit de grafiek, T11). | *zelf invullen* | *zelf invullen* | *zelf invullen* |
| 3 | 17-10-2026 | Gevraagd om de vormgeving persoonlijker en minder "AI-achtig" te maken, met een lijst met eisen (design tokens, twee lettertypes, typeschaal, knoppen, toegankelijkheid, Open Graph). Daarna: "let's still go for a more nicely stylized website". | Eerst de tokens voorgesteld (warme neutrale kleuren, één petrolkleurig accent, Fraunces en IBM Plex Sans). Daarbij gezegd waar de eisen botsen met de opdracht: Google Fonts en een icoonbibliotheek van internet werken niet zonder internet, dus lokaal opgeslagen. Nieuwe opmaak met gekleurde kopband, grote kerncijfers, genummerde stappen en een inhoudsopgave op Achtergrond. Bij het testen een fout gevonden en hersteld (Achtergrond 390 px breed op een telefoon, T16). | *zelf invullen* | *zelf invullen* | *zelf invullen* |
| 4 | 17-10-2026 | Gevraagd om Tailwind, DaisyUI, Lucide, AutoAnimate en GSAP toe te voegen. | Lucide zat er al in. Tailwind en DaisyUI afgeraden: alle pagina's zouden opnieuw moeten, het eigen ontwerp zou vervangen worden door een standaard look, en zonder internet is een bouwstap of een groot script nodig. AutoAnimate afgeraden omdat er niets op de site verandert na het laden. Alleen GSAP voorgesteld, lokaal opgeslagen, voor drie rustige effecten met "beweging beperken" als uitzondering. Bij het testen twee verbeteringen gevonden (lag smoothing uit, alleen opacity), zie T20. | *zelf invullen* | *zelf invullen* | *zelf invullen* |
| 5 | | | | | | |

## Om na te lopen (keuzes die de AI in logmoment 1 maakte)

Deze punten kun je controleren, en er eventueel een nieuw logmoment van maken als je er een vervolgvraag over stelt:

- **Doelgroep:** management van Wise, net als het rapport. Past dit, of kies je liever een andere doelgroep?
- **Grafiek 2:** de vergoeding van Wise (gemiddelde over alle overboekingen) staat naast cijfers van de Wereldbank
  (overboeking van USD 200). Dat is niet precies hetzelfde; dit staat bij de beperkingen. Is de vergelijking eerlijk genoeg?
- **Periode boekjaar 2026:** de site gaat uit van 1 april 2025 tot en met 31 maart 2026. Controleer dit in het jaarverslag.
- **Cijfers:** alle cijfers zijn overgenomen uit het adviesrapport, niet opnieuw uit de bronnen gehaald. Leg ze zelf naast
  het jaarverslag en de kwartaalupdate (test T6 in de testlog).
- **Schets van het overzicht:** de bedragen (EUR 310 bespaard, 14 overboekingen) zijn verzonnen en staan zo gelabeld.
- **Teksten:** de teksten zijn door AI geschreven. Herschrijf wat niet als jouw eigen woorden klinkt (zie leerpunt 2 in de AI-log van het rapport).
