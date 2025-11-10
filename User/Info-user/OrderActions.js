document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!currentUser || !currentUser.username) return;

  const historyKey = `orderHistory_${currentUser.username}`;
  let orderHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

  // ====== HỦY ĐƠN HÀNG ======
  const cancelBtns = document.querySelectorAll(".cancel-btn");
  cancelBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const orderBox = btn.closest(".box-history");
      const orderIdEl = orderBox.querySelector(".order-info p:first-child");
      const orderId = orderIdEl.textContent.replace("ID đơn hàng:", "").trim();

      // Tìm đơn hàng trong localStorage
      const order = orderHistory.find(o => o.id === orderId);

      if (!order) {
        alert("Không tìm thấy đơn hàng này!");
        return;
      }

      if (order.status === "Chờ xác nhận") {
        const confirmCancel = confirm("Bạn có chắc muốn hủy đơn hàng này không?");
        if (confirmCancel) {
          order.status = "Đã hủy";
          localStorage.setItem(historyKey, JSON.stringify(orderHistory));

          const statusEl = orderBox.querySelector(".order-info p:nth-child(4)");
          statusEl.innerHTML = "<strong>Trạng thái: Đã hủy</strong>";
          btn.disabled = true;
          btn.textContent = "Đã hủy";
          btn.style.backgroundColor = "#ccc";

          alert("Đơn hàng đã được hủy thành công!");
        }
      } else {
        alert("Chỉ có thể hủy đơn khi đang ở trạng thái 'Chờ xác nhận'.");
      }
    });
  });

  // ====== ĐÁNH GIÁ ĐƠN HÀNG ======
  const ratings = document.querySelectorAll(".rating");

  ratings.forEach((ratingDiv) => {
    const orderBox = ratingDiv.closest(".box-history");
    const orderId = orderBox.querySelector(".order-info p:first-child").textContent.replace("ID đơn hàng:", "").trim();
    const stars = ratingDiv.querySelectorAll("img");

    // Hiển thị lại sao đã lưu (nếu có)
    const order = orderHistory.find(o => o.id === orderId);
    if (order && order.rating) {
      stars.forEach((s, i) => {
        s.style.filter = i < order.rating ? "brightness(1.2) sepia(1) hue-rotate(15deg) saturate(5)" : "none";
      });
    }

    stars.forEach((star, index) => {
      star.addEventListener("click", function () {
        const ratingValue = index + 1;

        // Cập nhật giao diện
        stars.forEach((s, i) => {
          s.style.filter = i < ratingValue ? "brightness(1.2) sepia(1) hue-rotate(15deg) saturate(5)" : "none";
        });

        // Cập nhật dữ liệu
        if (order) {
          order.rating = ratingValue;
          localStorage.setItem(historyKey, JSON.stringify(orderHistory));
        }

        alert(`Cảm ơn bạn đã đánh giá ${ratingValue} sao!`);
      });
    });
  });
});
