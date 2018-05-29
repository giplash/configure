let buttons = document.querySelectorAll(".openDiscription");

buttons.forEach(function(item) {
  let discription = item.nextElementSibling;
  let height = parseInt(window.getComputedStyle(discription).height)+50;
  item.setAttribute("data-height", height+"px");
  discription.style.transition = "0.4s";
  discription.style.height = 0;
});

buttons.forEach(function(item) {
  let discription = item.nextElementSibling;
  item.addEventListener("click", function(e) {
    if (item.hasAttribute("opened")) {
      discription.style.height = 0;
      item.removeAttribute("opened");
      item.innerHTML = "Открыть описание";
    } else {
      discription.style.height = item.getAttribute("data-height");
      item.setAttribute("opened", "true");
      item.innerHTML = "Закрыть описание";
    }
  })
})
