const text = document.querySelector('.header .logo');
const textLoad = () => {
setTimeout(() => {
      text.textContent = "ElianZH";
    }, 0);
setTimeout(() => {
      text.textContent = "Portfolio";
    }, 3000);
  }

textLoad();
setInterval(textLoad, 6000);
