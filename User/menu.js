// ================== BỘ LỌC SẢN PHẨM ==================
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

// Chuyển tab lọc loại / giá
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

// Áp dụng lọc
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

// ================== XỬ LÝ GIỎ HÀNG, AVATAR, USERNAME ==================
document.addEventListener("DOMContentLoaded", () => {
  // Lấy thông tin người dùng hiện tại
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!currentUser || !currentUser.username) return;

  // Tạo key riêng theo username
  const cartKey = `cartItems_${currentUser.username}`;
  const totalKey = `cartTotal_${currentUser.username}`;
  const avatarKey = `avatar_${currentUser.username}`;

  // ================== CHECKOUT ==================
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
      if (!cart.length) {
        alert("Giỏ hàng đang trống!");
        return;
      }

      const totalText = document.getElementById("cartTotalPrice")?.textContent || "0";
      const total = parseInt(totalText.replace(/[^\d]/g, ""), 10);

      localStorage.setItem(totalKey, total);
      window.location.href = "payment.html";
    });
  }

  // ================== AVATAR + USERNAME ==================
  const avatar = document.querySelector(".avatar") || document.querySelector("#userAvatar");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const currentPage = window.location.pathname;
  const isInfoUserPage = currentPage.includes("info-user.html");

  // Hiển thị avatar riêng từng user
  const savedAvatar = localStorage.getItem(avatarKey);
  if (avatar && savedAvatar) {
    avatar.style.backgroundImage = `url('${savedAvatar}')`;
    avatar.style.backgroundSize = "cover";
    avatar.style.backgroundPosition = "center center";
    avatar.style.backgroundRepeat = "no-repeat";
  }

  // Đổi avatar riêng cho từng user
  if (avatar && isInfoUserPage) {
    avatar.addEventListener("click", () => {
      const imageUrl = prompt("Nhập link ảnh bạn muốn đặt làm avatar:");
      if (imageUrl && imageUrl.trim() !== "") {
        const url = imageUrl.trim();
        localStorage.setItem(avatarKey, url);
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

  // ================== GIỎ HÀNG ==================
  renderCartUI();

  // Lắng nghe thêm món vào giỏ
  document.addEventListener("click", (e) => {
    if (e.target.closest(".cart-btn")) {
      const item = e.target.closest(".production-item");
      const name = item.querySelector("p").textContent;
      const priceText = item.querySelector("span").textContent.replace(/[^\d]/g, "");
      const img = item.querySelector("img").src;

      const price = parseInt(priceText);
      const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");

      const existing = cart.find((p) => p.name === name);
      if (existing) {
        existing.qty += 1;
        existing.total = existing.qty * price;
      } else {
        cart.push({ name, price, qty: 1, total: price, img });
      }

      localStorage.setItem(cartKey, JSON.stringify(cart));
      renderCartUI();
      alert(`Đã thêm "${name}" vào giỏ hàng!`);
    }
  });

  // ================== HIỂN THỊ GIỎ HÀNG ==================
  function renderCartUI() {
    const cartContainer = document.getElementById("cartItems");
    const totalLabel = document.getElementById("cartTotalPrice");
    if (!cartContainer || !totalLabel) return;

    const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
    cartContainer.innerHTML = "";

    if (!cart.length) {
      totalLabel.textContent = "0₫";
      return;
    }

    cart.forEach((item, i) => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <span class="cart-item-name">${item.name}</span>
        <div class="cart-item-controls">
          <button class="cart-minus" data-index="${i}">−</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button class="cart-plus" data-index="${i}">+</button>
        </div>
        <span class="cart-item-total">${item.total.toLocaleString()}₫</span>
      `;
      cartContainer.appendChild(div);
    });

    const total = cart.reduce((sum, p) => sum + p.total, 0);
    totalLabel.textContent = total.toLocaleString() + "₫";
  }

  // ================== CẬP NHẬT SỐ LƯỢNG ==================
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-minus") || e.target.classList.contains("cart-plus")) {
      const index = e.target.dataset.index;
      let cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
      if (!cart[index]) return;

      if (e.target.classList.contains("cart-plus")) {
        cart[index].qty++;
      } else if (cart[index].qty > 1) {
        cart[index].qty--;
      } else {
        cart.splice(index, 1); // xóa nếu = 1
      }

      cart.forEach((item) => (item.total = item.price * item.qty));
      localStorage.setItem(cartKey, JSON.stringify(cart));
      renderCartUI();
    }
  });
});
