let urlParams = new URLSearchParams(window.location.search);
let paramValue = urlParams.get("category");
let filter = document.querySelector(`a[href="/listings?category=${paramValue}"]`);
filter.style.color = "#fe424d";
filter.style.opacity = 1;
