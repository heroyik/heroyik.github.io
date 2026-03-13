document.addEventListener("DOMContentLoaded", () => {
  const themeBtns = document.querySelectorAll(".theme-btn");
  const html = document.documentElement;
  const heroCollage = document.querySelector(".hero-collage");

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

  const heroTiles = document.querySelectorAll(".hero-collage .tile");
  if (heroTiles.length > 0) {
    const imageData = [
      { src: "bg.jpg", url: "https://heroyik.github.io/fsijc" },
      {
        src: "Screenshot_20260223_142955_Chrome.jpg",
        url: "https://heroyik.github.io/hola-a1a2/",
      },
      { src: "Screenshot_20260313_221913_Chrome.jpg", url: "https://heroyik.github.io/holavoca/v2" }, // No new src provided, keeping existing.
      { src: "Screenshot_20260223_143245_Chrome.jpg", url: "https://heroyik.github.io/4SeasonsShop" },
      { src: "Screenshot_20260223_143310_Chrome.jpg", url: "https://heroyik.github.io/col_eng" },
      { src: "Screenshot_20260223_143326_Chrome.jpg", url: "https://heroyik.github.io/finrep" },
      { src: "Screenshot_20260223_143441_Chrome.jpg", url: "https://heroyik.github.io/tetmin" },
      { src: "Screenshot_20260223_151436_Chrome.jpg", url: "https://spanish-shadowing-coach-623754443070.us-west1.run.app/" },
      { src: "Screenshot_20260223_151442_Chrome.jpg", url: "https://vozviva-spanish-mastery-mp3-671064663335.us-west1.run.app/" },
      { src: "Screenshot_20260312_011638_Chrome.jpg", url: "https://heroyik.github.io/kamivoca" },
    ];

    // Fisher-Yates shuffle
    for (let i = imageData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageData[i], imageData[j]] = [imageData[j], imageData[i]];
    }

    // Assign shuffled images and URLs to tiles
    heroTiles.forEach((tile, index) => {
      if (index < imageData.length) {
        const data = imageData[index];
        tile.style.backgroundImage = `url('/assets/images/${data.src}')`;
        tile.style.cursor = "pointer";

        // Remove old listeners if any (though usually fine on freshly querySelected elements)
        const newTile = tile.cloneNode(true);
        tile.parentNode.replaceChild(newTile, tile);

        newTile.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`Navigating to: ${data.url}`);
          window.location.href = data.url;
        });
      }
    });
  }

  if (heroCollage) {
    let settleTimer;
    let isPinned = false;

    const setExploded = (nextState) => {
      window.clearTimeout(settleTimer);
      heroCollage.classList.toggle("is-exploded", nextState);
    };

    const explode = () => {
      setExploded(true);
    };

    const settle = () => {
      if (isPinned) {
        return;
      }

      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        setExploded(false);
      }, 1800);
    };

    heroCollage.addEventListener("mouseenter", () => {
      if (isPinned) {
        return;
      }
      explode();
    });

    heroCollage.addEventListener("mouseleave", settle);
    heroCollage.addEventListener("focusin", explode);
    heroCollage.addEventListener("focusout", settle);
    heroCollage.addEventListener("click", (event) => {
      if (event.target.closest(".tile")) {
        return;
      }

      isPinned = !isPinned;
      setExploded(isPinned);
    });

    heroCollage.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      isPinned = !isPinned;
      setExploded(isPinned);
    });
  }
});
