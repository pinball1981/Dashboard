document.addEventListener("DOMContentLoaded", function () {
  const mailContainer = document.getElementById('lottie-mail');
  const animationPath = chrome.runtime.getURL('icons/mail.json');

  console.log("Trying to fetch Lottie JSON from:", animationPath);

  const animation = lottie.loadAnimation({
    container: mailContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath
  });

  animation.addEventListener("data_ready", function () {
    console.log("Lottie animation loaded.");
  });

  animation.addEventListener("error", function (e) {
    console.error("Lottie error:", e);
  });
});
