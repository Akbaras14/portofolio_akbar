const menuBtn = document.getElementById("menu-btn");  
const navLinks = document.getElementById("nav-links");  
const menuBtnIcon = menuBtn.querySelector("i");  
  
menuBtn.addEventListener("click", (e) => {  
  navLinks.classList.toggle("open");  
  
  const isOpen = navLinks.classList.contains("open");  
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");  
});  
  
navLinks.addEventListener("click", (e) => {  
  navLinks.classList.remove("open");  
  menuBtnIcon.setAttribute("class", "ri-menu-line");  
});  
  
// ScrollReveal options  
const scrollRevealOption = {  
  distance: "50px",  
  origin: "bottom",  
  duration: 1000,  
};  
  
// ScrollReveal animations  
ScrollReveal().reveal(".header__container img", {  
  ...scrollRevealOption,  
});  
ScrollReveal().reveal(".header__container h1", {  
  ...scrollRevealOption,  
  delay: 500,  
});  
ScrollReveal().reveal(".header__container p", {  
  ...scrollRevealOption,  
  delay: 1000,  
});  
ScrollReveal().reveal(".header__btns", {  
  ...scrollRevealOption,  
  delay: 1500,  
});  
ScrollReveal().reveal(".project__card", {  
  ...scrollRevealOption,  
  interval: 500,  
});  
ScrollReveal().reveal(".experience__list li", {  
  ...scrollRevealOption,  
  interval: 500,  
});  
ScrollReveal().reveal(".footer__container h2", {  
  ...scrollRevealOption,  
});  
ScrollReveal().reveal(".footer__container p", {  
  ...scrollRevealOption,  
  delay: 500,  
});  
ScrollReveal().reveal(".footer__container .mail__to", {  
  ...scrollRevealOption,  
  delay: 1000,  
});  
ScrollReveal().reveal(".footer__socials", {  
  ...scrollRevealOption,  
  delay: 1500,  
});  
  
// Like functionality with username input  
let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount'), 10) : 0; // Initialize like count from local storage  
  
function likePortfolio() {  
  const username = document.getElementById('username').value; // Get the username from input  
  if (username) {  
    const message = `${username} menyukai portofolio anda`; // Include username in the message  
    const whatsappLink = `https://wa.me/+6285893802972?text=${encodeURIComponent(message)}`;  
    window.open(whatsappLink, '_blank');  
  
    likeCount++; // Increment like count  
    localStorage.setItem('likeCount', likeCount); // Update local storage  
    document.getElementById('like-count').innerText = likeCount; // Update like count display  
  } else {  
    alert('Silakan masukkan nama Anda sebelum menyukai.'); // Alert if no name is entered  
  }  
}  
  
// Add event listener to the like button  
const likeButton = document.getElementById('like-button'); // Ensure you have an element with this ID  
likeButton.addEventListener('click', likePortfolio);  
  
// Update the displayed like count on page load  
document.getElementById('like-count').innerText = likeCount;  
