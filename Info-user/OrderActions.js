document.addEventListener("DOMContentLoaded", function () {
  // Xử lý hủy đơn hàng
  const cancelBtns = document.querySelectorAll(".cancel-btn");

  cancelBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const orderBox = btn.closest(".box-history");
      const statusEl = orderBox.querySelector(".order-info p:nth-child(4)");
      const statusText = statusEl.textContent.replace("Trạng thái: ", "").trim();

      if (statusText === "Chờ xác nhận") {
        const confirmCancel = confirm("Bạn có chắc muốn hủy đơn hàng này không?");
        if (confirmCancel) {
          statusEl.innerHTML = "<strong>Trạng thái: Đã hủy</strong>";
          btn.disabled = true;
          btn.textContent = "Đã hủy";
          btn.style.backgroundColor = "#ccc";
          console.log("Đơn hàng đã được hủy thành công!");
          alert("Đơn hàng đã được hủy thành công!");
        }
      } else {
        alert("Chỉ có thể hủy đơn khi đang ở trạng thái 'Chờ xác nhận'.");
      }
    });
  });

  // Xử lý đánh giá đơn hàng

  const ratings = document.querySelectorAll(".rating");

  ratings.forEach((ratingDiv) => {
    const stars = ratingDiv.querySelectorAll("img");

    stars.forEach((star, index) => {
      star.addEventListener("click", function () {
        // Reset toàn bộ sao về trạng thái chưa chọn
        stars.forEach((s, i) => {
          s.style.filter = i <= index ? "brightness(1.2) sepia(1) hue-rotate(15deg) saturate(5)" : "none";
        });

        const ratingValue = index + 1;
        console.log(`Người dùng đã đánh giá ${ratingValue} sao`);
        alert(`Cảm ơn bạn đã đánh giá ${ratingValue} sao!`);
      });
    });
  });
});
