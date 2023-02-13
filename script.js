const navigation = document.querySelector("nav");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + navigation.offsetHeight;
  sections.forEach(function (section) {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
