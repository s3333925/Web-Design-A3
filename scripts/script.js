// Forget or remember user contact information

checkUserDetails();

// Function to check if any user data is stored in local storage
function checkUserDetails() {
  if (localStorage.getItem("name") === null) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  } else {
    document.getElementById("name").value = localStorage.name;
    document.getElementById("email").value = localStorage.email;
    document.getElementById("remember").setAttribute("checked", "checked");
  }
}

// Function to clear or store user data in local storage
function forgetOrRememberMe() {
  // If switch is unchecked delete user information from local storage
  if (document.getElementById("remember").checked !== true) {
    localStorage.clear();
  }
  // Otherwise store user information in local storage
  else {
    localStorage.name = document.getElementById("name").value;
    localStorage.email = document.getElementById("email").value;
  }
}

// Back to top

let button = document.getElementById("button-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
button.addEventListener("click", backToTop);

function backToTop() {
  document.documentElement.scrollTop = 0;
}
