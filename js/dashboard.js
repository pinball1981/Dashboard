document.querySelectorAll('.bookmark').forEach(el => {
  el.addEventListener('click', () => {
    const url = el.getAttribute('data-url');
    if (url) chrome.tabs.create({ url });
  });
});
