// function for menu hover animations

window.onload = () => {
  const elements = document.getElementsByTagName("i");
  for (i = 0, len = elements.length; i < len; i++) {
    elements[i].style.transition = ".6s ease";
  }
  console.log("Hi");
};
