// ========================= MENU ADMIN SCRIPT =========================
// Giữ nguyên toàn bộ chức năng, chỉ format lại cho dễ đọc.

document.addEventListener('DOMContentLoaded', function () {
  // ================== DỮ LIỆU MÓN ĂN HOÀN CHỈNH ==================
const defaultData = {
  "Gà giòn": [
    { id: 1, name: "Gà Rán Truyền Thống", price: 45000, img: "../image/ga1.png" },
    { id: 2, name: "Gà Rán Cay", price: 48000, img: "../image/ga2.png" },
    { id: 3, name: "Gà Rán Giòn", price: 47000, img: "../image/ga3.png" },
    { id: 4, name: "Gà Rán Mật Ong", price: 49000, img: "../image/ga4.png" },
    { id: 5, name: "Gà Rán Tỏi", price: 50000, img: "../image/ga5.png" },
    { id: 6, name: "Gà Rán Sốt BBQ", price: 52000, img: "../image/ga6.png" },
    { id: 7, name: "Gà Rán Cay Hàn", price: 53000, img: "../image/ga7.png" },
    { id: 8, name: "Gà Rán Tứ Xuyên", price: 54000, img: "../image/ga8.png" },
    { id: 9, name: "Gà Rán Mù Tạt", price: 55000, img: "../image/ga9.png" },
    { id: 10, name: "Gà Rán Chanh", price: 56000, img: "../image/ga10.png" },
    { id: 11, name: "Gà Rán Phô Mai", price: 57000, img: "../image/ga11.png" },
    { id: 12, name: "Gà Rán Sốt Cay", price: 58000, img: "../image/ga12.png" },
    { id: 13, name: "Gà Rán Cajun", category: "Gà Rán", price: 60000, img: "../image/ga13.png" },
    { id: 14, name: "Gà Rán Mắm", category: "Gà Rán", price: 50000, img: "../image/ga14.png" },
    { id: 15, name: "Gà Rán Ngũ Vị", category: "Gà Rán", price: 58000, img: "../image/ga15.png" },
  ],

  "Gà phô mai": [
    { id: 16, name: "Gà Phô Mai Tan Chảy", price: 55000, img: "../image/ga_phomai_tanchay.jpg" },
    { id: 17, name: "Gà Phô Mai BBQ", price: 56000, img: "../image/ga_phomai_bbq.jpg" },
    { id: 18, name: "Gà Phô Mai Cay", price: 57000, img: "../image/ga_phomai_cay.jpg" },
    { id: 19, name: "Gà Phô Mai Hàn Quốc", price: 58000, img: "../image/ga_phomai_hanquoc.jpg" },
    { id: 20, name: "Gà Phô Mai Trứng Muối", price: 59000, img: "../image/ga_phomai_trungmuoi.jpg" },
    { id: 21, name: "Gà Phô Mai Mật Ong", price: 60000, img: "../image/ga_phomai_matong.jpg" },
    { id: 22, name: "Gà Phô Mai Giòn", price: 61000, img: "../image/ga_phomai_gion.jpg" },
    { id: 23, name: "Gà Phô Mai Bơ Tỏi", price: 62000, img: "../image/ga_phomai_botoi.jpg" },
    { id: 24, name: "Gà Phô Mai Tỏi Ớt", price: 63000, img: "../image/ga_phomai_toiot.jpg" },
    { id: 25, name: "Gà Phô Mai Cay Nồng", price: 64000, img: "../image/ga_phomai_caynong.jpg" },
    { id: 26, name: "Gà Phô Mai Xông Khói", price: 65000, img: "../image/ga_phomai_xongkhoi.jpg" },
    { id: 27, name: "Gà Phô Mai Tiêu Đen", price: 66000, img: "../image/ga_phomai_tieuden.jpg" },
    { id: 28, name: "Gà Phô Mai Thảo Mộc", category: "Gà Phô Mai", price: 66000, img: "../image/ga_phomai_thaomoc.jpg" },
    { id: 29, name: "Gà Phô Mai Cajun", category: "Gà Phô Mai", price: 69000, img: "../image/ga_phomai_cajun.jpg" },
    { id: 30, name: "Gà Phô Mai Đút Lò", category: "Gà Phô Mai", price: 66000, img: "../image/ga_phomai_dutlo.jpg" },
  ],

  "Mỳ ý": [
    { id: 31, name: "Mì Ý Sốt Bò Bằm", price: 70000, img: "../image/my_y_bo.jpg" },
    { id: 32, name: "Mì Ý Sốt Kem Nấm", price: 72000, img: "../image/my_y_kemnam.jpg" },
    { id: 33, name: "Mì Ý Hải Sản", price: 75000, img: "../image/my_y_haisan.jpg" },
    { id: 34, name: "Mì Ý Gà Nướng", price: 73000, img: "../image/my_y_ganuong.jpg" },
    { id: 35, name: "Mì Ý Thịt Xông Khói", price: 76000, img: "../image/my_y_xongkhoi.jpg" },
    { id: 36, name: "Mì Ý Sốt Cà", price: 72000, img: "../image/my_y_sotca.jpg" },
    { id: 37, name: "Mì Ý Tôm", price: 77000, img: "../image/my_y_tom.jpg" },
    { id: 38, name: "Mì Ý Chay", price: 68000, img: "../image/my_y_chay.jpg" },
    { id: 39, name: "Mì Ý Sốt Trắng", price: 74000, img: "../image/my_y_trang.jpg" },
    { id: 40, name: "Mì Ý Sốt Kem Tôm", price: 78000, img: "../image/my_y_kemtom.jpg" },
    { id: 41, name: "Mì Ý Bò Phô Mai", price: 79000, img: "../image/my_y_bophomai.jpg" },
    { id: 42, name: "Mì Ý Gà Phô Mai", price: 80000, img: "../image/my_y_gapho.jpg" },
    { id: 43, name: "Mì Ý Mai Cua", category: "Mì Ý", price: 60000, img: "../image/my_y_maicua.jpg" },
    { id: 44, name: "Mì Ý Sốt Gạch Cua", category: "Mì Ý", price: 80000, img: "../image/my_y_sotgachcua.jpg" },
    { id: 45, name: "Mì Ý Gà Phô Mai Đút Lò", category: "Mì Ý", price: 80000, img: "../image/my_y_gaphomaidutlo.jpg" },

    

  ],

  "Pizza": [
    { id: 46, name: "Pizza Hải Sản", price: 89000, img: "../image/pizza_hai_san.jpg" },
    { id: 47, name: "Pizza Bò Phô Mai", price: 95000, img: "../image/pizza_bo.jpg" },
    { id: 48, name: "Pizza Gà Nướng", price: 92000, img: "../image/pizza_ganuong.jpg" },
    { id: 49, name: "Pizza Thập Cẩm", price: 97000, img: "../image/pizza_thapcam.jpg" },
    { id: 50, name: "Pizza Xúc Xích", price: 91000, img: "../image/pizza_xucxich.jpg" },
    { id: 51, name: "Pizza Phô Mai", price: 90000, img: "../image/pizza_phomai.jpg" },
    { id: 52, name: "Pizza Trứng Muối", price: 96000, img: "../image/pizza_trungmuoi.jpg" },
    { id: 53, name: "Pizza Tôm Mực", price: 97000, img: "../image/pizza_tommuc.jpg" },
    { id: 54, name: "Pizza Bò Cay", price: 98000, img: "../image/pizza_bocay.jpg" },
    { id: 55, name: "Pizza Rau Củ", price: 87000, img: "../image/pizza_raucu.jpg" },
    { id: 56, name: "Pizza Chay", price: 86000, img: "../image/pizza_chay.jpg" },
    { id: 57, name: "Pizza Gà Phô Mai", price: 94000, img: "../image/pizza_gapho.jpg" },
    { id: 58, name: "Pizza Gà Phô Mai Cay", category: "PIZZA", price: 94000, img: "../image/pizza_gaphocay.jpg" },
    { id: 59, name: "Pizza Gà Phô Mai Đút Lò", category: "PIZZA", price: 94000, img: "../image/pizza_gaphodutlo.jpg" },
    { id: 60, name: "Pizza Gà Phô Mai BBQ", category: "PIZZA", price: 94000, img: "../image/pizza_gaphomaibbq.jpg" },
  ]
};



  let foodData = JSON.parse(localStorage.getItem('foodData')) || defaultData;

  const grid = document.querySelector('.menu-grid');
  const categories = document.querySelectorAll('.category');
  const menuTitle = document.querySelector('.menu h2');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.close');
  const saveBtn = document.getElementById('saveBtn');
  const imgPreview = document.getElementById('imgPreview');

  let currentCategory = 'Gà giòn';
  let selectedImg = '';

  // ====== VẼ DANH SÁCH MÓN ======
  function renderMenu(category) {
    grid.innerHTML = '';
    const list = foodData[category] || [];

    if (list.length === 0) {
      for (let i = 0; i < 3; i++) {
        const empty = document.createElement('div');
        empty.className = 'item';
        empty.innerHTML = `
          <div class="menu-card">
            <div class="menu-img"></div>
            <div class="menu-content">
              <h3 class="menu-title"></h3>
              <hr class="menu-line">
              <div class="menu-bottom">
                <span class="menu-price"></span>
                <button class="cart-btn"><i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
          </div>`;
        grid.appendChild(empty);
      }
    } else {
      list.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
          <div class="menu-card">
            <div class="menu-img">
              <img src="${item.img}" alt="${item.name}">
              <button class="delete-btn" data-index="${index}">✖</button>
            </div>
            <div class="menu-content">
              <h3 class="menu-title">${item.name}</h3>
              <hr class="menu-line">
              <div class="menu-bottom">
                <span class="menu-price">${item.price}₫</span>
                <button class="cart-btn"><i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
          </div>`;
        grid.appendChild(div);
      });
    }

    const addDiv = document.createElement('div');
    addDiv.className = 'item add';
    addDiv.innerHTML = `<i class="fa fa-plus"></i>`;
    addDiv.addEventListener('click', () => (modal.style.display = 'flex'));
    grid.appendChild(addDiv);

    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        const index = e.target.dataset.index;
        if (confirm('Bạn có muốn xóa món này không?')) {
          foodData[category].splice(index, 1);
          localStorage.setItem('foodData', JSON.stringify(foodData));
          renderMenu(category);
        }
      });
    });
  }

  // ====== CHỌN ẢNH ======
  imgPreview.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => {
          selectedImg = ev.target.result;
          imgPreview.innerHTML = `<img src="${selectedImg}" alt="preview">`;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  });

  // ====== LƯU MÓN ======
  saveBtn.addEventListener('click', () => {
    const name = document.getElementById('foodName').value.trim();
    const price = document.getElementById('foodPrice').value.trim();

    if (!name || !price || !selectedImg) {
      alert('Vui lòng nhập đủ thông tin và chọn ảnh!');
      return;
    }

    foodData[currentCategory].push({ name, price, img: selectedImg });
    localStorage.setItem('foodData', JSON.stringify(foodData));

    modal.style.display = 'none';
    document.getElementById('foodName').value = '';
    document.getElementById('foodPrice').value = '';
    imgPreview.innerHTML = `<i class='fa fa-plus'></i>`;
    selectedImg = '';
    renderMenu(currentCategory);


    // ================== XỬ LÝ CHUYỂN DANH MỤC ==================
document.querySelectorAll(".category").forEach((cat) => {
  cat.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach((c) => c.classList.remove("active"));
    cat.classList.add("active");

    currentCategory = cat.dataset.name;
    const title = document.querySelector(".menu h2");
    if (title) title.textContent = currentCategory;

    renderMenu(currentCategory);
  });
});


    // ===== XỬ LÝ NÚT ADMIN HIỂN THỊ GIỎ HÀNG =====
const adminBtn = document.querySelector('.admin-btn'); // nút "Admin" trên header
const cartPanel = document.querySelector('.cart-panel'); // khung giỏ hàng (panel)
const cartOverlay = document.querySelector('.cart-overlay'); // nền mờ nếu có

if (adminBtn && cartPanel) {
  adminBtn.addEventListener('click', () => {
    cartPanel.classList.toggle('active'); // bật/tắt hiển thị giỏ hàng
    if (cartOverlay) cartOverlay.classList.toggle('active');
  });
}

// ===== NÚT ĐÓNG GIỎ HÀNG (NẾU CÓ) =====
const closeCartBtn = document.querySelector('.close-cart');
if (closeCartBtn) {
  closeCartBtn.addEventListener('click', () => {
    cartPanel.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
  });
}

  });

  // ====== ĐÓNG MODAL ======
  closeModal.addEventListener('click', () => (modal.style.display = 'none'));

  // ====== CHUYỂN DANH MỤC ======
  categories.forEach(cat => {
    cat.addEventListener('click', () => {
      categories.forEach(c => c.classList.remove('active'));
      cat.classList.add('active');
      currentCategory = cat.dataset.name;
      menuTitle.textContent = currentCategory;
      renderMenu(currentCategory);
    });
  });

  // ====== NÚT MŨI TÊN ======
  const leftBtn = document.querySelector('.nav-btn.left');
  const rightBtn = document.querySelector('.nav-btn.right');

  function changeCategory(direction) {
    const categoryArray = Array.from(categories);
    let currentIndex = categoryArray.findIndex(c => c.classList.contains('active'));

    if (direction === 'next') currentIndex = (currentIndex + 1) % categoryArray.length;
    else if (direction === 'prev') currentIndex = (currentIndex - 1 + categoryArray.length) % categoryArray.length;

    categoryArray.forEach(c => c.classList.remove('active'));
    categoryArray[currentIndex].classList.add('active');

    const newCategory = categoryArray[currentIndex].dataset.name;
    currentCategory = newCategory;
    menuTitle.textContent = newCategory;
    renderMenu(newCategory);
  }

  leftBtn.addEventListener('click', () => changeCategory('prev'));
  rightBtn.addEventListener('click', () => changeCategory('next'));

  // ====== TÌM KIẾM & LỌC GIÁ ======
  const searchInput = document.querySelector('.search-bar input');
  const filterIcon = document.querySelector('.fa-filter');
  const filterBox = document.getElementById('filterBox');
  const applyFilter = document.getElementById('applyFilter');
  const priceInput = document.getElementById('priceInput');
  const filterType = document.getElementById('filterType');

  let filterCondition = null;

  filterIcon.addEventListener('click', e => {
    e.stopPropagation();
    filterBox.style.display = filterBox.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', e => {
    if (!filterBox.contains(e.target) && !filterIcon.contains(e.target)) {
      filterBox.style.display = 'none';
    }
  });

  function renderFilteredResults() {
    const keyword = searchInput.value.toLowerCase().trim();
    const grid = document.querySelector('.menu-grid');
    const menuTitle = document.querySelector('.menu h2');
    const categoriesList = document.querySelectorAll('.category');

    categoriesList.forEach(cat => cat.classList.remove('active'));

    if (!keyword && !filterCondition) {
      menuTitle.textContent = currentCategory;
      renderMenu(currentCategory);
      return;
    }

    const allMatches = [];
    for (const cat in foodData) {
      foodData[cat].forEach(item => {
        const nameMatch = !keyword || item.name.toLowerCase().includes(keyword);
        const itemPrice = parseFloat(item.price.toString().replace(/\./g, '').replace('₫', ''));
        let priceMatch = true;

        if (filterCondition) {
          if (filterCondition.type === 'less') priceMatch = itemPrice < filterCondition.price;
          else if (filterCondition.type === 'greater') priceMatch = itemPrice > filterCondition.price;
        }

        if (nameMatch && priceMatch) allMatches.push(item);
      });
    }

    grid.innerHTML = '';
    menuTitle.textContent = keyword && filterCondition
      ? `Kết quả cho \"${keyword}\" (đã lọc giá)`
      : keyword
      ? `Kết quả tìm kiếm cho: \"${keyword}\"`
      : 'Kết quả lọc giá';

    if (allMatches.length === 0) {
      grid.innerHTML = '<p style="grid-column: 1 / -1; text-align:center;">Không có món nào phù hợp.</p>';
    } else {
      allMatches.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
          <div class='menu-card'>
            <div class='menu-img'><img src='${item.img}' alt='${item.name}'></div>
            <div class='menu-content'>
              <h3 class='menu-title'>${item.name}</h3>
              <hr class='menu-line'>
              <div class='menu-bottom'>
                <span class='menu-price'>${item.price}₫</span>
                <button class='cart-btn'><i class='fa fa-shopping-cart'></i></button>
              </div>
            </div>
          </div>`;
        grid.appendChild(div);
      });
    }
  }

  searchInput.addEventListener('input', () => renderFilteredResults());

  applyFilter.addEventListener('click', () => {
    const price = parseFloat(priceInput.value);
    if (isNaN(price)) return alert('⚠️ Vui lòng nhập giá hợp lệ!');

    const type = filterType.value;
    filterCondition = { type, price };
    filterBox.style.display = 'none';
    renderFilteredResults();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      filterCondition = null;
      renderMenu(currentCategory);
    }
  });

  renderMenu(currentCategory);
});

// ====== PANEL ADMIN ======
const admin = document.querySelector('.admin-profile');
const cartPanel = document.getElementById('cartPanel');

admin.addEventListener('click', e => {
  e.stopPropagation();
  cartPanel.classList.toggle('active');
});

document.addEventListener('click', e => {
  if (!cartPanel.contains(e.target) && !admin.contains(e.target)) {
    cartPanel.classList.remove('active');
  }
});
