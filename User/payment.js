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
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=MoMo-QR-ThanhToan";
    qrPopup.style.display = "flex";
  } else if (selected.id === "vnpay") {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=VNPAY-QR-ThanhToan";
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
  // Lấy dữ liệu giỏ hàng
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (cart.length === 0) {
    alert("Không có sản phẩm trong giỏ hàng để thanh toán.");
    return;
  }

  // Tính lại tổng tiền từ giỏ hàng (đảm bảo không bị 0)
  const total = cart.reduce((sum, item) => {
    const itemTotal = item.total || (item.price * item.qty) || 0;
    return sum + itemTotal;
  }, 0);

  // Tạo mã đơn hàng ngẫu nhiên
  const orderId = "DH" + Date.now();

  // Tạo đối tượng đơn hàng mới
  const newOrder = {
    id: orderId,
    items: cart,
    total: total,
    status: "Chờ xác nhận",
    date: new Date().toLocaleString("vi-VN"),
  };

  // Lấy danh sách đơn hàng cũ (nếu có)
  const history = JSON.parse(localStorage.getItem("orderHistory")) || [];

  // Thêm đơn mới vào đầu danh sách (đơn mới nhất ở trên)
  history.unshift(newOrder);

  // Lưu lại vào localStorage
  localStorage.setItem("orderHistory", JSON.stringify(history));

  // Xóa giỏ hàng sau khi lưu đơn
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartTotal");

  // Hiện popup thông báo thành công
  const successPopup = document.getElementById("success-popup");
  if (successPopup) {
    successPopup.style.display = "flex";
  }

  // Chuyển hướng sau 2 giây
  setTimeout(() => {
    if (successPopup) successPopup.style.display = "none";
    alert("Thanh toán thành công! Đơn hàng của bạn đã được lưu vào lịch sử.");
    window.location.href = "info-user/history-user.html";
  }, 2000);
}


// Lưu tổng tiền khi vào trang thanh toán
document.addEventListener("DOMContentLoaded", () => {
  const total = localStorage.getItem("cartTotal");
  if (total) {
    const totalText = parseInt(total).toLocaleString("vi-VN") + "₫";
    const totalLabels = document.querySelectorAll("#cash-total, #displayTotal");
    totalLabels.forEach((el) => (el.textContent = totalText));
  }
});

// Khi người dùng nhấn "Thanh toán" ở giỏ hàng
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const total = document
        .getElementById("cartTotalPrice")
        .textContent.replace(/[^\d]/g, "");
      localStorage.setItem("cartTotal", total);
      window.location.href = "payment.html";
    });
  }
});
