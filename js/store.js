document.addEventListener("DOMContentLoaded", function () {
  const heads = document.querySelectorAll('.store_filter_head');

  heads.forEach(head => {
    head.addEventListener('click', () => {
      const content = head.nextElementSibling;

      if (!content || !content.classList.contains('store_filter_js')) return;

      const isOpen = content.classList.contains('open');

      if (isOpen) {
        content.style.maxHeight = null;
        content.classList.remove('open');
        head.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
        head.classList.add('active');
      }
    });
  });
});