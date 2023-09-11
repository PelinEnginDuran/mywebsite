const searchform = document.querySelector(".search-form")
console.log(searchform);
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", function() {
    searchform.classList.toggle("active");
});
