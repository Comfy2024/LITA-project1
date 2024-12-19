// Toggle Dropdowns
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const dropdownContent = button.nextElementSibling;

    // Close other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(content => {
      if (content !== dropdownContent) {
        content.classList.remove('show');
      }
    });

    // Toggle the current dropdown
    dropdownContent.classList.toggle('show');
  });
});

// Toggle Navbar on Mobile
const menuBar = document.querySelector('.menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Close dropdowns when clicking outside
window.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.classList.remove('show');
    });
  }
});
