// Admin account
(function ensureAdminAccount() {
    const usersKey = "users";
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];

    const adminUsername = "admin";
    const adminEmail = "admin@gmail.com";
    const adminExists = users.some(u => u.username === adminUsername || u.email === adminEmail);

    if (!adminExists) {
        // Thay đổi mật khẩu/admin info nếu muốn
        const adminUser = {
            username: adminUsername,
            email: adminEmail,
            password: "Admin@123",
            role: "admin"
        };
        users.push(adminUser);
        localStorage.setItem(usersKey, JSON.stringify(users));
        console.log("Admin account created (username: admin, password: Admin@123)");
    }
})();

// Xử lý nút đăng nhập
document.getElementById("loginBtn").addEventListener("click", function() {
    const usernameOrEmail = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!usernameOrEmail || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm người dùng có username hoặc email trùng và password khớp
    const user = users.find(u => 
        (u.username === usernameOrEmail || u.email === usernameOrEmail) 
        && u.password === password
    );

    if (!user) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        return;
    }

    // Đảm bảo có role (một số user cũ có thể chưa có trường này)
    user.role = user.role || "user";

    // Lưu người dùng đang đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert(`Chào mừng ${user.username} đăng nhập thành công!`);

    // Chuyển hướng theo role
    if (user.role === "admin") {
        // chuyển tới trang admin
        window.location.href = "/Admin/index.html"; // Đường dẫn ví dụ cho trang admin
    } else {
        // chuyển tới trang user bình thường
        window.location.href = "index.html";
    }
});