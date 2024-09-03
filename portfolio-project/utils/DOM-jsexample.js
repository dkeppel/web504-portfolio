function changeTextColour() {
    let changeColour = document.getElementById("exampleText");
    changeColour.style.color = "green";
}

function changeTextSize() {
    let changeSize = document.getElementsByTagName("exampleText");
    changeSize.style.fontSize = "32px";
}

function changeTextFamily() {
    let changeFontFamily = document.getElementsByClassName("exampleText");
    changeFontFamily.style.fontFamily = "Arial";
}

function changeText() {
    let changeInnerText = document.getElementById("exampleText");
    changeInnerText.innerHTML = "<p>You Changed the text!</p>"
}