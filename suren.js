/* ==========================
   SLIDER ABOUT-US
========================== */
const images = [
    "suren04.JPG",
    "suren05.JPG",
    "suren09.JPG",
    "suren07.JPG",
    "suren08.JPG"
];

let index = 0;
const sliderImage = document.getElementById("sliderImage");

// Ganti slide ke kanan
function nextSlide() {
    index++;
    if(index >= images.length) index = 0;
    sliderImage.src = images[index];
}

// Ganti slide ke kiri
function prevSlide() {
    index--;
    if(index < 0) index = images.length - 1;
    sliderImage.src = images[index];
}

// Auto slide setiap 3 detik
setInterval(nextSlide, 3000);

/* ==========================
   CONTACT FORM
========================== */
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault(); // supaya halaman tidak reload
        formMsg.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
    });
}
