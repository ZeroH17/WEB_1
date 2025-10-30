document.getElementById("registerBtn").addEventListener("click", function() {
    // Lấy dữ liệu từ input
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    // Kiểm tra rỗng
    if (!username || !email || !password || !repassword) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Kiểm tra khớp mật khẩu
    if (password !== repassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    // Lấy danh sách người dùng đã lưu trong localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra email đã tồn tại chưa
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert("Email này đã được đăng ký!");
        return;
    }

    // Tạo đối tượng người dùng mới
    const newUser = {
        username: username,
        email: email,
        password: password  // ⚠️ Nếu làm thật cần mã hoá (hash)
    };

    // Thêm vào danh sách và lưu lại
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    // Xoá dữ liệu input
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("repassword").value = "";

    // Chuyển hướng sang trang đăng nhập
    window.location.href = "/Login/Login.html";
});
