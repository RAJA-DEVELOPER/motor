/* ============================================
   ACCORDION — FAQ Expand/Collapse
   ============================================ */

const Accordion = {
  init() {
    this.accordions = document.querySelectorAll('.accordion');
    if (!this.accordions.length) return;

    this.accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion__item');

      items.forEach(item => {
        const trigger = item.querySelector('.accordion__trigger');
        const content = item.querySelector('.accordion__content');

        if (!trigger || !content) return;

        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');

          // Close all others in same accordion (single mode)
          if (accordion.dataset.multiple === undefined) {
            items.forEach(otherItem => {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                this.closeItem(otherItem);
              }
            });
          }

          // Toggle current
          if (isOpen) {
            this.closeItem(item);
          } else {
            this.openItem(item);
          }
        });

        // Keyboard support
        trigger.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trigger.click();
          }
        });
      });
    });
  },

  openItem(item) {
    const content = item.querySelector('.accordion__content');
    item.classList.add('active');
    content.style.maxHeight = content.scrollHeight + 'px';

    // Update ARIA
    const trigger = item.querySelector('.accordion__trigger');
    trigger.setAttribute('aria-expanded', 'true');
  },

  closeItem(item) {
    const content = item.querySelector('.accordion__content');
    item.classList.remove('active');
    content.style.maxHeight = '0';

    // Update ARIA
    const trigger = item.querySelector('.accordion__trigger');
    trigger.setAttribute('aria-expanded', 'false');
  }
};
