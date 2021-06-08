var ime = document.getElementById("ime");
var email = document.getElementById("email");
var telefon = document.getElementById("telefon");
var poruka = document.getElementById("poruka");
var btn = document.getElementById("formbtn");
console.log(ime);
console.log(email);
console.log(telefon);
console.log(poruka);
console.log(btn);
btn.addEventListener("click", () => {
  if (!ime.value || !email.value || !telefon.value || !poruka.value) {
    alert("Niste popunili sva polja");
  } else {
    alert("Uspjesno ste poslali poruku");
  }
});
