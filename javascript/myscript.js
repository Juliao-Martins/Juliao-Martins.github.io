const sInfo = document.getElementById('special-info');

const caption = {
  first: 'Ami nia website ida nee sei falta husi buat barak karik kolega sira iha hanoin, sujestaun, ou kritika bele haruka karta liu husi ami nia email <a href="mailto:juliaodejesusmartins@gmail.com">juliaodejesusmartins@gmail.com</a>',
  second: "Ami nia projetu ida nee <b><i>Open Source</i></b>, karik kolega sira iha interese atu dezenvolve diak liu tan bele foti ami nia <b>Source Code</b> iha <a href='https://github.com/Juliao-Martins/' target='_blank'>GitHub</a>. Ami iha esperansa wainhira serbisu ida nee ida kolabora ho ema barak."
}

let i = 0;
window.setInterval(() => {
  if(i === 0) {
    sInfo.innerHTML = caption.second;
    console.log(i);
    i = 1;
  } else {
    sInfo.innerHTML = caption.first;
    console.log(i);
    i = 0;
  }
}, 12000);