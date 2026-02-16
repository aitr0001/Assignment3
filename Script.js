const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");
const button = document.getElementById("favBtn");

let saved = false;

async function loadNASAImage() {
try {
const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
const data = await res.json();

image.src = data.url;
title.textContent = data.title;
description.textContent = data.explanation;

} catch (error) {
title.textContent = "Failed to load NASA image.";
}
}

button.addEventListener("click", () => {
saved = !saved;

if (saved) {
button.textContent = "Saved ⭐";
button.style.backgroundColor = "#16a34a";
} else {
button.textContent = "Add to Favorites ⭐";
button.style.backgroundColor = "#2563eb";
}
});

loadNASAImage();
