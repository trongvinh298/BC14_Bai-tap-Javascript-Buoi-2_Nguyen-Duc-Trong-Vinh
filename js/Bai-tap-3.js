function quyDoi() {
  var usPrice = 23500;
  var usInput = document.getElementById("soTienUSD");
  var vndExchange = usInput.value * usPrice;
  var tienQuyDoi = document.getElementById("tienQuyDoi");
  tienQuyDoi.innerHTML = "Số tiền sau quy đổi: " + vndExchange + " VND";
}
