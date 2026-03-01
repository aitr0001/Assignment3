const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");
const button = document.getElementById("favBtn");
let saved = false;

async function loadNASAImage() {
  try {
    const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs=true&date=2026-02-28";
    const res = await fetch(url);
    const data = await res.json();

    title.textContent = data.title;
    description.textContent = data.explanation;

    if (data.media_type === "video") {
      image.src = data.thumbnail_url;
    } else {
      image.src = data.hdurl || data.url;
    }
    image.style.display = "block";

  } catch (error) {
    image.src = "https://apod.nasa.gov/apod/image/2602/GreatRedSpot_Webb_960.jpg";
    title.textContent = "Jupiter - Great Red Spot";
    description.textContent = "Image from NASA APOD.";
    image.style.display = "block";
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
```

---

### Ce que ce code fait différemment:
- `thumbs=true` → si vidéo, affiche la **miniature** au lieu de bloquer ✅
- Si tout échoue → affiche une **image de secours** de Jupiter ✅
- Plus jamais d'écran vide! ✅

---

Commit message:
```
Fix image loading with thumbnail fallback
