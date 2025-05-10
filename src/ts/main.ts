import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const readMoreLinks = document.querySelectorAll<HTMLAnchorElement>('.read-more');
  const modals = document.querySelectorAll<HTMLDivElement>('.modal');
  const closeButtons = document.querySelectorAll<HTMLSpanElement>('.close');

  // read-more
  readMoreLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const card = link.closest('.card') as HTMLElement;
      const modalId = card.getAttribute('data-modal');
      if (modalId) {
        const modal = document.getElementById(modalId) as HTMLElement;
        if (modal) {
          modal.style.display = 'block';
        }
      }
    });
  });

  // close buttons
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal') as HTMLElement;
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  // clicks outside close it
  window.addEventListener('click', (e: MouseEvent) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        (modal as HTMLElement).style.display = 'none';
      }
    });
  });

  // carousel image clicks
  const carouselImages = document.querySelectorAll<HTMLImageElement>('.carousel-image');

  carouselImages.forEach(img => {
    img.addEventListener('click', () => {
      const modalId = img.dataset.modal;
      const modal = document.getElementById(modalId!);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });
});
