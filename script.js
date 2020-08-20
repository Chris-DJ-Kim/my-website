//Any reference to 'images' object is accessed from images-store.js
//Makes welcome message fade in and out--can shorten later by making a function
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
  }, 4500);

  setTimeout(() => {
    backGround.style.opacity = "1";
    backGround.style.transition = "1s ease";
  }, 8000);

  //Randomizes initial background image
  let backgroundImage = document.getElementById("background-image");
  //Link will be used in popup message that asks if user wants to see image source
  let backgroundImageLink = "";

  const numberOfBackgroundImages = Object.keys(images).length;

  let initialImageNumber = Math.floor(Math.random() * numberOfBackgroundImages);

  backgroundImage.src = images[initialImageNumber].imageLocation;
  backgroundImageLink = images[initialImageNumber].imageUrl;

  //Enable user to switch images with arrow keys
  //In future add buffer time between arrow keys to prevent super fast swapping
  //ALSO ADD TRANSITION EFFECTS!!!
  let currentImageNumber = initialImageNumber;
  setTimeout(() => {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          if (currentImageNumber === 0)
            currentImageNumber = numberOfBackgroundImages - 1;
          else currentImageNumber--;
          backgroundImage.src = images[currentImageNumber].imageLocation;
          break;
        case "ArrowRight":
          if (currentImageNumber === numberOfBackgroundImages - 1)
            currentImageNumber = 0;
          else currentImageNumber++;
          backgroundImage.src = images[currentImageNumber].imageLocation;
          break;
        default:
          return;
      }
    });
  }, 9500);
};
