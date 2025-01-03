function toggleSize(button) {
    button.classList.toggle('active'); // Toggles the 'active' class on click
}

(function() {
    emailjs.init("user_yourUserID"); // Replace with your UserID from EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      var templateParams = {
        name: name,
        email: email,
        message: message
      };

        emailjs.send("your_service_id", "your_template_id", templateParams)
        .then(function(response) {
          alert('Message sent successfully!');
        }, function(error) {
          alert('Failed to send message: ' + error.text);
        });
    });
  })();