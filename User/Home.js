// home.js
document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // Ẩn nút đăng nhập / đăng ký
    const authButtons = document.getElementById("authButtons");
    if (authButtons) authButtons.style.display = "none";

    // Hiện vùng user
    const userSection = document.getElementById("userSection");
    const usernameDisplay = document.getElementById("usernameDisplay");
    const userAvatar = document.getElementById("userAvatar");

    userSection.style.display = "flex";
    usernameDisplay.textContent = currentUser.username || "User";

    // Nếu user có ảnh đại diện (đã lưu khi đăng ký), thì hiển thị
    if (currentUser.avatarUrl) {
      userAvatar.style.backgroundImage = `url(${currentUser.avatarUrl})`;
    } else {
      // Nếu chưa có ảnh → dùng màu nền mặc định
      userAvatar.style.backgroundImage = "url('/default-avatar.png')";
    }

    // Khi click vào avatar
    userAvatar.addEventListener("click", function () {
        // Chuyển sang trang thông tin người dùng
        window.location.href = "/info-user/info-user.html";
        });
  }
});