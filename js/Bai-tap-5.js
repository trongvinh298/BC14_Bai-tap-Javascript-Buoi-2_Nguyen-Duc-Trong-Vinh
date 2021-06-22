function tinhTongKS() {
  var numb = document.getElementById("soTuNhien");
  var numb1 = Math.floor(numb.value / 10);
  var numb2 = numb.value - numb1 * 10;
  var sum = numb1 + numb2;
  var tongKS = document.getElementById("tongKS");
  tongKS.innerHTML = "  " + sum;
}
