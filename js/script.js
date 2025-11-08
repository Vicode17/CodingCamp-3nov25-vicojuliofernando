// Welcoming Speech
document.addEventListener("DOMContentLoaded", function () {
  const name = prompt("Masukkan nama kamu:");
  const welcome = document.getElementById("welcome");
  if (name) {
    welcome.textContent = `Hi ${name}, Welcome To my Web`;
  } else {
    welcome.textContent = "Hi, Welcome To Web";
  }
});

// Form Validation and Output
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("email").value;
   const message = document.getElementById("messageText").value.trim();

  if (!name || !birthdate || !gender || !message) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  document.getElementById("outputName").textContent = name;
  document.getElementById("outputBirth").textContent = email;
  document.getElementById("outputMsg").textContent = message;

  alert("Pesan berhasil dikirim!");
});