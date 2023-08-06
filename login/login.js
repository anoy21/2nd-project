
function submitData() {
    var nameTag = document.getElementById("name")
    localStorage.setItem("name", nameTag.value)
  
    var passwordTag = document.getElementById("password")
    localStorage.setItem("password", passwordTag.value)
  
    var emailTag = document.getElementById("email")
    localStorage.setItem("email", emailTag.value)
  }

  
