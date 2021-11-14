// catch an HTML element with id="special-info"
const sInfo = document.getElementById('special-info');

// declaration some object with const keyword variable
const caption = {
  first: 'Ami nia website ida nee sei falta husi buat barak karik kolega sira iha hanoin, sujestaun, ou kritika bele haruka karta liu husi ami nia email <a href="mailto:juliaodejesusmartins@gmail.com">juliaodejesusmartins@gmail.com</a>',
  second: "Ami nia projetu ida nee <b><i>Open Source</i></b>, karik kolega sira iha interese atu dezenvolve diak liu tan bele foti ami nia <b>Source Code</b> iha <a href='https://github.com/Juliao-Martins/Juliao-Martins.github.io' target='_blank'>GitHub</a>. Ami iha esperansa wainhira serbisu ida nee ida kolabora ho ema barak."
}

// catch an HTML element with class="hamburger"
const hamburger = document.getElementsByClassName("hamburger")[0];
// catch an HTML element with parent nav and child ul
const list = document.querySelector("nav>ul");

// adding event click for hamburger
hamburger.addEventListener('click', () => {
  list.classList.toggle('show-hamburger');
  // and change the hamburger background-color
  const hambSpan = document.querySelector(".hamburger>span");
  for(let i = 0; i < hamburger.children.length; ++i) {
    hamburger.children[i].classList.toggle('old-color');
    console.log("ok!");
  }
});

// catch an HTML element with class="container-profile" and class="toggle-photo"
const containerProfile = document.getElementsByClassName("container-profile")[0],
togglePhoto = document.querySelectorAll('.toggle-photo');

for(let i = 0; i < togglePhoto.length; ++i) {
  togglePhoto[i].addEventListener('click', () => {
    containerProfile.classList.toggle('show-container-profile');
  })
}

// declartion variable i
let i = 0;

// the function will execute in 12 second or 1200 millisecond
// always repeat with timing
window.setInterval(() => {
  if(i === 0) {
    sInfo.innerHTML = caption.second;
    i = 1;
  } else {
    sInfo.innerHTML = caption.first;
    i = 0;
  }
}, 12000);


// fetch data here!
// with timing per 0.3 second or 300 millisecond
window.setInterval(() => {
  fetch('../data/te.json')
    .then(x => x.json())
    .then(y => {
      const textarea = document.querySelectorAll('textarea');

      // check if object keys return undefined
      if(y[`${textarea[0].value.toLocaleLowerCase()}`] === undefined) {
        // if condition return true, textarea value of content is empty
        textarea[1].value = "";
      } else {
        // else return false, textarea value content is return for object value
        textarea[1].value = y[`${textarea[0].value.toLocaleLowerCase()}`];
      }

    });
}, 300);