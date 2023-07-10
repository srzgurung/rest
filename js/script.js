window.addEventListener('scroll', function() {
  var scrollBtn = document.querySelector('.scroll-top-btn');
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

document.querySelector('.scroll-top-btn').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: smooth
  });
});

// login form
function openForm(){
  document.getElementById("login-box").style.display="block";
  document.getElementById("register-box").style.display="none";
  
}
function closeForm(){
  document.getElementById("login-box").style.display="none";
}

// sign up form
function openRegister(){
  document.getElementById("register-box").style.display="block";
  document.getElementById("login-box").style.display="none";
  
}
function closeRegister(){
  document.getElementById("register-box").style.display="none";
}


