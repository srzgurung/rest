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


document.getElementById("loginBtn").addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "none";
});
