var encryptButton = document.querySelector(".boton-encriptar");
var textInputContainer = document.querySelector(".input-container")

encryptButton.onclick = encryptText;

var vowels = ["a","e","i","o","u"]

var encryptVowels = {
    a : "ai",
    e : "enter",
    i : "imes",
    o : "ober",
    u : "ufat",
}

function encryptText() {
    const text = textInputContainer.value;
    var encryptedText = ""
    let arr = Array.from(text)

    for(let i = 0; i < arr.length; i++){
        if (vowels.includes(arr[i])) {
            encryptedText = encryptedText + encryptVowels[arr[i]];
        }
        else{
            encryptedText = encryptedText + arr[i]
        }
    };

    
    console.log(encryptedText)
    textInputContainer.value = ""
}