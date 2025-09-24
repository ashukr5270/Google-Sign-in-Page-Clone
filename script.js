// Load accounts
function getAccounts() {
  return JSON.parse(localStorage.getItem("accounts")) || [];
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("⚠️ Please fill in both fields!");
    return;
  }

  const accounts = getAccounts();
  const found = accounts.find(acc => acc.email === email && acc.password === password);

  if (found) {
    alert(`✅ Welcome back, ${found.name}! Login successful.`);
  } else {
    alert("❌ Invalid email or password.");
  }
});

// Forgot email
document.querySelector(".forgot a").addEventListener("click", function (e) {
  e.preventDefault();

  const accounts = getAccounts();

  if (accounts.length === 0) {
    alert("⚠️ No accounts found. Please create one first.");
    return;
  }

  let emailList = accounts.map(acc => acc.email).join("\n");
  alert("📧 Registered Emails:\n" + emailList);
});
