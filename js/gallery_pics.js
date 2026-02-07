(function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");
  const leftArrow = document.querySelector(".lightbox-arrow.left");
  const rightArrow = document.querySelector(".lightbox-arrow.right");
  const thumbsContainer = document.querySelector(".lightbox-thumbs");

  let currentIndex = 0;

  function getVisibleImages() {
    return Array.from(document.querySelectorAll(".grid-galerija .galerija-img"));
  }

  function renderThumbs(images) {
    thumbsContainer.innerHTML = "";

    images.forEach((img, index) => {
      const thumb = document.createElement("img");
      thumb.src = img.src;

      if (index === currentIndex) {
        thumb.classList.add("active");
      }

      thumb.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = index;
        updateMainImage(images);
      });

      thumbsContainer.appendChild(thumb);
    });
  }

  function updateMainImage(images) {
    lightboxImg.src = images[currentIndex].src;

    const thumbs = thumbsContainer.querySelectorAll("img");
    thumbs.forEach((t, i) => {
      t.classList.toggle("active", i === currentIndex);
    });
  }
  

  // Otvaranje lightbox-a
  document.querySelector(".grid-galerija").addEventListener("click", (e) => {
    if (e.target.classList.contains("galerija-img")) {
      const images = getVisibleImages();
      currentIndex = images.indexOf(e.target);
      lightboxImg.src = e.target.src;
      renderThumbs(images);
      lightbox.style.display = "flex";
    }
  });

  // Zatvaranje
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  function showNext() {
    const images = getVisibleImages();
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage(images);
  }

  function showPrev() {
    const images = getVisibleImages();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage(images);
  }

  rightArrow.addEventListener("click", (e) => {
    e.stopPropagation();
    showNext();
  });

  leftArrow.addEventListener("click", (e) => {
    e.stopPropagation();
    showPrev();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") lightbox.style.display = "none";
    }

  });

  // Swipe podrška
let touchStartX = 0;
let touchEndX = 0;

if (lightboxImg) {
  lightboxImg.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  lightboxImg.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}

function handleSwipe() {
  let diff = touchStartX - touchEndX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      showNext(); // sledeća
    } else {
      showPrev(); // prethodna
    }
  }
}
}

)();
