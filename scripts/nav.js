const sections = document.querySelectorAll("section");
const nav =  document.getElementsByTagName("nav")[0];
const navLi = document.querySelectorAll("nav ul.main-menu li");

// Nav Hamburger Toggle
document.getElementById("hamburger").addEventListener("click", function() {
    nav.classList.toggle("show");
    document.getElementsByTagName("header")[0].classList.toggle("show-menu");
    if(document.getElementById("hamburger").innerText == "☰") {
        document.getElementById("hamburger").innerText = "×";
        document.getElementById("hamburger").style.fontSize = "40px";
    } else {
        document.getElementById("hamburger").innerText = "☰";
        document.getElementById("hamburger").style.fontSize = "30px";
    }
});

// Nav Scroll
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 1;
    if (scrollY >= sectionTop ) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};