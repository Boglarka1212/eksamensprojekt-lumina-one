"use strict";



/* DE 6 FEATURE CARDS */
const features = [
  {
    title: "1. Holder hele dagen",
    text: "Ingen stress over batteri midt i stemningen. Lumina følger jer fra morgen til aften.",
    image: "img/holder-hele-dagen.png",
    caption: "Holder dagen lang",
  },
  {
    title: "2. Med helt ned til vandet",
    text: "Du kan tage den med tæt på vandet uden at skulle passe på den - det kan den holde til!",
    image: "img/ned-til-vandet.png",
    caption: "Kan tåle splash fra vand",
  },
  {
    title: "3. Smuk nok til at stå fremme",
    text: "Bløde former, rolige farver og et udtryk, der føles mere som interiør end klassisk tech.",
    image: "img/smuk-nok.png",
    caption: "Står smukt på hylden",
  },
  {
    title: "4. Lyden, som samler jer",
    text: "Kraftig nok til at fylde rummet, men stadig blød nok til samtaler, grin og hygge.",
    image: "img/lyden-samler-jer.png",
    caption: "Samlet rundt om højtaleren",
  },
  {
    title: "5. Let at tage med overalt",
    text: "Let nok til at komme med, også når tasken allerede er fyldt.",
    image: "img/let-som-fjer.png",
    caption: "Let som fjer",
  },
  {
    title: "6. Én playliste",
    text: "Med Social Connect kan veninderne blande deres musik ind, så stemningen ikke kun er én persons ansvar.",
    image: "img/en-playliste.png",
    caption: "Blend jeres playlister",
  },
];


/* Finder pladsen til cards i dommen, elementet der hedder feature-list */
const featureList = document.getElementById("feature-list");

/* Funktionen, der skriver feature cards ud */
function showFeatures() {

  /* loop starter her - og indsæt html i featureList */
  for (const feature of features) {
    featureList.insertAdjacentHTML(
      "beforeend",
      `
        <article class="cause">
          <section class="cause-text">
            <h3>${feature.title}</h3>
            <p>${feature.text}</p>
          </section>
          
          <figure class="cause-img">
            <img src="${feature.image}" alt="${feature.caption}">
          </figure>
        </article>
      `,
    );
  }
}
showFeatures();




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




/* DETALJE SEKTION */
/* Detalje teksterne */
const details = [
  {
    title: "Lyd & stemning",
    text: "Op til 100 dB, ambient-lys med chill, party og sunset mode samt diskret LED-lys, der følger musikken.",
  },
  {
    title: "Design & bærbarhed",
    text: "Kun 3 kg, med stof tote-bag, bløde former og stofbeklædt front. Fås i Dusty Rose, Sage Green, Moonlight White og Lavender Mist.",
  },
  {
    title: "Batteri & tilslutning",
    text: "Op til 18 timers spilletid, USB-C opladning, batteriindikator via LED/app, Bluetooth 5.3 og AUX-indgang.",
  },
  {
    title: "Social & udendørs",
    text: "Blend playlister via appen, par op til 3 andre enheder og tag den med ud — IPX5 vandafvisende mod let regn og pool-splash.",
  },
];


