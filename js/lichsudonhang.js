if (!localStorage.getItem('orders')) {
  const sampleOrders = [
    { id_don_hang: 'DH0001', tong_tien: 230000, thanh_toan: { phuong_thuc: 'tiền mặt' }, trang_thai: 'Thành công',
      mon_an: [{ten:'Mì Ý kem tôm',so_luong:1,thanh_tien:70000},{ten:'Gà rán giòn cay',so_luong:2,thanh_tien:110000},{ten:'Gà rán truyền thống',so_luong:1,thanh_tien:50000}] },
    { id_don_hang: 'DH0002', tong_tien: 315000, thanh_toan: { phuong_thuc: 'chuyển khoản' }, trang_thai: 'Chờ xác nhận',
      mon_an: [{ten:'Pizza phô mai',so_luong:1,thanh_tien:120000},{ten:'Mì Ý sốt bò',so_luong:2,thanh_tien:130000}] },
    { id_don_hang: 'DH0003', tong_tien: 155000, thanh_toan: { phuong_thuc: 'tiền mặt' }, trang_thai: 'Thành công',
      mon_an: [{ten:'Gà rán truyền thống',so_luong:1,thanh_tien:50000},{ten:'Khoai tây',so_luong:1,thanh_tien:105000}] }
  ];
  localStorage.setItem('orders', JSON.stringify(sampleOrders));
}
if (!localStorage.getItem('reviews')) {
  const sampleReviews = [
    { id_don_hang: 'DH0001', rating: 4 },
    { id_don_hang: 'DH0003', rating: 5 }
  ];
  localStorage.setItem('reviews', JSON.stringify(sampleReviews));
}
const ordersList = document.getElementById('ordersList');
const searchInput = document.getElementById('searchInput');
const searchCount = document.getElementById('searchCount');
const popup = document.getElementById('popup');
const billBody = document.getElementById('billBody');
const billTotal = document.getElementById('billTotal');
const closePopup = document.getElementById('closePopup');
function formatVND(n){return n.toLocaleString('vi-VN')+' VND';}
function getOrders(){return JSON.parse(localStorage.getItem('orders'))||[];}
function getReviews(){return JSON.parse(localStorage.getItem('reviews'))||[];}
function findRating(id){const r=getReviews().find(x=>x.id_don_hang===id);return r?r.rating:0;}
function renderList(keyword=''){
  const kw=keyword.toLowerCase();
  const orders=getOrders().filter(o=>o.trang_thai==='Thành công');
  const filtered=orders.filter(o=>{
    if(o.id_don_hang.toLowerCase().includes(kw))return true;
    return o.mon_an.some(m=>m.ten.toLowerCase().includes(kw));
  });
  ordersList.innerHTML='';
  searchCount.textContent=filtered.length+' kết quả';
  filtered.forEach(o=>{
    const card=document.createElement('div');
    card.className='order-card';
    card.innerHTML=`
      <div class="info-row">
        <div class="info-item">Mã: ${o.id_don_hang}</div>
        <div class="info-item">Tổng: ${formatVND(o.tong_tien)}</div>
        <div class="info-item">Thanh toán: ${o.thanh_toan.phuong_thuc}</div>
      </div>`;
    const rating=findRating(o.id_don_hang);
    const stars=document.createElement('div');
    if(rating>0){
      stars.className='stars-box';
      for(let i=1;i<=5;i++){
        const s=document.createElement('span');
        s.textContent='★';
        s.style.opacity=i<=rating?'1':'0.25';
        stars.appendChild(s);
      }
    }else{
      stars.className='stars-empty';
      stars.textContent='Chưa đánh giá';
    }
    card.appendChild(stars);
    card.addEventListener('click',()=>showPopup(o));
    ordersList.appendChild(card);
  });
}
function showPopup(o){
  billBody.innerHTML=o.mon_an.map(m=>`<div><span>${m.ten} x${m.so_luong}</span><span>${formatVND(m.thanh_tien)}</span></div>`).join('');
  billTotal.textContent=formatVND(o.tong_tien);
  popup.style.display='flex';
}
closePopup.addEventListener('click',()=>popup.style.display='none');
popup.addEventListener('click',e=>{if(e.target===popup)popup.style.display='none';});
searchInput.addEventListener('input',e=>renderList(e.target.value));
renderList();