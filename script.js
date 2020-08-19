// function for menu hover animations
window.onload = () => {
  const elements = document.getElementsByTagName("i");
  for (i = 0, len = elements.length; i < len; i++) {
    elements[i].style.transition = ".6s ease";
  }
};

// function for welcome message--can prob shorten later
window.onload = () => {
  const firstLine = document.getElementById("first-line");
  const secondLine = document.getElementById("second-line");
  const thirdLine = document.getElementById("third-line");

  firstLine.style.opacity = "1";
  firstLine.style.transition = "1s ease 1s";
  secondLine.style.opacity = "1";
  secondLine.style.transition = "1s ease 2s";
  thirdLine.style.opacity = "1";
  thirdLine.style.transition = "1s ease 3s";
  setTimeout(() => {
    firstLine.style.opacity = "0";
    firstLine.style.transition = ".6 ease 1s";
    secondLine.style.opacity = "0";
    secondLine.style.transition = ".6 ease 2s";
    thirdLine.style.opacity = "0";
    thirdLine.style.transition = ".6 ease 3s";
  }, 6000);
};
