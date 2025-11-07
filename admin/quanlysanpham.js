 let products = [];

    async function loadData() {
      const res = await fetch('../data/products.json');
      products = await res.json();
      renderTon(products);
    }

   function renderTon(data) {
  const tbody = document.querySelector("#tableTon tbody");
  tbody.innerHTML = "";
  const grouped = {};

  data.forEach(p => {
    if (!grouped[p.ten]) grouped[p.ten] = { ten: p.ten, loai: p.loai, gia: p.gia, nhap: 0, xuat: 0 };
    grouped[p.ten].nhap += p.nhap;
    grouped[p.ten].xuat += p.xuat;
  });

  Object.values(grouped).forEach(p => {
    const ton = Math.max(0, p.nhap - p.xuat); 
    const trangthai = ton <= 10 
      ? `<span class='alert'>Sắp hết</span>` 
      : `<span class='alert ok'>Đủ hàng</span>`;

    tbody.innerHTML += `
      <tr>
        <td>${p.ten}</td>
        <td>${p.loai}</td>
        <td>${p.gia.toLocaleString()}đ</td>
        <td>${ton}</td>
        <td>${trangthai}</td>
      </tr>`;
  });
}


    function filterByDate() {
      const date = document.getElementById("specificDate").value;
      const category = document.getElementById("category").value;
      let filtered = products;

      if (category) filtered = filtered.filter(p => p.loai === category);
      if (date) filtered = filtered.filter(p => p.ngay === date);

      renderTon(filtered);
    }

    function filterByRange() {
      const food = document.getElementById("foodSelect").value;
      const from = document.getElementById("fromDate").value;
      const to = document.getElementById("toDate").value;

      let filtered = products.filter(p =>
        (!food || p.ten === food) &&
        (!from || p.ngay >= from) &&
        (!to || p.ngay <= to)
      );

      renderHistory(filtered);
    }

    function renderHistory(data) {
      const tbody = document.querySelector("#tableHistory tbody");
      tbody.innerHTML = "";

      const grouped = {};
      data.forEach(p => {
        if (!grouped[p.ten]) grouped[p.ten] = { ten: p.ten, nhap: 0, xuat: 0 };
        grouped[p.ten].nhap += p.nhap;
        grouped[p.ten].xuat += p.xuat;
      });

      Object.values(grouped).forEach(p => {
        const ton = p.nhap - p.xuat;
        tbody.innerHTML += `
          <tr>
            <td>${p.ten}</td>
            <td>${p.nhap}</td>
            <td>${p.xuat}</td>
            <td>${ton}</td>
          </tr>`;
      });
    }

    loadData();