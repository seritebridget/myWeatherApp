function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let seachFormElement = document.querySelector("#search-form");
seachFormElement.addEventListener("submit", handleSearchSubmit);
