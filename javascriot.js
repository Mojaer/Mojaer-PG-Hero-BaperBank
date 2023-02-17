
document.getElementById('submit-btn').addEventListener('click', function (e) {
    const userMail = document.getElementById('user-email');
    const email = userMail.value;
    const userPass = document.getElementById('user-password');
    const password = userPass.value;
    if (email === "momo@h.com" && password === "12345") {
        window.location.href = "bank.html";
        console.log("hello");
    }
    else
        alert("thik kor");

})


