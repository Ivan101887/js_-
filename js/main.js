const imageData = [
  {
    'smSrc': 'blue3d-100x65',
    'lgSrc': 'blue3d-920x600',
  },
  {
    'smSrc': 'cloud-100x65',
    'lgSrc': 'cloud-920x600',
  },
  {
    'smSrc': 'light-100x65',
    'lgSrc': 'light-920x600',

  },
  {
    'smSrc': 'line-100x65',
    'lgSrc': 'line-920x600',
  },
  {
    'smSrc': 'metal-100x65',
    'lgSrc': 'metal-920x600',
  },
  {
    'smSrc': 'pink3d-100x65',
    'lgSrc': 'pink3d-920x600',
  },
  {
    'smSrc': 'puzzle-100x65',
    'lgSrc': 'puzzle-920x600',
  }
];
const elemPic = document.querySelector('#Pic');
init();

function init() {
  const str = `<img src="./images/${imageData[0].lgSrc}.jpg" alt="${imageData[0].lgSrc}" class="pic__lgImg" width="920" height="600">`;
  setImg();
  elemPic.children[1].children [0].innerHTML = str;
  changeLgImg();
}

// 動態載入縮圖
function setImg() {
  imageData.forEach((e, i) => {
    const name = e.smSrc;
    const str = `
      <img src="./images/${name}.jpg" alt="${name}" class="pic__smImg" width="100" height="65" data-order="${i}">`;
      elemPic.children[0].children[0].innerHTML += str;
  })
}

// 監聽縮圖點擊事件調換大圖
function changeLgImg() {
  elemPic.addEventListener('click', (e) => {
    console.log(e.target);
    // if (e.target.hasAttribute('data-order')) {
      const order = parseInt(e.target.dataset.order);
      const name = imageData[order].lgSrc;
      const str = `<img src="./images/${name}.jpg" alt="${name}" class="pic__lgImg" width="920" height="600">`;
      elemPic.children[1].children[0].innerHTML = str;
    // }
  })
}
