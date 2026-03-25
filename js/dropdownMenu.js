export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  if (dropdownMenus.length) {
    dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}

function handleClick(e) {
  e.preventDefault();
  this.classList.toggle('active');
  outsideClick(this);
}

function outsideClick(element) {
  const handleOutsideClick = (e) => {
    if (!element.contains(e.target)) {
      element.classList.remove('active');
      document.removeEventListener('click', handleOutsideClick);
    }
  };
  setTimeout(() => {
    document.addEventListener('click', handleOutsideClick);
  });
}