function something(selector) {
  var elements = document.querySelectorAll(selector);

  elements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      var classLink = element.classList[1];
      document.querySelectorAll("." + classLink).forEach(function (el) {
        el.classList.add("over");
      });
      document.querySelectorAll(".section-" + classLink).forEach(function (el) {
        el.style.display = "block";
      });
    });

    element.addEventListener("mouseleave", function () {
      var classLink = element.classList[1];
      document.querySelectorAll("." + classLink).forEach(function (el) {
        el.classList.remove("over");
      });
      document.querySelectorAll(".section-" + classLink).forEach(function (el) {
        el.style.display = "none";
      });
    });
  });
}

something(".hover");
something("ul li a");
