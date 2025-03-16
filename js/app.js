var count = document.getElementById("count");
var button = document.getElementById("Change");
var currentCount = parseInt(count.textContent);
button.addEventListener("click", function () {
  currentCount += 1;
  count.textContent = currentCount;
});
