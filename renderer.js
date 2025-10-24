window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('min').addEventListener('click', () => {
    window.api.minimize();
  });
  
  document.getElementById('close').addEventListener('click', () => {
    window.api.close();
  });
});
