const products = [
  // --- Gà Rán ---
  { id: 1, name: "Gà Rán Truyền Thống", category: "Gà Rán", price: 45000, img: "/image/ga1.png" },
  { id: 2, name: "Gà Rán Cay", category: "Gà Rán", price: 48000, img: "/image/ga2.png" },
  { id: 3, name: "Gà Rán Giòn", category: "Gà Rán", price: 47000, img: "/image/ga3.png" },
  { id: 4, name: "Gà Rán Mật Ong", category: "Gà Rán", price: 49000, img: "/image/ga4.png" },
  { id: 5, name: "Gà Rán Tỏi", category: "Gà Rán", price: 50000, img: "/image/ga5.png" },
  { id: 6, name: "Gà Rán Sốt BBQ", category: "Gà Rán", price: 52000, img: "/image/ga6.png" },
  { id: 7, name: "Gà Rán Cay Hàn", category: "Gà Rán", price: 53000, img: "/image/ga7.png" },
  { id: 8, name: "Gà Rán Tứ Xuyên", category: "Gà Rán", price: 54000, img: "/image/ga8.png" },
  { id: 9, name: "Gà Rán Mù Tạt", category: "Gà Rán", price: 55000, img: "/image/ga9.png" },
  { id: 10, name: "Gà Rán Chanh", category: "Gà Rán", price: 56000, img: "/image/ga10.png" },
  { id: 11, name: "Gà Rán Phô Mai", category: "Gà Rán", price: 57000, img: "/image/ga11.png" },
  { id: 12, name: "Gà Rán Sốt Cay", category: "Gà Rán", price: 58000, img: "/image/ga12.png" },

  // --- Gà Phô Mai ---
  { id: 13, name: "Gà Phô Mai Tan Chảy", category: "Gà Phô Mai", price: 55000, img: "image/ga_phomai_tanchay.jpg" },
  { id: 14, name: "Gà Phô Mai BBQ", category: "Gà Phô Mai", price: 56000, img: "image/ga_phomai_bbq.jpg" },
  { id: 15, name: "Gà Phô Mai Cay", category: "Gà Phô Mai", price: 57000, img: "image/ga_phomai_cay.jpg" },
  { id: 16, name: "Gà Phô Mai Hàn Quốc", category: "Gà Phô Mai", price: 58000, img: "image/ga_phomai_hanquoc.jpg" },
  { id: 17, name: "Gà Phô Mai Trứng Muối", category: "Gà Phô Mai", price: 59000, img: "image/ga_phomai_trungmuoi.jpg" },
  { id: 18, name: "Gà Phô Mai Mật Ong", category: "Gà Phô Mai", price: 60000, img: "image/ga_phomai_matong.jpg" },
  { id: 19, name: "Gà Phô Mai Giòn", category: "Gà Phô Mai", price: 61000, img: "image/ga_phomai_gion.jpg" },
  { id: 20, name: "Gà Phô Mai Bơ Tỏi", category: "Gà Phô Mai", price: 62000, img: "image/ga_phomai_botoi.jpg" },
  { id: 21, name: "Gà Phô Mai Tỏi Ớt", category: "Gà Phô Mai", price: 63000, img: "image/ga_phomai_toiot.jpg" },
  { id: 22, name: "Gà Phô Mai Cay Nồng", category: "Gà Phô Mai", price: 64000, img: "image/ga_phomai_caynong.jpg" },
  { id: 23, name: "Gà Phô Mai Xông Khói", category: "Gà Phô Mai", price: 65000, img: "image/ga_phomai_xongkhoi.jpg" },
  { id: 24, name: "Gà Phô Mai Tiêu Đen", category: "Gà Phô Mai", price: 66000, img: "image/ga_phomai_tieuden.jpg" },

  // --- Mì Ý ---
  { id: 25, name: "Mì Ý Sốt Bò Bằm", category: "Mì Ý", price: 70000, img: "image/my_y_bo.jpg" },
  { id: 26, name: "Mì Ý Sốt Kem Nấm", category: "Mì Ý", price: 72000, img: "image/my_y_kemnam.jpg" },
  { id: 27, name: "Mì Ý Hải Sản", category: "Mì Ý", price: 75000, img: "image/my_y_haisan.jpg" },
  { id: 28, name: "Mì Ý Gà Nướng", category: "Mì Ý", price: 73000, img: "image/my_y_ganuong.jpg" },
  { id: 29, name: "Mì Ý Thịt Xông Khói", category: "Mì Ý", price: 76000, img: "image/my_y_xongkhoi.jpg" },
  { id: 30, name: "Mì Ý Sốt Cà", category: "Mì Ý", price: 72000, img: "image/my_y_sotca.jpg" },
  { id: 31, name: "Mì Ý Tôm", category: "Mì Ý", price: 77000, img: "image/my_y_tom.jpg" },
  { id: 32, name: "Mì Ý Chay", category: "Mì Ý", price: 68000, img: "image/my_y_chay.jpg" },
  { id: 33, name: "Mì Ý Sốt Trắng", category: "Mì Ý", price: 74000, img: "image/my_y_trang.jpg" },
  { id: 34, name: "Mì Ý Sốt Kem Tôm", category: "Mì Ý", price: 78000, img: "image/my_y_kemtom.jpg" },
  { id: 35, name: "Mì Ý Bò Phô Mai", category: "Mì Ý", price: 79000, img: "image/my_y_bophomai.jpg" },
  { id: 36, name: "Mì Ý Gà Phô Mai", category: "Mì Ý", price: 80000, img: "image/my_y_gapho.jpg" },

  // --- PIZZA ---
  { id: 37, name: "Pizza Hải Sản", category: "PIZZA", price: 89000, img: "image/pizza_hai_san.jpg" },
  { id: 38, name: "Pizza Bò Phô Mai", category: "PIZZA", price: 95000, img: "image/pizza_bo.jpg" },
  { id: 39, name: "Pizza Gà Nướng", category: "PIZZA", price: 92000, img: "image/pizza_ganuong.jpg" },
  { id: 40, name: "Pizza Thập Cẩm", category: "PIZZA", price: 97000, img: "image/pizza_thapcam.jpg" },
  { id: 41, name: "Pizza Xúc Xích", category: "PIZZA", price: 91000, img: "image/pizza_xucxich.jpg" },
  { id: 42, name: "Pizza Phô Mai", category: "PIZZA", price: 90000, img: "image/pizza_phomai.jpg" },
  { id: 43, name: "Pizza Trứng Muối", category: "PIZZA", price: 96000, img: "image/pizza_trungmuoi.jpg" },
  { id: 44, name: "Pizza Tôm Mực", category: "PIZZA", price: 97000, img: "image/pizza_tommuc.jpg" },
  { id: 45, name: "Pizza Bò Cay", category: "PIZZA", price: 98000, img: "image/pizza_bocay.jpg" },
  { id: 46, name: "Pizza Rau Củ", category: "PIZZA", price: 87000, img: "image/pizza_raucu.jpg" },
  { id: 47, name: "Pizza Chay", category: "PIZZA", price: 86000, img: "image/pizza_chay.jpg" },
  { id: 48, name: "Pizza Gà Phô Mai", category: "PIZZA", price: 94000, img: "image/pizza_gapho.jpg" },
];

// Hiển thị phân trang

const itemsPerPage = 3;
let currentCategory = "Gà Rán";
let currentPage = 1;

const listContainer = document.getElementById("productList");
const categoryBtns = document.querySelectorAll(".list-product");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function renderProducts() {
  const filtered = products.filter(p => p.category === currentCategory);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(start, start + itemsPerPage);

  listContainer.innerHTML = pageItems.map(p => `
    <div class="production-item">
      <img src="${p.img}" alt="${p.name}">
      <p>${p.name}</p>
      <hr>
      <span>${p.price.toLocaleString()}₫</span>
      <img src="/image/cart.svg" alt="Giỏ hàng" class="cart-icon">
    </div>
  `).join("");

  prevBtn.style.opacity = currentPage === 1 ? "0.3" : "1";
  nextBtn.style.opacity = currentPage === totalPages ? "0.3" : "1";
}

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.textContent.trim();
    currentPage = 1;
    renderProducts();
  });
});

prevBtn.addEventListener("click", () => {
  currentPage--;
  renderProducts();
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  renderProducts();
});

categoryBtns[0].classList.add("active");
renderProducts();