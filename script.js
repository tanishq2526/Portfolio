// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
};

// On page load, apply saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.dataset.theme = savedTheme;
  themeToggle.checked = savedTheme === 'dark';
};

// Toggle theme on switch change
themeToggle.addEventListener('change', () => {
  const newTheme = themeToggle.checked ? 'dark' : 'light';
  applyTheme(newTheme);
});
window.onload = function() {
  var audio = document.getElementById('player');
  audio.play().catch(function(error) {
      console.log('Autoplay was prevented:', error);
  });
};

document.querySelector('.menu-button').addEventListener('click', function() {
  const menuList = document.querySelector('.menu-list');
  menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('theme-toggle').addEventListener('change', function() {
  document.body.classList.toggle('dark-theme');
});