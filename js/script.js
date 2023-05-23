var encryptButton = document.querySelector(".boton-encriptar");
var decryptButton = document.querySelector(".boton-desencriptar");
var textInputContainer = document.querySelector(".input-container");
var vowels = ["a","e","i","o","u"];
var encryptedVowels = ["ai", "enter", "imes", "ober", "ufat"];
/* var encryptVowels = {
    a : "ai",
    e : "enter",
    i : "imes",
    o : "ober",
    u : "ufat",
}; */

encryptButton.onclick = encryptText;
decryptButton.onclick = decryptText;

function encryptText() {
    let text = textInputContainer.value;
    let textArray = text.split("");
    var encryptedText = ""

    textArray.forEach(element => {
        if(vowels.includes(element)){
            textArray[textArray.indexOf(element)] = encryptedVowels[vowels.indexOf(element)]
        }
    });

    encryptedText = textArray.join("")

    console.log(encryptedText)
}

function decryptText() {
    let text = textInputContainer.value;
    var decryptedText = "";

    for(var j = 0; j < encryptedVowels.length; j++){
        
        decryptedText = text.replaceAll(encryptedVowels[j],vowels[j]);
        text = decryptedText;
    };

    console.log(decryptedText);
    textInputContainer.value = decryptedText;
}

/*
function altEncryptText() {
    const text = textInputContainer.value;
    var encryptedText = "";
    let arr = Array.from(text);

    for(let i = 0; i < arr.length; i++){
        if (vowels.includes(arr[i])) {
            encryptedText = encryptedText + encryptVowels[arr[i]];
        }
        else{
            encryptedText = encryptedText + arr[i];
        }
    }
} */