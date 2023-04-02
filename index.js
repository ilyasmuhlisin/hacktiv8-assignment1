var tampil = document.form.show;
function ins(num) {
  tampil.value += num;
}
function samaDengan() {
  tampil.value = eval(tampil.value);
}
function ce() {
  tampil.value = tampil.value.substr(0, tampil.value.length - 1);
}
function ac() {
  tampil.value = "";
}
