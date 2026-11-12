/* =========================================
   GORIKA SENSEI
   FANTASY WONDERLAND JAVASCRIPT
========================================= */


/* =========================================
   PART 1 : FLOATING STARS
========================================= */

const starsContainer = document.getElementById("stars-container");

if (starsContainer) {

    for (let i = 0; i < 100; i++) {

        const star = document.createElement("span");

        star.className = "twinkle-star";
        star.textContent = Math.random() > 0.5 ? "✦" : "·";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.fontSize = (Math.random() * 13 + 5) + "px";

        star.style.setProperty("--duration", (2 + Math.random() * 5) + "s");
        star.style.setProperty("--delay", (Math.random() * 5) + "s");

        starsContainer.appendChild(star);
    }

}


/* =========================================
   PART 2 : FLOATING BUTTERFLIES
========================================= */

const butterfliesContainer =
    document.getElementById("butterflies-container");

if (butterfliesContainer) {

    for (let i = 0; i < 10; i++) {

        const butterfly = document.createElement("span");

        butterfly.className = "fairy-butterfly";
        butterfly.textContent = "🦋";

        butterfly.style.left = Math.random() * 90 + "%";
        butterfly.style.top = Math.random() * 85 + "%";

        butterfly.style.setProperty("--size", (17 + Math.random() * 15) + "px");
        butterfly.style.setProperty("--duration", (10 + Math.random() * 12) + "s");
        butterfly.style.setProperty("--delay", (Math.random() * 8) + "s");

        butterfliesContainer.appendChild(butterfly);
    }

}


/* =========================================
   PART 3 : SHOOTING METEORS
========================================= */

const meteorsContainer =
    document.getElementById("meteors-container");

function createMeteor() {

    if (!meteorsContainer) return;

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left = (40 + Math.random() * 60) + "%";
    meteor.style.top = (Math.random() * 45) + "%";

    meteorsContainer.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 1600);

}

function startMeteorShower() {

    createMeteor();

    setTimeout(
        startMeteorShower,
        3500 + Math.random() * 5000
    );

}

if (meteorsContainer) {
    startMeteorShower();
}


/* =========================================
   PART 4 : GLOBAL FAIRY MAGIC
   ENTIRE WEBSITE
========================================= */

(function createGlobalFairyMagic() {

    const magicLayer =
        document.getElementById("global-fairy-magic");

    if (!magicLayer) return;

    if (magicLayer.dataset.initialized === "true") return;

    magicLayer.dataset.initialized = "true";

    const fairyLayer =
        magicLayer.querySelector(".fairy-flight-layer");

    const flowerLayer =
        magicLayer.querySelector(".flower-flight-layer");

    const dustLayer =
        magicLayer.querySelector(".fairy-dust-layer");

    if (!fairyLayer || !flowerLayer || !dustLayer) return;


    /* FAIRIES */

    const fairies = ["🧚‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️"];

    fairies.forEach((fairy, index) => {

        const element = document.createElement("span");

        element.className = "global-fairy";
        element.textContent = fairy;

        element.style.setProperty(
            "--top",
            (12 + index * 22) + "%"
        );

        element.style.setProperty(
            "--size",
            (20 + (index % 2) * 8) + "px"
        );

        element.style.setProperty(
            "--duration",
            (32 + index * 7) + "s"
        );

        element.style.setProperty(
            "--delay",
            (index * -9) + "s"
        );

        fairyLayer.appendChild(element);

    });


    /* FLOATING FLOWERS */

    const flowers = ["🌸", "🌼", "🌷", "🌺", "🪻", "🌸"];

    flowers.forEach((flower, index) => {

        const element = document.createElement("span");

        element.className = "global-flower";
        element.textContent = flower;

        element.style.setProperty(
            "--top",
            (8 + index * 15) + "%"
        );

        element.style.setProperty(
            "--size",
            (17 + (index % 3) * 5) + "px"
        );

        element.style.setProperty(
            "--duration",
            (38 + index * 6) + "s"
        );

        element.style.setProperty(
            "--delay",
            (index * -11) + "s"
        );

        flowerLayer.appendChild(element);

    });


    /* MAGICAL DUST PARTICLES */

    for (let i = 0; i < 28; i++) {

        const particle = document.createElement("span");

        particle.className = "global-dust";

        particle.style.setProperty(
            "--left",
            Math.random() * 100 + "%"
        );

        particle.style.setProperty(
            "--top",
            Math.random() * 100 + "%"
        );

        particle.style.setProperty(
            "--size",
            (2 + Math.random() * 3) + "px"
        );

        particle.style.setProperty(
            "--duration",
            (2 + Math.random() * 4) + "s"
        );

        particle.style.setProperty(
            "--delay",
            (Math.random() * -5) + "s"
        );

        dustLayer.appendChild(particle);

    }

    console.log("Global Fairy Magic Activated!");

})();


/* =========================================
   HELPER : SHOW SECTION
========================================= */

function showSection(section) {

    if (!section) return;

    section.hidden = false;

    setTimeout(() => {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================
   PART 5 : MAGICAL ENTRANCE
========================================= */

const enterButton =
    document.getElementById("enter-world");

const entranceSection =
    document.querySelector(".entrance");

const surpriseSection =
    document.getElementById("surprise-reveal");

if (enterButton) {

    enterButton.addEventListener("click", () => {

        if (entranceSection) {
            entranceSection.style.display = "none";
        }

        showSection(surpriseSection);

        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";

    });

}


/* =========================================
   PART 6 : DISCOVER SECRET
========================================= */

const discoverButton =
    document.getElementById("discover-secret");

const secretMessage =
    document.getElementById("secret-message");

if (discoverButton) {

    discoverButton.addEventListener("click", () => {

        if (secretMessage) {

            secretMessage.hidden = false;

            setTimeout(() => {

                secretMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        }

        discoverButton.style.display = "none";

    });

}


/* =========================================
   PART 7 : CONTINUE YOUR JOURNEY
========================================= */

const continueButton =
    document.getElementById("continue-journey");

const birthdayLetterSection =
    document.getElementById("birthday-letter");

if (continueButton) {

    continueButton.addEventListener("click", () => {

        if (surpriseSection) {
            surpriseSection.hidden = true;
        }

        showSection(birthdayLetterSection);

    });

}


/* =========================================
   PART 8 : OPEN BIRTHDAY LETTER
========================================= */

const openLetterButton =
    document.getElementById("open-letter");

const envelopeArea =
    document.getElementById("envelope-area");

const letterPaper =
    document.getElementById("letter-paper");

if (openLetterButton) {

    openLetterButton.addEventListener("click", () => {

        if (envelopeArea) {
            envelopeArea.style.display = "none";
        }

        if (letterPaper) {

            letterPaper.hidden = false;

            setTimeout(() => {

                letterPaper.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        }

    });

      }
/* =========================================
   PART 9 : NEXT CHAPTER
========================================= */

const nextChapterButton =
    document.getElementById("next-chapter");

const universeSection =
    document.getElementById("universe-cards");

if (nextChapterButton) {

    nextChapterButton.addEventListener("click", () => {

        if (birthdayLetterSection) {
            birthdayLetterSection.hidden = true;
        }

        showSection(universeSection);

    });

}


/* =========================================
   PART 10 : INTERACTIVE UNIVERSE CARDS
========================================= */

const memoryButtons =
    document.querySelectorAll(".memory-card-trigger");

memoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const memoryId =
            button.getAttribute("data-memory");

        const memoryMessage =
            document.getElementById(memoryId);

        if (!memoryMessage) return;

        if (memoryMessage.hidden) {

            memoryMessage.hidden = false;

            button.setAttribute("aria-expanded", "true");

            const hint =
                button.querySelector(".memory-card-hint");

            if (hint) {
                hint.textContent = "✧ Close memory";
            }

        } else {

            memoryMessage.hidden = true;

            button.setAttribute("aria-expanded", "false");

            const hint =
                button.querySelector(".memory-card-hint");

            if (hint) {
                hint.textContent = "✧ Click to discover";
            }

        }

    });

});


/* =========================================
   PART 11 : OPEN CONSTELLATION
========================================= */

const openConstellationButton =
    document.getElementById("open-constellation");

const constellationSection =
    document.getElementById("constellation-section");

if (openConstellationButton) {

    openConstellationButton.addEventListener("click", () => {

        if (universeSection) {
            universeSection.hidden = true;
        }

        showSection(constellationSection);

    });

}


/* =========================================
   PART 12 : FIVE-STAR CONSTELLATION
========================================= */


/* CONSTELLATION ELEMENTS */

const constellationStars =
    document.querySelectorAll(".constellation-star");

const starMessageBox =
    document.getElementById("star-message-box");

const starMessageNumber =
    document.getElementById("star-message-number");

const starMessageTitle =
    document.getElementById("star-message-title");

const starMessageText =
    document.getElementById("star-message-text");

const constellationProgress =
    document.getElementById("constellation-progress");

const constellationComplete =
    document.getElementById("constellation-complete");


/* STAR MESSAGES */

const starMessages = {

    1: {
        title: "A BOND BEYOND DISTANCE",
        message:
            "We may not have met in person, but this bond has its own beautiful meaning. Distance is just a number when two people share a genuine connection. And I am grateful for this special bond we share."
    },

    2: {
        title: "A BEAUTIFUL CHAPTER",
        message:
            "It started with a simple conversation, but slowly became a beautiful chapter of my life. Every little moment has added something special to this journey."
    },

    3: {
        title: "A MILLION SMILES",
        message:
            "I hope life gives you a million reasons to smile. May your days be filled with happiness, laughter, beautiful surprises and dreams coming true."
    },

    4: {
        title: "ALWAYS YOUR BROTHER",
        message:
            "No matter how far apart we are, I will always wish the best for you. I am thankful to call you my sister. Keep shining, Gorika Sensei!"
    },

    5: {
        title: "FOREVER SPECIAL",
        message:
            "Some people become a beautiful part of our story. You are one of those people. This little universe may end here, but the memories will always remain special."
    }

};


/* TRACK UNLOCKED STARS */

const unlockedStars = new Set();


/* CONSTELLATION LINE CONNECTIONS */

const lineConnections = [

    { line: "line-1", first: 1, second: 2 },
    { line: "line-2", first: 2, second: 3 },
    { line: "line-3", first: 3, second: 4 },
    { line: "line-4", first: 4, second: 5 },
    { line: "line-5", first: 5, second: 1 }

];


/* UPDATE CONSTELLATION LINES */

function updateConstellationLines() {

    lineConnections.forEach((connection) => {

        const line =
            document.getElementById(connection.line);

        if (
            line &&
            unlockedStars.has(connection.first) &&
            unlockedStars.has(connection.second)
        ) {

            line.classList.add("active");

        }

    });

}


/* SECRET GARDEN BUTTON */

const openSecretGardenButton =
    document.getElementById("open-secret-garden");

if (openSecretGardenButton) {
    openSecretGardenButton.hidden = true;
}

if (constellationComplete) {
    constellationComplete.hidden = true;
}


/* STAR CLICK EVENTS */

constellationStars.forEach((starButton, index) => {

    starButton.addEventListener("click", () => {

        const starNumber = Number(
            starButton.getAttribute("data-star")
        ) || (index + 1);

        const message = starMessages[starNumber];

        if (!message) return;


        /* UNLOCK STAR */

        if (!unlockedStars.has(starNumber)) {

            unlockedStars.add(starNumber);

            starButton.classList.add("unlocked");

            starButton.setAttribute("aria-expanded", "true");

        }


        /* SHOW STAR MESSAGE */

        if (
            starMessageBox &&
            starMessageNumber &&
            starMessageTitle &&
            starMessageText
        ) {

            starMessageNumber.textContent =
                "STAR 0" + starNumber;

            starMessageTitle.textContent =
                message.title;

            starMessageText.textContent =
                message.message;

            starMessageBox.hidden = false;
            starMessageBox.style.display = "block";

            setTimeout(() => {

                starMessageBox.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        }


        /* UPDATE PROGRESS */

        if (constellationProgress) {

            constellationProgress.textContent =
                unlockedStars.size + " OF 5 STARS UNLOCKED";

        }


        /* CONNECT STARS */

        updateConstellationLines();


        /* COMPLETE CONSTELLATION */

        if (unlockedStars.size === 5) {

            if (constellationComplete) {
                constellationComplete.hidden = false;
            }

            if (openSecretGardenButton) {
                openSecretGardenButton.hidden = false;
            }

        }

    });

});


/* =========================================
   PART 13 : SECRET GARDEN
========================================= */


/* GARDEN ELEMENTS */

const gardenFlowers =
    document.querySelectorAll(".garden-flower");

const gardenSurprise =
    document.getElementById("garden-surprise");

const gardenSurpriseTitle =
    document.getElementById("garden-surprise-title");

const gardenSurpriseText =
    document.getElementById("garden-surprise-text");

const gardenNextButton =
    document.getElementById("garden-next");


/* GARDEN MESSAGES */

const gardenMessages = [

    {
        title: "A Little Flower of Happiness 🌸",
        message:
            "May your days always have little reasons to smile, beautiful moments to remember, and countless reasons to feel happy."
    },

    {
        title: "A Garden of Dreams ✨",
        message:
            "Never stop dreaming, exploring and discovering new things. The world has so many beautiful chapters waiting for you."
    },

    {
        title: "A Million Little Smiles 🦋",
        message:
            "Some people make ordinary moments feel special. I hope life gives you a million moments that make you smile."
    },

    {
        title: "Keep Blooming 🌷",
        message:
            "Like these flowers, keep growing in your own beautiful way. Your journey is yours, and every new chapter matters."
    },

    {
        title: "A Special Wish 💜",
        message:
            "May happiness find you in unexpected places, may your dreams come closer, and may your heart always stay full of hope."
    }

];


/* GARDEN FLOWER CLICK EVENTS */

gardenFlowers.forEach((flower, index) => {

    flower.addEventListener("click", () => {

        const message = gardenMessages[index];

        if (!message) return;

        gardenFlowers.forEach((item) => {
            item.classList.remove("garden-flower-active");
        });

        flower.classList.add("garden-flower-active");

        if (
            gardenSurprise &&
            gardenSurpriseTitle &&
            gardenSurpriseText
        ) {

            gardenSurpriseTitle.textContent =
                message.title;

            gardenSurpriseText.textContent =
                message.message;

            gardenSurprise.hidden = false;

            gardenSurprise.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        }

    });

});


/* CONSTELLATION TO SECRET GARDEN */

if (openSecretGardenButton) {

    openSecretGardenButton.addEventListener("click", () => {

        if (constellationSection) {
            constellationSection.hidden = true;
        }

        const gardenSection =
            document.getElementById("secret-garden");

        showSection(gardenSection);

    });

}


/* =========================================
   PART 14 : GARDEN TO GIFT BOX
========================================= */

const giftBoxSection =
    document.getElementById("gift-box");

if (gardenNextButton) {

    gardenNextButton.addEventListener("click", () => {

        const gardenSection =
            document.getElementById("secret-garden");

        if (gardenSection) {
            gardenSection.hidden = true;
        }

        showSection(giftBoxSection);

    });

        }
/* =========================================
   PART 15 : INTERACTIVE GIFT BOX
========================================= */


/* GIFT BOX ELEMENTS */

const giftBoxWrapper =
    document.getElementById("gift-box-wrapper");

const giftBoxLid =
    document.getElementById("gift-box-lid");

const openGiftButton =
    document.getElementById("open-gift-button");

const giftSurprise =
    document.getElementById("gift-surprise");

const continueToCakeButton =
    document.getElementById("continue-to-cake");


/* OPEN GIFT BOX */

if (openGiftButton) {

    openGiftButton.addEventListener("click", () => {

        if (giftBoxWrapper) {
            giftBoxWrapper.classList.add("gift-open");
        }

        if (giftBoxLid) {
            giftBoxLid.classList.add("gift-lid-open");
        }

        openGiftButton.disabled = true;

        openGiftButton.textContent =
            "YOUR SURPRISE IS HERE ✨";

        setTimeout(() => {

            if (giftSurprise) {

                giftSurprise.hidden = false;

                giftSurprise.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

            openGiftButton.style.display = "none";

        }, 900);

    });

}


/* GIFT BOX TO BIRTHDAY CAKE */

const birthdayCakeSection =
    document.getElementById("birthday-cake");

if (continueToCakeButton) {

    continueToCakeButton.addEventListener("click", () => {

        if (giftBoxSection) {
            giftBoxSection.hidden = true;
        }

        showSection(birthdayCakeSection);

    });

}


/* =========================================
   PART 16 : BIRTHDAY CAKE
========================================= */


/* CAKE ELEMENTS */

const makeWishButton =
    document.getElementById("make-wish");

const birthdayMessage =
    document.getElementById("birthday-message");

const cakeCandles =
    document.querySelectorAll(".candle");

const cakeContinueButton =
    document.getElementById("cake-continue");


/* MAKE A WISH */

if (makeWishButton) {

    makeWishButton.addEventListener("click", () => {

        cakeCandles.forEach((candle) => {
            candle.classList.add("candle-blown");
        });

        const cakeAnimation =
            document.getElementById("birthday-cake-animation");

        if (cakeAnimation) {
            cakeAnimation.classList.add("wish-made");
        }

        makeWishButton.disabled = true;

        makeWishButton.textContent =
            "WISH MADE! ✨";

        setTimeout(() => {

            if (birthdayMessage) {

                birthdayMessage.hidden = false;

                birthdayMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }, 600);

    });

}


/* =========================================
   PART 17 : GRAND FINALE
========================================= */

const grandFinaleSection =
    document.getElementById("grand-finale");

const finaleCake =
    document.querySelector(".finale-cake");

const cakeCuttingAnimation =
    document.getElementById("cake-cutting-animation");


/* CAKE TO GRAND FINALE */

if (cakeContinueButton) {

    cakeContinueButton.addEventListener("click", () => {

        if (birthdayCakeSection) {
            birthdayCakeSection.hidden = true;
        }

        showSection(grandFinaleSection);


        /* START CAKE ANIMATION */

        setTimeout(() => {

            if (cakeCuttingAnimation) {
                cakeCuttingAnimation.classList.add("cake-cutting");
            }

            if (finaleCake) {
                finaleCake.classList.add("finale-cake-cut");
            }

        }, 400);


        /* CONFETTI EFFECT */

        if (grandFinaleSection) {

            const finaleContent =
                grandFinaleSection.querySelector(".finale-content");

            if (
                finaleContent &&
                !finaleContent.querySelector(".finale-confetti")
            ) {

                const confettiContainer =
                    document.createElement("div");

                confettiContainer.className =
                    "finale-confetti";

                for (let i = 0; i < 45; i++) {

                    const confetti =
                        document.createElement("span");

                    confetti.className = "confetti-piece";

                    confetti.textContent =
                        ["✦", "✧", "♡", "·"][
                            Math.floor(Math.random() * 4)
                        ];

                    confetti.style.left =
                        Math.random() * 100 + "%";

                    confetti.style.animationDelay =
                        Math.random() * 3 + "s";

                    confetti.style.setProperty(
                        "--fall-duration",
                        (3 + Math.random() * 4) + "s"
                    );

                    confettiContainer.appendChild(confetti);

                }

                finaleContent.appendChild(confettiContainer);

            }

        }

    });

}


/* =========================================
   PART 18 : FINAL DEBUG CHECK
========================================= */

console.log("Fantasy Wonderland Loaded!");


console.log("Global Fairy Magic check:", {

    magicLayer: !!document.getElementById("global-fairy-magic"),

    fairyLayer: !!document.querySelector(".fairy-flight-layer"),

    flowerLayer: !!document.querySelector(".flower-flight-layer"),

    dustLayer: !!document.querySelector(".fairy-dust-layer")

});


console.log("Constellation check:", {

    stars: constellationStars.length,

    messageBox: !!starMessageBox,

    messageNumber: !!starMessageNumber,

    messageTitle: !!starMessageTitle,

    messageText: !!starMessageText,

    progress: !!constellationProgress,

    gardenButton: !!openSecretGardenButton

});


console.log("Secret Garden check:", {

    flowers: gardenFlowers.length,

    gardenSection: !!document.getElementById("secret-garden"),

    gardenNextButton: !!gardenNextButton

});


console.log("Gift Box check:", {

    giftBox: !!giftBoxSection,

    giftWrapper: !!giftBoxWrapper,

    giftLid: !!giftBoxLid,

    openButton: !!openGiftButton,

    surprise: !!giftSurprise,

    continueButton: !!continueToCakeButton

});


console.log("Birthday Cake check:", {

    cakeSection: !!birthdayCakeSection,

    wishButton: !!makeWishButton,

    birthdayMessage: !!birthdayMessage,

    finaleSection: !!grandFinaleSection

});


console.log("All Fantasy Wonderland scripts loaded successfully!");
