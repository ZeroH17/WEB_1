
const filterIcon = document.getElementById("filterIcon");
const filterBox = document.getElementById("filterBox");
const btnLoai = document.getElementById("btnLoai");
const btnGia = document.getElementById("btnGia");
const filterLoai = document.getElementById("filterLoai");
const filterGia = document.getElementById("filterGia");
const searchInput = document.getElementById("searchInput");
const priceRange = document.getElementById("priceRange");
const maxPrice = document.getElementById("maxPrice");
const tagButtons = document.querySelectorAll(".tag");

filterIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  filterBox.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!filterBox.contains(e.target) && !filterIcon.contains(e.target)) {
    filterBox.classList.remove("active");
  }
});

btnLoai.addEventListener("click", () => {
  btnLoai.classList.add("active");
  btnGia.classList.remove("active");
  filterLoai.classList.remove("hidden");
  filterGia.classList.add("hidden");
});
btnGia.addEventListener("click", () => {
  btnGia.classList.add("active");
  btnLoai.classList.remove("active");
  filterGia.classList.remove("hidden");
  filterLoai.classList.add("hidden");
});

priceRange.addEventListener("input", () => {
  maxPrice.textContent = Number(priceRange.value).toLocaleString("vi-VN");
  applyFilters();
});
searchInput.addEventListener("input", () => {
  applyFilters();
});
tagButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tagButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
});
function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedTag = document.querySelector(".tag.active");
  const categoryFilter = selectedTag ? selectedTag.textContent.trim() : null;
  const maxPriceValue = parseInt(priceRange.value);

  const categoryBtns = document.querySelectorAll(".list-product");
  categoryBtns.forEach((btn) => btn.classList.remove("active"));

  if (window.filterProducts) {
    window.filterProducts(keyword, categoryFilter, maxPriceValue);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
     
      const totalText = document.getElementById("cartTotalPrice").textContent;
      const total = totalText.replace(/[^\d]/g, ""); 
      localStorage.setItem("cartTotal", total);
      window.location.href = "payment.html";
    });
  }
});

