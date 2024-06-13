let categoryMenu = document.getElementById("category");
let categoryOption = categoryMenu.querySelector(`option[value="${category}"]`);

if (categoryOption) {
  categoryOption.selected = true;
}
