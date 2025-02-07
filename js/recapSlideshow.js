document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired");

  const depth = window.location.pathname.split("/").length - 2;
  const basePath = "../".repeat(depth);

  const slideshowContainer = document.getElementById("slideshow");
  if (slideshowContainer) {
    console.log("Slideshow container found");
    const imageDirectory = `${basePath}images/prev_images/`;
    const imageFiles = [
      "BisonBytes14.jpg",
      "BisonBytes3.jpg",
      "BisonBytes21.jpg",
      "BisonBytes7.jpg",
      "BisonBytes18.jpg",
      "BisonBytes1.jpg",
      "BisonBytes25.jpg",
      "BisonBytes12.jpg",
      "BisonBytes9.jpg",
      "BisonBytes5.jpg",
      "BisonBytes20.jpg",
      "BisonBytes16.jpg",
      "BisonBytes11.jpg",
      "BisonBytes2.jpg",
      "BisonBytes24.jpg",
      "BisonBytes8.jpg",
      "BisonBytes4.jpg",
      "BisonBytes19.jpg",
      "BisonBytes6.jpg",
      "BisonBytes23.jpg",
      "BisonBytes15.jpg",
      "BisonBytes10.jpg",
      "BisonBytes17.jpg",
      "BisonBytes13.jpg",
      "BisonBytes22.jpg",
    ];

    slideshowContainer.innerHTML = "";

    imageFiles.forEach((fileName, index) => {
      const img = document.createElement("img");
      img.src = `${imageDirectory}${fileName}`;
      img.alt = fileName;
      img.className = "rounded-md";
      if (index === 0) {
        img.classList.add("active");
      }
      slideshowContainer.appendChild(img);
    });

    console.log("Slideshow images added");

    const images = slideshowContainer.querySelectorAll("img");
    let index = 0;
    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
      console.log(`Slideshow image index: ${index}`);
    }, 3000);
  } else {
    console.error("Slideshow container not found");
  }
});
