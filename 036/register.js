document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name=document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  message.textContent="";
  message.style.color="";

  if(name === "" || email === "" || password === "") {
    alert("Please fill out all fields!");
    message.textContent = "Error: All fields are required!";
    message.style.color = "red";
    return;
  }
  if(!email.includes("@") || !email.includes(".")) {
    alert("Invalid email address!");
    message.textContent = "Error: Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  if(!email.includes("@") || !email.includes("")){
    alert("Invalid email address!");
    message.textContent="Error: Please enter a valid email.";
    message.style.color = "red";
    return;
  }
  if(password.length<6){
    alert("Password must be at least 6 characterslong!");
    message.textContent = "Error: Password too short.";
    message.style.color = "red";
    return;
  }
  sessionStorage.setItem("userName", name);
  sessionStorage.setItem("userEmail", email);

  alert("Registration successful!");
  message.textContent = `Welcome, ${name}! Your registration was successful.`;
  message.style.color = "green";

  document.getElementById("registerForm").reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("open");
  });
});
