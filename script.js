// Scroll animasyonları
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Sayfa yüklendiğinde ve scroll olduğunda çalıştır
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Disclaimer Modal
const disclaimerBtn = document.getElementById('disclaimerBtn');
const disclaimerModal = document.getElementById('disclaimerModal');
const closeBtn = document.getElementById('closeBtn');

disclaimerBtn.addEventListener('click', () => {
    disclaimerModal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    disclaimerModal.classList.remove('active');
});

// Modal dışına tıklayınca kapat
disclaimerModal.addEventListener('click', (e) => {
    if (e.target === disclaimerModal) {
        disclaimerModal.classList.remove('active');
    }
});
