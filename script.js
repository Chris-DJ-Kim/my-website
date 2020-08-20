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

  function handlePopUp(elementSelector, changeValue, transitionValue) {
    elementSelector.style.left = changeValue;
    elementSelector.style.transition = transitionValue;
  }

  //Pop up message for instructions on changing background image
  const instructionsPopUp = document.getElementById("instructions");
  setTimeout(() => {
    handlePopUp(instructionsPopUp, "3%", "2s");
  }, 10000);

  setTimeout(() => {
    handlePopUp(instructionsPopUp, "-30%", "2s");
  }, 16000);

  const linkPopUp = document.getElementById("image-link-pop-up");
  function showImageLink() {
    setTimeout(() => {
      handlePopUp(linkPopUp, "3%", "2s");
    }, 5000);
  }

  //Randomizes initial background image
  const numberOfBackgroundImages = Object.keys(images).length;

  const initialImageNumber = Math.floor(
    Math.random() * numberOfBackgroundImages
  );

  const backgroundImage = document.getElementById("background-image");
  const backgroundImageLink = document.getElementById("image-link");

  backgroundImage.src = images[initialImageNumber].imageLocation;
  backgroundImageLink.href = images[initialImageNumber].imageUrl;

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
          backgroundImageLink.href = images[currentImageNumber].imageUrl;
          clearTimeout(showImageLink);
          showImageLink();
          break;
        case "ArrowRight":
          if (currentImageNumber === numberOfBackgroundImages - 1)
            currentImageNumber = 0;
          else currentImageNumber++;
          backgroundImage.src = images[currentImageNumber].imageLocation;
          backgroundImageLink.href = images[currentImageNumber].imageUrl;
          clearTimeout(showImageLink);
          showImageLink();
          break;
        default:
          return;
      }
    });
  }, 9500);
};
