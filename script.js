const links = document.querySelectorAll(".navlink");
const chkBox = document.getElementById("navbar-open");

links.forEach((link) => {
  link.addEventListener("click", () => {
    chkBox.checked = !chkBox.checked;
  });
});
