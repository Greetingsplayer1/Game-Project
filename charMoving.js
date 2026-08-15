let chars = [
    {
        name: "Fighter",
        src: "media/fighter.svg",
        desc: "Just a basic fighter. No specific strengths nor weaknesses. The most boring of the characters."
    },
    {
        name: "Paladain",
        src: "media/paladain.svg",
        desc: "A tanky religious knight. Moves slowly but is great with a sword and has loads of health."
    },
    {
        name: "Sorcerer",
        src: "media/sorcerer.svg",
        desc: "A magic user that uses inate powers. Casts powerful fireballs in place of arrows."
    },
    {
        name: "Wizard",
        src: "media/wizard.svg",
        desc: "A magic user that casts spells learned from studying. Casts powerful fireballs in place of arrows."
    },
    {
        name: "Warlock",
        src: "media/warlock.svg",
        desc: "A magic user that borrows powerful magics from their patron. Casts powerful fireballs in place of arrows."
    }
]

const chris = {
    name: "Chris",
    src: "media/chris.png",
    desc: "The most powerful character. Is nearly invincible, and uses his coffee mug to launch splashes of coffee at the enemies."
}

const charImg = document.getElementById("charImg").getElementsByTagName("img")[0];
const charName = document.getElementById("charName").getElementsByTagName("h3")[0];
const charDesc = document.getElementById("charDesc");

let charShowing = 1;
let chrisExists = false;

function charMove(num) {
    const char = num - 1;

    charName.innerHTML = chars[char].name;
    charImg.src = chars[char].src;
    charDesc.innerHTML = chars[char].desc;
}

function lastChar() {
    charShowing = chars.length;
    charMove(charShowing);
}

function nextChar() {
    charShowing++;
    if (charShowing > chars.length) charShowing = 1;

    charMove(charShowing);
}

function prevChar() {
    charShowing--;
    if (charShowing < 1) charShowing = chars.length;

    charMove(charShowing);
}

function play() {
    const char = charShowing - 1;

    chooseChar(chars[char].name.toLowerCase())
}