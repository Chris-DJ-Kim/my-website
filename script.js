// Makes welcome message fade in and out--can shorten later by making a function
window.onload = () => {
  const firstLine = document.getElementById("first-line");
  const secondLine = document.getElementById("second-line");
  const thirdLine = document.getElementById("third-line");

  const backGround = document.getElementsByClassName("background")[0];
  firstLine.style.opacity = "1";
  firstLine.style.transition = "1s ease 1s";
  secondLine.style.opacity = "1";
  secondLine.style.transition = "1s ease 2s";
  thirdLine.style.opacity = "1";
  thirdLine.style.transition = "1s ease 3s";

  setTimeout(() => {
    firstLine.style.opacity = "0";
    firstLine.style.transition = ".4s ease 1s";
    secondLine.style.opacity = "0";
    secondLine.style.transition = ".4s ease 2s";
    thirdLine.style.opacity = "0";
    thirdLine.style.transition = ".4s ease 3s";
  }, 6000);

  setTimeout(() => {
    backGround.style.opacity = "1";
    backGround.style.transition = "1s ease";
  }, 10000);
};
