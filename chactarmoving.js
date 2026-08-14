const character= [
 "media/fighter.svg",
 "media/wizard.svg",
 "media/warlock.svg",
]

let currentIndex = 0;

function testCharUpdateImage() {
const imgElement = document.getElementById("charImg");
imgElement.src = character[currentIndex];
console.log("Current character index: " + currentIndex);
console.log("Current character image: " + character[currentIndex]);
}

function nextChar() {
    currentIndex++;
    if (currentIndex > character.length - 1) {
        currentIndex = 0;
    }
    testCharUpdateImage();
}

function prevChar() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = character.length - 1;
    }
    testCharUpdateImage();
}