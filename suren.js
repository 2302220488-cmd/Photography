const images = [
    "suren04.JPG",
    "suren05.JPG",
    "suren09.JPG",
    "suren07.JPG",
    "suren08.JPG"
];

let index = 0;
const sliderImage = document.getElementById("sliderImage");

if (sliderImage) {
    setInterval(() => {
        index = (index + 1) % images.length;
        sliderImage.src = images[index];
    }, 3000);
}

const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        formMsg.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
    });
}
