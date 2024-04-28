document.getElementById('contactForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var errorElement = document.getElementById('error');

    // Check if the email is valid
    if (!isValidEmail(emailInput.value)) {
        // Prevent the form from submitting
        event.preventDefault();
        // Display error message
        errorElement.style.display = 'block';
    } else {
        // Hide error message if email is valid
        errorElement.style.display = 'none';
    }
});

// Function to validate email
function isValidEmail(email) {
    // Using a simple regex for email validation
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
// Add hover effect for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff9900'; // Change text color on hover
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Revert text color when mouse leaves
    });
});

// Add buttons to specified sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const button = document.createElement('button');
        const sectionTitle = section.querySelector('h2').textContent.toLowerCase();
        
        switch (sectionTitle) {
            case 'mission statement':
                button.textContent = 'Contact Us';
                button.addEventListener('click', function() {
                    window.location.href = 'contact.html';
                });
                section.appendChild(button);
                break;
            case 'company history':
                button.textContent = 'Home Page';
                button.addEventListener('click', function() {
                    window.location.href = '/';
                });
                section.appendChild(button);
                break;
            case 'future plans':
                button.textContent = 'Services';
                button.addEventListener('click', function() {
                    window.location.href = 'services.html';
                });
                section.appendChild(button);
                break;
            default:
                break;
        }
    });
});

// Function to display the newsletter signup popup
function showPopup() {
    document.getElementById('newsletterPopup').style.display = 'block';
}

// Function to close the newsletter signup popup
function closePopup() {
    document.getElementById('newsletterPopup').style.display = 'none';
}

// Function to validate email
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

// Function to handle newsletter signup form submission
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var errorElement = document.getElementById('newsletterError');

    if (!isValidEmail(emailInput.value)) {
        event.preventDefault();
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
        // You can add further logic here, such as submitting the form data via AJAX
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php'); // Replace 'send_email.php' with the URL of your server-side script
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Email sent successfully');
            // You can perform any additional actions here, such as displaying a success message to the user
        } else {
            console.error('Error sending email');
            // Handle errors or display an error message to the user
        }
    };
    xhr.send(formData);
});

