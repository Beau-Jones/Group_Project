let button = document.getElementById('emailbutton');

button.onclick = function() {
    emailField = document.getElementById('email').value;
    firstname = document.getElementById('fname').value;
    lastname = document.getElementById('lname').value;
    fromstate = document.getElementById('fromstate').value;
    if (emailField == '') {
        alert("Please enter your email address");
    } else {
        alert(`Thank you!\n\nFirst name: ${firstname}\nLast name: ${lastname}\nState: ${fromstate}\nEmail: ${emailField}`)
    }
}