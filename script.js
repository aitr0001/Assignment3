window.onload = function() {
  document.getElementById("spaceImage").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/800px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg";
  document.getElementById("spaceTitle").textContent = "The Pillars of Creation";
  document.getElementById("spaceDescription").textContent = "The Eagle Nebula's famous pillars of creation captured by the James Webb Space Telescope in near-infrared light.";

  var saved = false;
  document.getElementById("favBtn").onclick = function() {
    saved = !saved;
    if (saved) {
      this.textContent = "Saved ⭐";
      this.style.backgroundColor = "#16a34a";
    } else {
      this.textContent = "Add to Favorites ⭐";
      this.style.backgroundColor = "#2563eb";
    }
  };
};
