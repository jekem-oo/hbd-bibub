
function checkAge() {
  const age = document.getElementById("ageInput").value;
  if (age === "20") {
    alert("Selamat ulang tahun sayang yang ke 20! 🎉");
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
  } else {
    alert("Ah yang bener ah, kan sekarang ulang tahun kamu yang ke 20 😝");
  }
}
