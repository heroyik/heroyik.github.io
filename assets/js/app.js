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
      { src: "llem_preview.png", url: "https://github.com/heroyik/llem" },
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

    // Ensure LLeM is always included: pin it, shuffle the rest, and take the top 9
    const pinned = imageData[0];
    const pool = imageData.slice(1);
    
    // Fisher-Yates shuffle for the pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Combine pinned item with the first 9 from the shuffled pool
    const finalSelection = [pinned, ...pool.slice(0, 9)];

    // Assign to tiles
    heroTiles.forEach((tile, index) => {
      if (index < finalSelection.length) {
        const data = finalSelection[index];
        tile.style.backgroundImage = `url('/assets/images/${data.src}')`;
        tile.href = data.url;
        tile.style.cursor = "pointer";

        // Remove old listeners if any
        const newTile = tile.cloneNode(true);
        tile.parentNode.replaceChild(newTile, tile);

        newTile.addEventListener("click", (e) => {
          // Prevent tile click from bubbling up to heroCollage (which toggles isPinned)
          e.stopPropagation();
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
