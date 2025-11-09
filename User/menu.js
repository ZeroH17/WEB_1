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

// Toggle filter box
filterIcon?.addEventListener("click", (e) => {
  e.stopPropagation();
  filterBox.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!filterBox?.contains(e.target) && !filterIcon?.contains(e.target)) {
    filterBox?.classList.remove("active");
  }
});

// Switch between filter type
btnLoai?.addEventListener("click", () => {
  btnLoai.classList.add("active");
  btnGia.classList.remove("active");
  filterLoai.classList.remove("hidden");
  filterGia.classList.add("hidden");
});
btnGia?.addEventListener("click", () => {
  btnGia.classList.add("active");
  btnLoai.classList.remove("active");
  filterGia.classList.remove("hidden");
  filterLoai.classList.add("hidden");
});

// Filters
priceRange?.addEventListener("input", () => {
  maxPrice.textContent = Number(priceRange.value).toLocaleString("vi-VN");
  applyFilters();
});
searchInput?.addEventListener("input", applyFilters);
tagButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tagButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
});

function applyFilters() {
  const keyword = searchInput?.value.trim().toLowerCase() || "";
  const selectedTag = document.querySelector(".tag.active");
  const categoryFilter = selectedTag ? selectedTag.textContent.trim() : null;
  const maxPriceValue = parseInt(priceRange?.value || "0", 10);

  const categoryBtns = document.querySelectorAll(".list-product");
  categoryBtns.forEach((btn) => btn.classList.remove("active"));

  if (window.filterProducts) {
    window.filterProducts(keyword, categoryFilter, maxPriceValue);
  }
}

// Checkout
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      if (!cart.length) {
        alert("Giỏ hàng đang trống!");
        return;
      }

      const totalText = document.getElementById("cartTotalPrice")?.textContent || "0";
      const total = parseInt(totalText.replace(/[^\d]/g, ""), 10);
      localStorage.setItem("cartTotal", total);
      window.location.href = "payment.html";
    });
  }

  // -------------------- Avatar + Username --------------------
  const avatar = document.querySelector(".avatar") || document.querySelector("#userAvatar");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const savedAvatar = localStorage.getItem("avatarImage");
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const currentPage = window.location.pathname;
  const isInfoUserPage = currentPage.includes("info-user.html");

  // Hiển thị avatar nếu có
  if (avatar && savedAvatar) {
    avatar.style.backgroundImage = `url('${savedAvatar}')`;
    avatar.style.backgroundSize = "cover";
    avatar.style.backgroundPosition = "center center";
    avatar.style.backgroundRepeat = "no-repeat";
  }

  // Cho phép đổi avatar chỉ trong info-user.html
  if (avatar && isInfoUserPage) {
    avatar.addEventListener("click", () => {
      const imageUrl = prompt("Nhập link ảnh bạn muốn đặt làm avatar:");
      if (imageUrl && imageUrl.trim() !== "") {
        const url = imageUrl.trim();
        localStorage.setItem("avatarImage", url);
        avatar.style.backgroundImage = `url('${url}')`;
        avatar.style.backgroundSize = "cover";
        avatar.style.backgroundPosition = "center center";
        avatar.style.backgroundRepeat = "no-repeat";
      } else {
        alert("Bạn chưa nhập link ảnh!");
      }
    });
  }

  // Hiển thị tên người dùng
  if (userNameDisplay && currentUser?.username) {
    userNameDisplay.textContent = currentUser.username;
  }
});
