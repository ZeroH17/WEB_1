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
    const foundUser = users.find(u => 
        (u.username === usernameOrEmail || u.email === usernameOrEmail) 
        && u.password === password
    );

    if (!foundUser) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        return;
    }

    // Tạo bản sao người dùng (độc lập, không trỏ chung với mảng users)
    const currentUser = {
        username: foundUser.username,
        email: foundUser.email,
        password: foundUser.password,
        role: foundUser.role || "user",
        avatar: foundUser.avatar || "",
        cart: foundUser.cart || [],
        history: foundUser.history || []
    };

    // Lưu người dùng đang đăng nhập riêng biệt
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    alert(`Chào mừng ${currentUser.username} đăng nhập thành công!`);
    window.location.href = "index.html";
});
