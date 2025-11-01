
const filterIcon = document.getElementById("filterIcon");
const filterBox = document.getElementById("filterBox");
const btnLoai = document.getElementById("btnLoai");
const btnGia = document.getElementById("btnGia");
const filterLoai = document.getElementById("filterLoai");
const filterGia = document.getElementById("filterGia");

filterIcon.addEventListener("click", () => {
    filterBox.classList.toggle("hidden");
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

const priceRange = document.getElementById("priceRange");
const maxPrice = document.getElementById("maxPrice");

priceRange.addEventListener("input", () => {
    maxPrice.textContent = Number(priceRange.value).toLocaleString("vi-VN");
});

