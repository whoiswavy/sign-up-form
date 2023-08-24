// Get references to the password fields
const passwordField1 = document.getElementById('password');
const passwordField2 = document.getElementById('passwordC');
const telField = document.getElementById('phone-number');


const passwordErrorBox = document.getElementById("passwordC-error");
const telErrorBox = document.getElementById("tel-error");

// Add event listener to passwordField2
passwordField2.addEventListener('input', () => {
  const password1 = passwordField1.value;
  const password2 = passwordField2.value;

  if (password1 !== password2) {
    // Passwords don't match, do something else
    passwordErrorBox.innerHTML = 'PASSWORD DOES NOT MATCH'
  } else {
    // Passwords match
    passwordErrorBox.innerHTML = ''
  }
});

telField.addEventListener('input', () => {
    const tel = telField.value;

    if ((tel.length < 10) || (tel.length > 10)) {
        telErrorBox.innerHTML = 'PLEASE ENTER A 10 DIGIT PHONE NUMBER';
    } else {
        telErrorBox.innerHTML = ''
    }
})