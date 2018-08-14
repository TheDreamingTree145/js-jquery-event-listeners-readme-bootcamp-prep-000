//define functions here

$(document).ready(function(){

getIt();
frameIt();
submitIt();
pressIt();
$('img').addClass('tasty')
});

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  });
}



function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert('G key pressed!')
    }
  })
}
