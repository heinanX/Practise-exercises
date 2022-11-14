<!---Övning: Get Things Done, part 1.

Med den här övningen startar du en följetång som du kommer att återkomma till under utbildningen.
Vi bygger om och bygger vidare vart efter att du lär dig nya tekniker. 
När vi är klara så har vi förhoppningsvis en klar webbapplikation som faktiskt kan skapa nytta!

På dessa övningar är jag mycket “friare” när jag skriver kraven. Och skriver dem oftast med användarens 
eller kundens “glasögon” på mig. Så det är upp till dig själv att tolka kraven och förstå vad som menas
 och välja den teknik som löser problemet bäst. Skriver jag lista, så behöver det inte betyda att du måste 
 använda en UL eller LI utan kanske bara DIV och design med flexbox. Kunder är ute efter funktion och inte 
 teknik, oftast har de ingen koll på hur den tekniska lösningen kommuniceras eller används. Ställ frågor till 
 kunden (Janne) om du är osäker.

Använd git och GitHub

 

Uppgiftsbeskrivning:

Du skall utveckla en “Att göra lista”. Dvs en applikation med vilket du och andra (så småningom)
 kan hantera sina att göra listor digitalt.
Det skall så småningom gå att lägga till nya listor, saker och ta bort och redigera listor.

Kravllista, del 1:

Skapa en layout och struktur till din app.
Lägg till en array som innehåller din lista och några punkter som skrivs ut på sidan.
Det skall finnas ett formulär med vilket det ska gå att skriva och lägga till nya punkter till listan.
Vid varje punkt på listan så skall det finnas en ikon med vilket jag kan klicka och markera den punkten 
som slutförd och då skall den tas bort från listan.-->




-----------------------------------------------------------------------------------------------------------

<!-- Övning: Get Things done, part 2.

Här fortsätter vi på följetångsövningen Get Things Done.
Det vi skall lösa i den här övningen är localStorage, dvs att våra listor och ändringar sparas i webbläsarens minne. Så att när vi uppdaterar sidan eller kommer tillbaks till sidan senare så finns våra listor och dess innehåll kvar!

Tänk Hämta → Ändra → Spara!

-----------------------------------------------------------------------------------------------------------


Krav del 2:

Spara listorna och alla ändringar i localStorage -->

<!-- Vi skall framtidssäkra våran Todo-lista applikation genom att dela upp javacript koden i moduler.

Vi vet nu att i framtiden så kommer vi att lyfta över listan till databaser från localStorage. 
För att undelätta för oss själva så skall vi lyfta över alla funktioner som idag hanterar localStorage till en egen modulfil med tydliga inputs och outputs så att när vi sedan skall implementera databaser till projektet så skall det räcka med att enbart skriva om dessa funktioner i modul filen. Döp denna modul fil till “data.mjs” och den skall innehålla 4 funktioner:

För att hämta alla listor och items.
För att lägga till en ny item till en lista.
För att markera en item som “klar”.
För att radera en item.
Dessa funktioner skall sedan importeras och anropas från script.js. Tänk på att inte blanda utskriftslogik med “data”-logik i data.mjs. Vill du sedan dela upp resten av logiken till fler moduler så är det såklart ok! -->