document.addEventListener("DOMContentLoaded", () => {
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const bankInfo = document.getElementById('bank-info');
  const cardInfo = document.getElementById('card-info');
  const confirmBtn = document.getElementById('confirm-btn');
  const modal = document.getElementById('success-modal');
  const closeModal = document.getElementById('close-modal');

  // Ẩn/hiện phần nhập theo phương thức thanh toán
  methodRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'cod') {
        bankInfo.classList.add('hidden');
        cardInfo.classList.add('hidden');
      } else if (radio.value === 'bank') {
        bankInfo.classList.remove('hidden');
        cardInfo.classList.add('hidden');
      } else if (radio.value === 'card') {
        cardInfo.classList.remove('hidden');
        bankInfo.classList.add('hidden');
      }
    });
  });

  // Khi bấm xác nhận
  confirmBtn.addEventListener('click', () => {
    const address = document.getElementById('address').value.trim();
    const selectedMethod = document.querySelector('input[name="method"]:checked').value;

    if (!address) {
      alert("Vui lòng nhập địa chỉ nhận hàng!");
      return;
    }

    if (selectedMethod === 'bank') {
      const bank = document.getElementById('bank-name').value;
      const acc = document.getElementById('account').value;
      const amount = document.getElementById('amount').value;
      if (!bank || !acc || !amount) {
        alert("Vui lòng nhập đầy đủ thông tin ngân hàng!");
        return;
      }
    } else if (selectedMethod === 'card') {
      const cardNum = document.getElementById('card-number').value;
      const expiry = document.getElementById('card-expiry').value;
      const cvv = document.getElementById('card-cvv').value;
      if (!cardNum || !expiry || !cvv) {
        alert("Vui lòng nhập đầy đủ thông tin thẻ!");
        return;
      }
    }

    // Sau khi hợp lệ => hiển thị modal
    modal.classList.remove('hidden');
  });

  // Đóng modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
