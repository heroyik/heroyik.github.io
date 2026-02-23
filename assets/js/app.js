document.addEventListener("DOMContentLoaded", () => {
  const themeBtns = document.querySelectorAll(".theme-btn");
  const html = document.documentElement;

  // Load saved theme or default to minimalist
  const savedTheme = localStorage.getItem("theme") || "minimalist";
  setTheme(savedTheme);

  themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      setTheme(theme);
    });
  });

  function setTheme(theme) {
    // Update html attribute for CSS variables
    if (theme === "minimalist") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", theme);
    }

    // Update active button state
    themeBtns.forEach((btn) => {
      if (btn.dataset.theme === theme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Save preference
    localStorage.setItem("theme", theme);
  }

  // Shuffle and assign hero collage images
  const heroTiles = document.querySelectorAll(".hero-collage .tile");
  if (heroTiles.length > 0) {
    const images = [
      "bg.jpg",
      "Screenshot_20260223_142955_Chrome.jpg",
      "Screenshot_20260223_143212_Chrome.jpg",
      "Screenshot_20260223_143245_Chrome.jpg",
      "Screenshot_20260223_143310_Chrome.jpg",
      "Screenshot_20260223_143326_Chrome.jpg",
      "Screenshot_20260223_143441_Chrome.jpg",
      "Screenshot_20260223_151436_Chrome.jpg",
      "Screenshot_20260223_151442_Chrome.jpg",
    ];

    // Fisher-Yates shuffle
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    // Assign shuffled images to tiles
    heroTiles.forEach((tile, index) => {
      if (index < images.length) {
        tile.style.backgroundImage = `url('/assets/images/${images[index]}')`;
      }
    });
  }
});
