document.addEventListener('DOMContentLoaded', () => {
  const dropdownLabel = document.querySelector('.dropdown-label');
  dropdownLabel.addEventListener('click', function () {
    this.parentNode.classList.toggle('open');
  });
});
