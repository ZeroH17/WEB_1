document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector(".avatar") || document.querySelector("#userAvatar");
  if (!avatar) return;

  // Lấy người dùng hiện tại
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.username) return;

  // Tạo key riêng cho avatar người dùng
  const avatarKey = `avatar_${currentUser.username}`;

  // Lấy avatar của user hiện tại
  const savedAvatar = localStorage.getItem(avatarKey);

  if (savedAvatar) {
    avatar.style.backgroundImage = `url('${savedAvatar}')`;
    avatar.style.backgroundSize = "cover";
    avatar.style.backgroundPosition = "center center";
    avatar.style.backgroundRepeat = "no-repeat";
  }

  // Chỉ cho phép đổi avatar ở trang info-user.html
  const currentPage = window.location.pathname;
  const isInfoUserPage = currentPage.includes("info-user.html");

  if (isInfoUserPage) {
    avatar.addEventListener("click", function () {
      const imageUrl = prompt("Nhập link ảnh bạn muốn đặt làm avatar:");

      if (imageUrl && imageUrl.trim() !== "") {
        const url = imageUrl.trim();

        // Lưu avatar theo tài khoản người dùng
        localStorage.setItem(avatarKey, url);

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
