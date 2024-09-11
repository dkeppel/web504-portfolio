// Declaring constant variables, Retrieves elements from HTML by there ID so that they can be further manipulated by the JS
const model = document.getElementById("model");
const showModel = document.getElementById("show-model");
const modelClose = document.getElementById("model-close");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarkContainer = document.getElementById("bookmark-container"); 

let bookmarks = [];

function showModel() {
    model.classList.add("show-model")
    websiteNameEl.focus()
}

modelClose.addEventListener("click", () => {
    model.classList.remove("show-model")
});
