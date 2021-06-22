function tinhTrungBinh() {
  var a = document.getElementById("soThuNhat");
  var b = document.getElementById("soThuHai");
  var c = document.getElementById("soThuBa");
  var d = document.getElementById("soThuTu");
  var e = document.getElementById("soThuNam");
  var aveRage = (+a.value + +b.value + +c.value + +d.value + +e.value) / 5;
  var trungBinh = document.getElementById("trungBinh");
  trungBinh.innerHTML = aveRage;
}
