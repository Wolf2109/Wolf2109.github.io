// ===== Filtriranje + paginacija =====
const tabButtons = document.querySelectorAll(".tab-btn");
const galleryGrid = document.querySelector(".grid-galerija");
const allItems = Array.from(document.querySelectorAll(".galerija-item"));

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

let currentFilter = "all";
let cP = 1;
const itemsPerPage = 10;

function renderGallery() {
  galleryGrid.innerHTML = "";

  const filteredItems = allItems.filter(item =>
    currentFilter === "all" || item.dataset.category === currentFilter
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  if (cP > totalPages) cP = totalPages || 1;

  const start = (cP - 1) * itemsPerPage;
  const pageItems = filteredItems.slice(start, start + itemsPerPage);

  pageItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    galleryGrid.appendChild(item);

    setTimeout(() => {
      item.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 80 * index);
  });
  
  // Update paginacije
  if (pageInfo && prevBtn && nextBtn) {
    pageInfo.textContent = `${cP} / ${totalPages || 1}`;
    prevBtn.disabled = cP === 1;
    nextBtn.disabled = cP === totalPages;
  }
}

// Tab klik
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    cP = 1;
    renderGallery();
  });
});

// Dugmad za stranicu
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    cP--;
    renderGallery();
  });

  nextBtn.addEventListener("click", () => {
    cP++;
    renderGallery();
  });
  galleryGrid.classList.add("ready");
}

// Brojač slika
const updateCounts = () => {
  tabButtons.forEach(btn => {
    const filter = btn.dataset.filter;
    const countSpan = btn.querySelector(".count");
    let count = allItems.filter(item =>
      filter === "all" || item.dataset.category === filter
    ).length;
    countSpan.textContent = `(${count})`;
  });
};

updateCounts();
renderGallery();

// ===== Mobilni swipe za hover tekst =====
const galleryItems = document.querySelectorAll(".galerija-item");

galleryItems.forEach(item => {
  let startY = 0;
  let endY = 0;

  item.addEventListener("touchstart", e => {
    startY = e.touches[0].clientY;
  }, { passive: true });

  item.addEventListener("touchmove", e => {
    endY = e.touches[0].clientY;
  }, { passive: true });

  item.addEventListener("touchend", () => {
    const diff = startY - endY;

    if (diff > 30 && window.innerWidth <= 768) {
      item.classList.add("active");

      setTimeout(() => {
        item.classList.add("fade-out");
        setTimeout(() => {
          item.classList.remove("active", "fade-out");
        }, 500);
      }, 3000);
    }
  });

  item.addEventListener("click", () => {
    if (window.innerWidth <= 768 && item.classList.contains("active")) {
      item.classList.add("fade-out");
      setTimeout(() => {
        item.classList.remove("active", "fade-out");
      }, 500);
    }
  });
});

// ===== Onemogućavanje skrola kada je lightbox otvoren =====

if (lightbox) {
  const observer = new MutationObserver(() => {
    if (lightbox.classList.contains("open") || lightbox.style.display === "flex") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  observer.observe(lightbox, {
    attributes: true,
    attributeFilter: ["class", "style"]
  });
}
