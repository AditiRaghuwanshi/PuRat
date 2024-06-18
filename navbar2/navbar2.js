function openNav() {
  document.getElementById("mySidebar").style.width = "400px";
  document.getElementById("main").style.marginRight = "400px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

function toggleHamburgerMenu() {
  const menu = document.getElementById("hamburgerMenu");
  if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
}

document.getElementById("userIcon").addEventListener("click", function() {
  openNav();
});
