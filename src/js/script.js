 // Menú móvil
 const menubtn = document.getElementById('menubtn');
 const mobilemenu = document.getElementById('mobilemenu');

 menubtn.addEventListener('click', () => {
   mobilemenu.classList.toggle('hidden');
 });

    // Script para la funcionalidad de desplazamiento del carrusel
    let currentIndex = 0;
    const images = document.querySelectorAll('#carousel > div');
    const totalImages = images.length;

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carousel = document.getElementById('carousel');

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });