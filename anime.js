let Images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79Q60vz-swqJZ8XyON6-8CKINfUwGWF0OarGXkVuvIzcT-qti",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmfljGtOwj6ArOOLUJsmgtiWtRRQZPeq6o_piuU05FonRlj_8",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9Dd_XA9QoqrlDfYM33OQN9RxlinlCXqhZnpdzreFu_uy1yjZ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmfljGtOwj6ArOOLUJsmgtiWtRRQZPeq6o_piuU05FonRlj_8",
];

let images = document.querySelector(".images");

images.innerHTML = Images.map(
  (value, index) => `<img src=${value} alt="" />`
).join("");

let timer;
let length = Images.length;
let n = 0;

/**
 * 开启轮播
 */
function startLoop() {
  timer = setInterval(() => {
    let transform = `translateX(${-168 * (n % length)}px)`;
    images.style.transform = transform;
    n++;
  }, 1000);
}

/**
 * 关闭轮播
 */
function endLoop() {
  clearInterval(timer);
}
