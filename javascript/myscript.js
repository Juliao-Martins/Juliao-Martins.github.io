// catch an HTML element with id="special-info"
const sInfo = document.getElementById('special-info');

// declaration some object with const keyword variable
const caption = {
  first: 'Ami nia website ida nee sei falta husi buat barak karik kolega sira iha hanoin, sujestaun, ou kritika bele haruka karta liu husi ami nia email <a href="mailto:juliaodejesusmartins@gmail.com">juliaodejesusmartins@gmail.com</a>',
  second: "Ami nia projetu ida nee <b><i>Open Source</i></b>, karik kolega sira iha interese atu dezenvolve diak liu tan bele foti ami nia <b>Source Code</b> iha <a href='https://github.com/Juliao-Martins/' target='_blank'>GitHub</a>. Ami iha esperansa wainhira serbisu ida nee ida kolabora ho ema barak."
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