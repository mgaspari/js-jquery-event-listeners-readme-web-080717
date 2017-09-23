//define functions here

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()

});

var getIt = () => {
  $('p').on('click', ()=>{
    alert('Hey!')
  })
}
// you need to ge the image, change the frame and then also set the class to what it says
var frameIt = () => {
  $('img').on('load', () =>{
    // $(this).css('border', "solid 2px red")
    debugger
    $('img').addClass("tasty")
  })
}

var pressIt = () => {
  $('input').on('keydown', (e) =>{
    if (e.which == 71){
      alert('YOOOO')
    }
  })
}


var submitIt = () => {
  $('form').on('submit', ()=>{
    alert("Your form is going to be submitted now.")
  })
}
