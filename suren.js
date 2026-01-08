const images = [
  "suren05.JPG",
  "suren02.JPG",
  "suren03.JPG",
  "suren01.JPG"
];

let index = 0;
const img = document.getElementById("aboutImg");

function nextImage() {
  index = (index + 1) % images.length;
  img.src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
}
/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm && formMsg) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    formMsg.textContent = "Thank you! Your message has been sent.";
    contactForm.reset();
  });
}

/* ================= PORTFOLIO ================= */
const work = {
  img: "suren09.jpg",
  title: "Portrait Photography",
  short:
    "Capturing natural expressions with soft lighting and emotions that reflect personality and authenticity.",
  full:
    "Capturing natural expressions with soft lighting and emotions that reflect personality and authenticity.\n\nEach photo session is designed to make the subject feel comfortable and confident, allowing genuine moments to emerge naturally."
};

let expanded = false;

const portfolioImg = document.getElementById("portfolioImg");
const portfolioTitle = document.getElementById("portfolioTitle");
const portfolioDesc = document.getElementById("portfolioDesc");
const seeMoreBtn = document.getElementById("seeMoreBtn");

window.addEventListener("DOMContentLoaded", () => {
  portfolioImg.src = work.img;
  portfolioTitle.innerText = work.title;
  portfolioDesc.innerText = work.short;
});

function toggleDesc() {
  if (!expanded) {
    portfolioDesc.innerText = work.full;
    seeMoreBtn.innerText = "SEE LESS";
    expanded = true;
  } else {
    portfolioDesc.innerText = work.short;
    seeMoreBtn.innerText = "SEE MORE";
    expanded = false;
  }
}
