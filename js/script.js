function ibg() {

  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

let questions = document.querySelectorAll(".question__label");
let questionText = document.querySelectorAll(".question__text");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function(e) {
    questions[i].classList.toggle('_active');
    setTimeout(function() {questionText[i].classList.toggle('_active')}, 200);
  })
}

