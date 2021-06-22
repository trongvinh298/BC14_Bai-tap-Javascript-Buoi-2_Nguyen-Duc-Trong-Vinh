function tinhPS() {
  var length = document.getElementById("chieuDai");

  var width = document.getElementById("chieuRong");
  var perimeter = (+length.value + +width.value) * 2;
  var acreage = length.value * width.value;
  var dienTich = document.getElementById("dienTich");
  var chuVi = document.getElementById("chuVi");
  dienTich.innerHTML = "Diện tích hình chữ nhật:" + acreage;
  chuVi.innerHTML = "Chu vi hình chữ nhật :" + perimeter;
}
