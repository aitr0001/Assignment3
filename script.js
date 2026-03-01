const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");
const button = document.getElementById("favBtn");
let saved = false;

async function loadNASAImage() {
  try {
    const res = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"));
    const json = await res.json();
    const data = JSON.parse(json.contents);
    
    title.textContent = data.title;
    description.textContent = data.explanation;

    if (data.media_type === "video") {
      image.style.display = "none";
      const link = document.createElement("a");
      link.href = data.url;
      link.target = "_blank";
      link.textContent = "▶ Click to watch today's NASA video";
      link.style.cssText = "display:block;color:#60a5fa;font-size:18px;margin:20px 0;";
      image.parentNode.insertBefore(link, image);
    } else {
      image.src = data.url;
      image.style.display = "block";
    }

  } catch (error) {
    title.textContent = "Failed to load NASA image.";
    console.error(error);
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
