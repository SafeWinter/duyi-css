let initMousePosition = 0;
let rotate = 0;

const rotateImage = (img) => (ev) => {
  let delta = ev.clientX - initMousePosition;
  rotate += delta * 0.15;
  initMousePosition = ev.clientX;
  img.style.transform = `rotateY(${-rotate}deg)`;
};

const imgs = document.querySelector(".ring");
imgs.onmousedown = (ev) => {
  initMousePosition = ev.clientX;
  document.onmousemove = rotateImage(imgs);
};
imgs.onmouseup = (ev) => {
  document.onmousemove = null;
};
