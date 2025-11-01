if (!localStorage.getItem('users')) {
  const sampleUsers = [
    { hoten: "Nguyễn Văn A", tendangnhap: "vana", matkhau: "123456", email: "vana@gmail.com", vipham: 0, trangthai: "Hoạt động" },
    { hoten: "Trần Thị B", tendangnhap: "thib", matkhau: "abcdef", email: "thib@gmail.com", vipham: 1, trangthai: "Đã bị khóa" },
    { hoten: "Lê Văn C", tendangnhap: "vanc", matkhau: "qwerty", email: "vanc@gmail.com", vipham: 0, trangthai: "Hoạt động" }
  ];
  localStorage.setItem('users', JSON.stringify(sampleUsers));
}

let users = JSON.parse(localStorage.getItem('users')) || [];
users.forEach(u => { if (!u.trangthai) u.trangthai = "Hoạt động"; });
localStorage.setItem('users', JSON.stringify(users));

const bigRect = document.getElementById('bigRect');
const popupsContainer = document.getElementById('popups-container');

function renderCustomers() {
  bigRect.innerHTML = '';
  popupsContainer.innerHTML = '';
  const users = JSON.parse(localStorage.getItem('users')) || [];

  for (let i = 0; i < users.length; i += 3) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = 0; j < 3 && i + j < users.length; j++) {
      const index = i + j;
      const user = users[index];
      const outer = document.createElement('div');
      outer.className = 'small-rect';

      const innerTop = document.createElement('div');
      innerTop.className = 'inner-rect-top';
      const innerBottom = document.createElement('div');
      innerBottom.className = 'inner-rect-bottom';
      innerBottom.textContent = user.hoten;

      outer.appendChild(innerTop);
      outer.appendChild(innerBottom);
      row.appendChild(outer);
      bigRect.appendChild(row);

      const popupOverlay = document.createElement('div');
      popupOverlay.className = 'popup-overlay';
      popupOverlay.id = `popup-${index}`;
      popupOverlay.innerHTML = `
        <div class="popup">
          <span class="close-btn">&times;</span>
          <h2>Thông tin khách hàng</h2>
          <div class="popup-content">
            <div class="popup-row">
              <div><label>Họ tên:</label><input type="text" id="hoten-${index}" value="${user.hoten}"></div>
              <div><label>Tên đăng nhập:</label><input type="text" id="tendangnhap-${index}" value="${user.tendangnhap}"></div>
            </div>
            <div class="popup-row">
              <div><label>Mật khẩu:</label><input type="text" id="matkhau-${index}" value="${user.matkhau}"></div>
              <div><label>Email:</label><input type="text" id="email-${index}" value="${user.email}"></div>
            </div>
            <div><label>Vi phạm:</label><input type="number" id="vipham-${index}" value="${user.vipham}"></div>
            <div>
              <label>Trạng thái:</label>
              <input type="text" id="trangthai-${index}" value="${user.trangthai}" readonly>
              <div style="display:flex; gap:10px; margin-top:8px;">
                <button onclick="khoaTaiKhoan(${index})">Khóa tài khoản</button>
                <button onclick="moTaiKhoan(${index})">Mở tài khoản</button>
              </div>
            </div>
            <button onclick="saveUser(${index})">Lưu</button>
          </div>
        </div>
      `;
      popupsContainer.appendChild(popupOverlay);

      outer.addEventListener('click', () => {
        document.getElementById(`popup-${index}`).style.display = 'flex';
      });
      popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay || e.target.classList.contains('close-btn')) {
          popupOverlay.style.display = 'none';
        }
      });
    }
  }
}

function saveUser(index) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users[index] = {
    ...users[index],
    hoten: document.getElementById(`hoten-${index}`).value,
    tendangnhap: document.getElementById(`tendangnhap-${index}`).value,
    matkhau: document.getElementById(`matkhau-${index}`).value,
    email: document.getElementById(`email-${index}`).value,
    vipham: parseInt(document.getElementById(`vipham-${index}`).value) || 0,
    trangthai: document.getElementById(`trangthai-${index}`).value
  };
  localStorage.setItem('users', JSON.stringify(users));
  document.getElementById(`popup-${index}`).style.display = 'none';
  renderCustomers();
}

function khoaTaiKhoan(index) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users[index].trangthai = "Đã bị khóa";
  localStorage.setItem('users', JSON.stringify(users));
  document.getElementById(`trangthai-${index}`).value = "Đã bị khóa";
}

function moTaiKhoan(index) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users[index].trangthai = "Hoạt động";
  localStorage.setItem('users', JSON.stringify(users));
  document.getElementById(`trangthai-${index}`).value = "Hoạt động";
}

renderCustomers();