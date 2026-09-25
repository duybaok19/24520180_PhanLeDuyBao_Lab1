const themeButton = document.querySelector('#theme-btn');
const savedTheme = localStorage.getItem('theme');

const updateTheme = (theme) => {
  const isDark = theme === 'dark';

  document.body.classList.toggle('dark-theme', isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
};

if (savedTheme === 'dark' || savedTheme === 'light') {
  updateTheme(savedTheme);
} else {
  updateTheme('light');
}

themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  const theme = isDark ? 'dark' : 'light';

  themeButton.setAttribute('aria-pressed', String(isDark));
  localStorage.setItem('theme', theme);
});