document.addEventListener("DOMContentLoaded", function () {
  // Tìm avatar (ở info-user.html: .avatar, ở trang chủ: #userAvatar)
  const avatar = document.querySelector(".avatar") || document.querySelector("#userAvatar");
  if (!avatar) return; // nếu không có avatar thì thoát

  const savedAvatar = localStorage.getItem("avatarImage");

  // Nếu đã có ảnh avatar được lưu thì hiển thị lại
  if (savedAvatar) {
    avatar.style.backgroundImage = `url('${savedAvatar}')`;
    avatar.style.backgroundSize = "cover";
    avatar.style.backgroundPosition = "center center";
    avatar.style.backgroundRepeat = "no-repeat";
  }

  // Chỉ cho phép đổi avatar khi đang ở trang info-user.html
  const currentPage = window.location.pathname;
  const isInfoUserPage = currentPage.includes("info-user.html");

  if (isInfoUserPage) {
    avatar.addEventListener("click", function () {
      const imageUrl = prompt("Nhập link ảnh bạn muốn đặt làm avatar:");

      if (imageUrl && imageUrl.trim() !== "") {
        const url = imageUrl.trim();

        // Lưu vào localStorage
        localStorage.setItem("avatarImage", url);

        // Cập nhật ngay lập tức
        avatar.style.backgroundImage = `url('${url}')`;
        avatar.style.backgroundSize = "cover";
        avatar.style.backgroundPosition = "center center";
        avatar.style.backgroundRepeat = "no-repeat";
      } else {
        alert("Bạn chưa nhập link ảnh!");
      }
    });
  }
});
