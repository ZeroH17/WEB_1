let orders = JSON.parse(localStorage.getItem('orders')) || [];
const ordersContainer = document.getElementById('ordersContainer');
const popup = document.getElementById('popup');
const popupInfo = document.getElementById('popup-info');
const billTotal = document.getElementById('bill-total');
const closePopup = document.getElementById('closePopup');

const states = [
  { class: 'waiting', text: 'Chờ xác nhận' },
  { class: 'processing', text: 'Đang xử lý' },
  { class: 'success', text: 'Thành công' }
];

function formatVND(n) { return n.toLocaleString('vi-VN') + ' VND'; }

function renderOrders() {
  ordersContainer.innerHTML = '';
  orders.forEach((order, idx) => {
    const rect = document.createElement('div');
    rect.className = 'rectangle-inner';
    rect.innerHTML = `
      <div class='info-row'>
        <div class='info-item'>ID: ${order.id_don_hang}</div>
        <div class='info-item'>Giá: ${formatVND(order.tong_tien)}</div>
        <div class='info-item'>Thanh toán: ${order.thanh_toan.phuong_thuc}</div>
        <div class='info-item trang-thai-text'>Trạng thái: ${order.trang_thai}</div>
      </div>`;

    const action = document.createElement('div');
    action.className = 'action-row';
    const btn = document.createElement('button');
    const curState = states.find(s => s.text === order.trang_thai) || states[0];
    btn.className = 'status-btn ' + curState.class;
    btn.textContent = curState.text;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      let cur = states.findIndex(s => btn.classList.contains(s.class));
      if (cur < states.length - 1) cur++;
      else return;
      btn.className = 'status-btn ' + states[cur].class;
      btn.textContent = states[cur].text;
      order.trang_thai = states[cur].text;
      rect.querySelector('.trang-thai-text').textContent = 'Trạng thái: ' + order.trang_thai;
      localStorage.setItem('orders', JSON.stringify(orders));
    });

    action.appendChild(btn);
    rect.appendChild(action);
    rect.addEventListener('click', () => showPopup(order));
    ordersContainer.appendChild(rect);
  });
}

function showPopup(order) {
  let html = `<div><strong>Mã đơn hàng:</strong> ${order.id_don_hang}</div>
              <div><strong>Phương thức thanh toán:</strong> ${order.thanh_toan.phuong_thuc}</div>
              <div><strong>Trạng thái:</strong> ${order.trang_thai}</div>
              <div style='margin-top:8px;font-weight:700;'>Danh sách món:</div>`;
  order.mon_an.forEach(i => {
    html += `<div><span>${i.ten} x${i.so_luong}</span><span>${formatVND(i.thanh_tien)}</span></div>`;
  });
  popupInfo.innerHTML = html;
  billTotal.textContent = formatVND(order.tong_tien);
  popup.style.display = 'flex';
}

closePopup.addEventListener('click', () => popup.style.display = 'none');
popup.addEventListener('click', e => { if (e.target === popup) popup.style.display = 'none'; });

renderOrders();