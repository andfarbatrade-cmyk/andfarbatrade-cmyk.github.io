// ===== MOBILE MENU =====
const mobileBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('nav');

if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => {
        nav.classList