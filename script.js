const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");
const button = document.getElementById("favBtn");
let saved = false;

const apodData = [
  {
    title: "The Pillars of Creation",
    description: "The Eagle Nebula's famous pillars of creation captured by the James Webb Space Telescope.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/800px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg"
  },
  {
    title: "Andromeda Galaxy",
    description: "The Andromeda Galaxy, our nearest large galactic neighbor, located 2.537 million light years from Earth.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/800px-Andromeda_Galaxy_%28with_h-alpha%29.jpg"
  },
  {
    title: "Saturn's Rings",
    description: "A stunning view of Saturn and its magnificent ring system captured by the Cassini spacecraft.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg"
  }
];

function loadNASAImage() {
  const today = new Date().getDate();
  const data = apodData[today % apodData.length];
  title.textContent = data.title;
  description.textContent = data.description;
  image.src = data.url;
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
