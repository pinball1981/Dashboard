document.addEventListener("DOMContentLoaded", function () {
  const mailContainer = document.getElementById('lottie-mail');
  const animationPath = chrome.runtime.getURL('icons/mail.json');

  console.log("Trying to fetch Lottie JSON from:", animationPath);

  fetch(animationPath)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(animationData => {
      console.log("Animation JSON loaded successfully", animationData);

      lottie.loadAnimation({
        container: mailContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData  // Note: pass animationData, not path
      });
    })
    .catch(error => {
      console.error("Failed to load animation JSON:", error);
    });
});
