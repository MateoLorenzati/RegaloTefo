const safeImage = document.getElementById("safe");
const giftImage = document.getElementById("gift");
const cardImage = document.getElementById("card");
const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlock-btn");
const passwordContainer = document.getElementById("password-container");
const cardText = document.getElementById("card-text");

unlockButton.addEventListener("click", () => {
    passwordContainer.style.display = "none";
    safeImage.style.display = "none";
    giftImage.style.display = "block";
});

function xorEncryptDecrypt(text, password) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ password.charCodeAt(i % password.length));
    }
    return result;
}

giftImage.addEventListener("click", () => {
    const flippable = document.getElementById("flippable");

    flippable.classList.add("flipped");

    giftImage.style.display = "none";
    cardImage.style.display = "block";
    cardText.style.display = "block"; 

    const key = xorEncryptDecrypt('F<R#1HT)-1"B,4S8.', passwordInput.value)

    cardText.textContent = key;
});