const tabButtons = document.querySelectorAll(".tab-btn");
const galleryGrid = document.querySelector(".grid-galerija");
const allItems = Array.from(document.querySelectorAll(".galerija-item"));

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    galleryGrid.innerHTML = "";

    const filteredItems = allItems.filter(item => filter === "all" || item.dataset.category === filter);

    filteredItems.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = "translateY(20px)";
      galleryGrid.appendChild(item);

      setTimeout(() => {
        item.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, 80 * index);
    });
  });
});

// Brojač slika
const updateCounts = () => {
  tabButtons.forEach(btn => {
    const filter = btn.dataset.filter;
    const countSpan = btn.querySelector(".count");
    let count = allItems.filter(item => filter === "all" || item.dataset.category === filter).length;
    countSpan.textContent = `(${count})`;
  });
};

updateCounts();


