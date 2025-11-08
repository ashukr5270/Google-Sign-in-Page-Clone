function getAccounts() {
    return JSON.parse(localStorage.getItem("accounts")) || [];
}

function saveAccounts(accounts) {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

document.getElementById("createForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("newEmail").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const mobile = document.getElementById("mobile").value.trim();

    if (!name || !email || !password || !mobile) {
        alert("⚠️ Please fill in all fields!");
        return;
    }

    const accounts = getAccounts();

    if (accounts.some(acc => acc.email === email)) {
        alert("⚠️ This email is already registered. Try logging in.");
        return;
    }

    accounts.push({ name, email, password, mobile });
    saveAccounts(accounts);

    alert(`🎉 Account created successfully for ${name} (${email}). You can now log in.`);
    window.location.href = "index.html"; // Redirect to login
});