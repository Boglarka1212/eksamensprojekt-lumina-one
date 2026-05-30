# Lumina One - programmerings dokumentation


## Projektbeskrivelse

Projektet er en optimeret version af landingpage-casen for LUMINA One, en fiktiv bærbar højttaler fra LUMINA Audio. Projektet bygger videre på en tidligere version fra semesteret og viser min udvikling og brug af faglige kompetencer inden for UX/UI-design og programmering.

Formålet er at skabe en enkel og brugervenlig landingpage med udgangspunkt i personaen Sofie og LUMINA Audios brandidentitet. I processen har jeg arbejdet med bl.a. heuristisk analyse, skitser, Figma-prototype, auto layout, components, designsystem, brugertest og visuelt hierarki og flere designprincipper.

Den kodede løsning er bygget med HTML, CSS og JavaScript. HTML til semantisk struktur, CSS til layout og styling, og JavaScript til interaktive elementer som farvevalg og dynamiske feature kort.

Brugeren kan læse om produktet, udforske features, bladre produktfarverne igennem, se brugssituationer, udforske social connect, samt finde pris, Trustpilot og nyhedsbrev til sidst. Der er arbejdet med data i arrays i Javascript til feture kort og skift af farvevarianter.

## Fil og mappestruktur

Projektet er organiseret i en mappestruktur, hvor Javascript, HTML, CSS og billeder holdes adskilt. Mappestrukturen gør projektet mere overskuelig og lettere at finde rundt i.

index.html ligger i rodmappen eksamensprojekt-lumina-one og indeholder sidens grundstruktur, altså HTML-struktur og indhold. Landingpagen er bygget op af en header med navbar og en main, der rummer sidens primære indhold som hero, infobar, feature-sektion, farvevalg og connect-sektion. Her indgår semantiske tags som fx section og figure samt almindelige HTML-tags som img, h1 og h2.

style.css ligger i mappen css og bruges styling af siden som bl.a. typografi, layout, farver og spacing mm.

Script.js ligger i mappen js og bruges til de interaktive elementer på siden, samt til at generere feature kort ud fra arrays.

Billeder, ikoner, illustrationer og logoer ligger i mappen img, som bliver brugt på landingpagen.

Mappestrukturen ser således ud:

![Mappestruktur](/img/mappestruktur.png)



## HTML-validering

Jeg validerede min index.html med W3C Markup Validation Service. Første validering resulterede i 10 warnings, som handlede om, at nogle section- og article-elementer manglede en overskrift.

![Validering med warnings](/img/html-gul.png)

Disse steder havde jeg brugt semantiske tags, som ikke fungerede som selvstændige sektioner med egen overskrift. Derfor rettede jeg flere af dem til et mere neutralt tag som div. Ved brugssituationerne havde jeg brugt article med et img-tag og et p-tag. Det ændrede jeg til figure med figcaption, da teksten understøtter billedet og derfor fungerer bedre som en billedtekst end som en selvstændig artikel.

Efter rettelserne validerede jeg koden igen, og den er nu fejlfri.

![Validering fejlfri](/img/html-groen.png)



## CSS-validering

Jeg validerede min style.css med W3C CSS Validation Service for at kontrollere fejl i syntaks og CSS-regler. Valideringen var fejlfri i første forsøg.

![Validering fejlfri](/img/css-groen.png)



## Javascript datastruktur

I projektet arbejder jeg med arrays, som indeholder objekter, da der flere steder på siden findes elementer med gentaget struktur, men forskelligt indhold.

Der er fx brugt arrays til feature cards. Arrayet består af flere objekter, hvor et objekt repræsenterer et kort. Objekterne består af fire properties som title (overskrift på feature card), text (den forklarende tekst), image (billedet til kortet) og caption (den tekst, der skal stå i alt-attributten på img-tagget):

![Array til feature kort](/img/screenshot-features.png)

Arrayet i Javascript gør det lettere at tilføje, fjerne eller rette i kortenes indhold uden at skulle rette hvert kort manuelt i HTML.

Et andet eksempel er et array til farvevarianterne, hvor hvert objekt indeholder color (farvenavnet, der matcher data-color i HTML), image (billedstien til den pågældende farve) og alt (teksten til alt-attributten på img-tagget).

![Array til farvevarianter](/img/screenshot-farver.png)

Med den opsætning kan Javascript finde den rigtige højttalerfarve og sætte den ind i HTML’en, når der bliver klikket på den farveknap, der tilhører den pågældende højttaler.



## Eksempel på javascript kode

```Javascript
/* UDFORSK FARVERNE */
/* Finder billedet og alle farveknapperne i dommen */
const colorImg = document.querySelector(".color-img");
const colorButtons = document.querySelectorAll(".color-btn");

/* Luminas farver */
const luminaCorlors = [
  {
    color: "lavender-mist",
    image: "img/lumina-lilla.png",
    alt: "Lumina lavender mist",
  },
  {
    color: "sage-green",
    image: "img/lumina-groen.png",
    alt: "Lumina sage green",
  },
  {
    color: "dusty-rose",
    image: "img/lumina-pink.png",
    alt: "Lumina dusty rose",
  },
  {
    color: "moonlight-white",
    image: "img/lumina-hvid.png",
    alt: "Lumina moonlight white",
  },
];

/* Gå igennem knapperne en af gangen - Når der klikkes, skal funktionen changeColor køre */
for (const btn of colorButtons) {
  btn.addEventListener("click", changeColor);
}

//Funktionen der kører, når der klikkes på en farveknap
function changeColor(event) {
  /* knappen, som brugeren klikker på registreres -
den valgte knaps farve hentes fra html data-color */
  const clickedBtn = event.currentTarget;
  const chosenColor = clickedBtn.dataset.color;

  //den valgte farve findes i arrayet luminaColors
  const chosenLumina = luminaCorlors.find(function (lumina) {
    return lumina.color === chosenColor;
  });

  /* Skifter billedet til det valgte farves billede -
  og det´s billedets alt-tekst */
  colorImg.src = chosenLumina.image;
  colorImg.alt = chosenLumina.alt;

  //Fjerner "on"-classen fra alle knapper og tilføjer den til clickedBtn
  for (const btn of colorButtons) {
    btn.classList.remove("on");
  }

  clickedBtn.classList.add("on");
}
```

En af de vigtigste dele i min Javascript kode er farveskift på højtaleren. Når der klikkes på en farveknap, ændres produktbilledet til den valgte farve.

Først findes img-tagget med classen .color-img i DOM-en med querySelector og gemmes i variablen colorImg. Dette bille skal skifte, når brugeren vælger en ny farve. Knapperne findes med classen .color-btn med querySelectorAll, fordi der er flere farveknapper med samme class, og gemmes som en slags liste i variablen colorButtons.

```Javascript
const colorImg = document.querySelector(".color-img");
const colorButtons = document.querySelectorAll(".color-btn");
```

Jeg har oprettet et array, der hedder LuminaColors, der indeholder objekter med farvevarianterne. Hvert objekt indeholder farvens navn, billedstien og alt-teksten.

Jeg brugte et for-of loop. Loopet går igennem hver knap colorButtons. For hver knap tilføjes en eventListener, der lytter til klik. Når der klikkes, bliver funktionen changeColor kaldt.

```Javascript
for (const btn of colorButtons) {
  btn.addEventListener("click", changeColor);
}
```

Funktionen changeColor kører, når der klikkespå en farveknap. Den præcise knap bliver registreret med event.currentTarget og gemmes i variablen clickedBtn. Værdien fra kanppens data-color attribut hentes i HTML´en vha clickedBtn.dataset.color og gemmes i variablen chosenColor. Klikkes der på den grønne knap, vil chosenColor have værdien ”sage-green”.

```Javascript
  const clickedBtn = event.currentTarget;
  const chosenColor = clickedBtn.dataset.color;
```

Den valgte farve skal findes i arrayet vha array metoden .find(). Den går igennem objekterne i luminaColors en af gangen og skal finde det objekt, hvis color er det samme som chosenColor. Er der blevet klikket på ”sage-green”, ignorerer funktionen det første objekt, går videre til at den finder det objekt, der har en color: ”sage-green”. Det fundede objekt gemmes i variablen chosenLumina.

```Javascript
const chosenLumina = luminaCorlors.find(function (lumina) {
    return lumina.color === chosenColor;
});
```

Billedet fra arrayet bliver her sat ind i img-tagget, som er gemt i variablen (colorImg). Det samme sker med den tilhørende alt-attribut

```Javascript
  colorImg.src = chosenLumina.image;
  colorImg.alt = chosenLumina.alt;
```

En ny for-of loop bruges til at fjerne classen ”on” fra alle farveknapper, hvorefter der tilføjes ”on” til den knap, der er blevet klikket på.

```Javascript
  for (const btn of colorButtons) {
    btn.classList.remove("on");
  }

  clickedBtn.classList.add("on");
```

Koden her er vigtig, for den gør landingpagen mere interaktiv, hvor man kan se højtaleren i forskellige farver.