import '../styles/main.css';

declare global {
  interface Window {
    imageMapResize: () => void;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const readMoreLinks = document.querySelectorAll<HTMLAnchorElement>('.read-more');
  const modals = document.querySelectorAll<HTMLDivElement>('.modal');
  const closeButtons = document.querySelectorAll<HTMLSpanElement>('.close');
  const resizeMaps = () => {
    if (typeof window.imageMapResize === 'function') {
      window.imageMapResize();
    }
  };
  
  resizeMaps();

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
  
// expand cryptid map
const cryptidMap = document.getElementById('cryptidMap') as HTMLImageElement | null;
const mapModal = document.getElementById('mapModal') as HTMLDivElement | null;
const mapExpanded = document.getElementById('mapExpanded') as HTMLImageElement | null;

if (cryptidMap && mapModal && mapExpanded) {
  cryptidMap.addEventListener('click', () => {
    mapModal.style.display = 'block';
    mapExpanded.src = cryptidMap.src;
    mapExpanded.alt = cryptidMap.alt;
  });
}

 // hover to show cryptid images
 const hoverImages = document.querySelectorAll<HTMLImageElement>('.hover-image');
 const mapAreas = document.querySelectorAll<HTMLAreaElement>('area');

 function hideHoverImages() {
   hoverImages.forEach(img => {
     img.style.display = 'none';
   });
 }

 function showHoverImage(id: string, event: MouseEvent) {
   hideHoverImages();
   const img = document.getElementById(id) as HTMLImageElement;
   if (img) {
     img.style.display = 'block';
     img.style.top = `${event.pageY - 150}px`;
     img.style.left = `${event.pageX + 20}px`;
   }
 }

 mapAreas.forEach(area => {
   const id = area.getAttribute('data-img');
   if (!id) return;

   area.addEventListener('mouseover', (e) => showHoverImage(id, e));
   area.addEventListener('mousemove', (e) => showHoverImage(id, e));
   area.addEventListener('mouseout', hideHoverImages);
 });


});
