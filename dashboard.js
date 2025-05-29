document.addEventListener("DOMContentLoaded", function () {
  const bookmarks = document.querySelectorAll(".bookmark");
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      // Open new tab with URL
      chrome.tabs.create({ url });
    });
  });
});
