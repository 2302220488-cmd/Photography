const images = [
    "suren01.JPG",
    "suren02.JPG",
    "suren03.JPG",
    "suren07.JPG",
    "suren09.JPG"
];

let index = 0;
const sliderImage = document.getElementById("sliderImage");

// CEK dulu, kalau slider ada baru jalan
if (sliderImage) {
    setInterval(() => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        sliderImage.src = images[index];
    }, 3000);
}