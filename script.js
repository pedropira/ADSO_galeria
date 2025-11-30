const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const images = document.querySelectorAll(".image");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const containerImages = document.querySelector(".container");
let index = 0;


images.forEach((image) => {
    image.addEventListener("click", () => {
        let src = image.querySelector("img").src;
        modal.style.opacity = "1";
        modal.style.zIndex = "20";
        containerImages.style.filter = "blur(5px)";
        modal.querySelector("img").src = src;
        modal.querySelector("p").textContent = image.querySelector("p").textContent;
    });
});

close.addEventListener("click", () => {
    modal.style.opacity = "0";
    modal.style.zIndex = "-1";
    containerImages.style.filter = "blur(0px)";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.opacity = "0";
        modal.style.zIndex = "-1";
        containerImages.style.filter = "blur(0px)";
    }
});


next.addEventListener("click", () => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    modal.querySelector("img").src = images[index].querySelector("img").src;
    modal.querySelector("p").textContent = images[index].querySelector("p").textContent;
});

prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    modal.querySelector("img").src = images[index].querySelector("img").src;
    modal.querySelector("p").textContent = images[index].querySelector("p").textContent;
});