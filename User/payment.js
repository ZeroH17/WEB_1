function goBack() {
  window.history.back();
}

function cancelPayment() {
  alert("Bạn đã hủy thanh toán!");
  window.location.href = "menu.html";
}

function confirmPayment() {
  const selected = document.querySelector('input[name="method"]:checked');
  if (!selected) {
    alert("Vui lòng chọn phương thức thanh toán!");
    return;
  }

  const qrPopup = document.getElementById("qr-popup");
  const qrImage = document.getElementById("qr-image");

  if (selected.id === "momo") {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=MoMo-QR-ThanhToan";
    qrPopup.style.display = "flex";
  } else if (selected.id === "vnpay") {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=VNPAY-QR-ThanhToan";
    qrPopup.style.display = "flex";
  } else if (selected.id === "cash") {
    alert("Thanh toán tiền mặt thành công!");
    processPaymentSuccess();
  }
}

function closeQR() {
  document.getElementById("qr-popup").style.display = "none";
}

function confirmReceived() {
  document.getElementById("qr-popup").style.display = "none";
  processPaymentSuccess();
}

/* Xử lý sau khi thanh toán thành công */
function processPaymentSuccess() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!currentUser || !currentUser.username) {
    alert("Không xác định được người dùng, vui lòng đăng nhập lại!");
    return;
  }

  const cartKey = `cartItems_${currentUser.username}`;
  const totalKey = `cartTotal_${currentUser.username}`;
  const historyKey = `orderHistory_${currentUser.username}`;

  // Lấy dữ liệu giỏ hàng riêng của user
  const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  if (cart.length === 0) {
    alert("Không có sản phẩm trong giỏ hàng để thanh toán.");
    return;
  }

  // Tính tổng tiền
  const total = cart.reduce((sum, item) => {
    const itemTotal = item.total || item.price * item.qty || 0;
    return sum + itemTotal;
  }, 0);

  // Tạo mã đơn hàng ngẫu nhiên
  const orderId = "DH" + Date.now();

  // Đơn hàng mới
  const newOrder = {
    id: orderId,
    items: cart,
    total,
    status: "Chờ xác nhận",
    date: new Date().toLocaleString("vi-VN"),
  };

  // Lịch sử riêng của user
  const history = JSON.parse(localStorage.getItem(historyKey)) || [];
  history.unshift(newOrder);
  localStorage.setItem(historyKey, JSON.stringify(history));

  // Xóa giỏ hàng sau khi thanh toán
  localStorage.removeItem(cartKey);
  localStorage.removeItem(totalKey);

  // Hiện popup
  const successPopup = document.getElementById("success-popup");
  if (successPopup) successPopup.style.display = "flex";

  setTimeout(() => {
    if (successPopup) successPopup.style.display = "none";
    alert("Thanh toán thành công! Đơn hàng của bạn đã được lưu vào lịch sử.");
    window.location.href = "info-user/history-user.html";
  }, 2000);
}

// Lưu tổng tiền khi vào trang thanh toán

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!currentUser || !currentUser.username) return;
  const totalKey = `cartTotal_${currentUser.username}`;

  const total = localStorage.getItem(totalKey);
  if (total) {
    const totalText = parseInt(total).toLocaleString("vi-VN") + "₫";
    document.querySelectorAll("#cash-total, #displayTotal")
      .forEach(el => el.textContent = totalText);
  }
});

// Khi người dùng nhấn "Thanh toán" ở giỏ hàng

document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!checkoutBtn || !currentUser?.username) return;

  const totalKey = `cartTotal_${currentUser.username}`;

  checkoutBtn.addEventListener("click", () => {
    const total = document.getElementById("cartTotalPrice")
      .textContent.replace(/[^\d]/g, "");
    localStorage.setItem(totalKey, total);
    window.location.href = "payment.html";
  });
});
