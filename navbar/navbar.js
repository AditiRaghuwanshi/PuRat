
// Function to open the sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

// Function to close the sidebar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Function to toggle the display of the "More" dropdown menu
function toggleMoreMenu() {
  var moreMenu = document.querySelector('.more-menu');
  if (moreMenu.style.display === "block") {
      moreMenu.style.display = "none";
  } else {
      moreMenu.style.display = "block";
  }
}

// Event listener for the document to close the dropdown menu when clicking outside
document.addEventListener('click', function(event) {
  var isClickInside = document.querySelector('.more-dropdown').contains(event.target);

  if (!isClickInside) {
      document.querySelector('.more-menu').style.display = 'none';
  }
});



