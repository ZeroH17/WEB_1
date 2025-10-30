document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm người dùng có username hoặc email trùng
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password);

    if (!user) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        return;
    }

    // Lưu người dùng đang đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert(`Chào mừng ${user.username} đăng nhập thành công!`);

    // Chuyển hướng sau khi đăng nhập thành công (tùy chỉnh)
    window.location.href = "/Home/Home.html";
});
