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
  const cashPopup = document.getElementById("cash-popup");

  const total = localStorage.getItem("cartTotal") || 0;
  document.getElementById("cash-total").textContent = parseInt(total).toLocaleString("vi-VN") + "₫";

  if (selected.id === "momo") {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=MoMo-QR-ThanhToan";
    qrPopup.style.display = "flex";
  } 
  else if (selected.id === "vnpay") {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=VNPAY-QR-ThanhToan";
    qrPopup.style.display = "flex";
  } 
  else if (selected.id === "cash") {
    cashPopup.style.display = "flex"; // ✅ Hiện popup tiền mặt
  }
}
function closeCashPopup() {
  document.getElementById("cash-popup").style.display = "none";
}

function confirmCashPayment() {
  const total = parseInt(localStorage.getItem("cartTotal") || 0);
  const customerCash = parseInt(document.getElementById("customerCash").value);

  if (isNaN(customerCash) || customerCash < total) {
    alert("Số tiền khách đưa không hợp lệ!");
    return;
  }

  const change = customerCash - total;
  document.getElementById("cash-change").textContent = change.toLocaleString("vi-VN") + "₫";

  // Hiện thông báo sau 1s
  setTimeout(() => {
    alert("Thanh toán thành công!");
    document.getElementById("cash-popup").style.display = "none";
    window.location.href = "menu.html"; // quay lại menu
  }, 1000);
}


function closeQR() {
  document.getElementById("qr-popup").style.display = "none";
}

function confirmReceived() {
  document.getElementById("qr-popup").style.display = "none";
  showSuccessAndReturn();
}

function confirmCashPayment() {
  const total = parseInt(localStorage.getItem("cartTotal") || 0);
  const customerCash = parseInt(document.getElementById("customerCash").value);

  if (isNaN(customerCash) || customerCash < total) {
    alert("Số tiền khách đưa không hợp lệ!");
    return;
  }

  const change = customerCash - total;
  document.getElementById("changeAmount").textContent = change.toLocaleString("vi-VN") + "₫";

  setTimeout(() => {
    showSuccessAndReturn();
  }, 1500);
}

function showSuccessAndReturn() {
  const successPopup = document.getElementById("success-popup");
  successPopup.style.display = "flex";

  setTimeout(() => {
    successPopup.style.display = "none";
    window.location.href = "menu.html";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  const total = localStorage.getItem("cartTotal");
  if (total) {
    // Hiển thị số tiền phải trả ở popup tiền mặt
    const totalText = parseInt(total).toLocaleString("vi-VN") + "₫";
    const totalLabels = document.querySelectorAll("#cash-total, #displayTotal"); 
    totalLabels.forEach(el => (el.textContent = totalText));
  }
});
// =======================
// CẬP NHẬT TIỀN THỐI LẠI TỰ ĐỘNG
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const inputMoney = document.getElementById("customerCash"); // ✅ trùng với HTML
  const changeLabel = document.getElementById("cash-change");
  const totalText = document.getElementById("cash-total");

  if (!inputMoney || !changeLabel || !totalText) return;

  inputMoney.addEventListener("input", () => {
    const total = parseInt(localStorage.getItem("cartTotal")) || 0;
    const customerPay = parseInt(inputMoney.value) || 0;
    let change = customerPay - total;
    if (change < 0) change = 0;
    changeLabel.textContent = change.toLocaleString("vi-VN") + "₫";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const total = document.getElementById("cartTotalPrice").textContent.replace(/[^\d]/g, "");
      localStorage.setItem("cartTotal", total); 
      window.location.href = "payment.html"; 
    });
  }
});

