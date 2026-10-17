# Testlog

Website *Wise in cijfers*. De tests T1 tot en met T5 zijn uitgevoerd tijdens het bouwen op 17 oktober 2026
(macOS, Google Chrome). De tests T6 tot en met T9 moeten nog worden uitgevoerd en ingevuld.

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
| T9 | Andere browser | Site openen in Safari of Edge met dubbelklik op `index.html` | Zelfde resultaat als in Chrome | *nog invullen* | Open |

## Gevonden fout, herstel en hertest

- **Fout (T5):** in `grafieken/kosten-overboeking.svg` stonden de twee bronnen op één lange regel. Die regel
  was breder dan de grafiek (760 px), waardoor het einde van de raadpleegdatum wegviel. De bron was dus niet
  volledig te lezen, terwijl de opdracht een volledige bronvermelding eist.
- **Herstel:** de bronvermelding verdeeld over drie regels en de grafiek 20 px hoger gemaakt (400 naar 420 px).
  In `cijfers.html` is de hoogte van de afbeelding ook aangepast naar 420.
- **Hertest (T5b):** dezelfde pagina op dezelfde breedte opnieuw bekeken. De bronvermelding is nu volledig zichtbaar.

## Opmerking bij T4

Een eerste schermafbeelding met een testprogramma liet de pagina's op telefoonbreedte afgekapt zien. Bij
controle in een echte telefoonweergave van 375 px bleek de pagina niet breder dan het scherm. Het lag dus aan het
testprogramma en niet aan de site.
