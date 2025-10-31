document.addEventListener("DOMContentLoaded", function () {
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");
  const email = document.querySelector(".email");
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");
  const address = document.querySelector(".address");

  // Lấy dữ liệu người dùng hiện tại
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (user) {
    firstName.value = user.firstName || "";
    lastName.value = user.lastName || "";
    email.value = user.email || "";
    username.value = user.username || "";
    password.value = user.password || "";
    address.value = user.address || "";
  }

  // So sánh dữ liệu cũ và mới
  function hasChanges(updatedUser, oldUser) {
    return (
      updatedUser.firstName !== oldUser.firstName ||
      updatedUser.lastName !== oldUser.lastName ||
      updatedUser.email !== oldUser.email ||
      updatedUser.username !== oldUser.username ||
      updatedUser.password !== oldUser.password ||
      updatedUser.address !== oldUser.address
    );
  }

  // Hàm lưu dữ liệu
  function saveUserData(redirect = false) {
    if (!user) {
      alert("Không tìm thấy thông tin người dùng để cập nhật!");
      return;
    }

    const updatedUser = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      username: username.value.trim(),
      password: password.value.trim(),
      address: address.value.trim(),
      avatar: user.avatar || ""
    };

    if (!hasChanges(updatedUser, user)) {
      alert("Thông tin thay đổi trùng với thông tin cũ. Không lưu.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    const updatedUsers = users.map((u) => {
      return u.username === user.username ? updatedUser : u;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    console.log("Thông tin đã được cập nhật:", updatedUser);
    alert("Thông tin đã được lưu thành công!");

    if (redirect) {
      window.location.href = "/User/index.html";
    }
  }

  // Nút Lưu
  document.querySelector(".btn-save").addEventListener("click", function () {
    saveUserData(false);
  });

  // Nút Lưu và Thoát
  document.querySelector(".btn-save_exit").addEventListener("click", function () {
    saveUserData(true);
  });
});
