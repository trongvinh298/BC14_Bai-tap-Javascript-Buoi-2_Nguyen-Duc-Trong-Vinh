function tinhLuong() {
  var dailyS = 100000;
  var workDay = document.getElementById("soNgay");
  var soTien = document.getElementById("tongLuong");
  var totalS = dailyS * workDay.value;
  soTien.innerHTML = totalS + " VND";
}
