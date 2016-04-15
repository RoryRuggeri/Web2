// Click function for show the Modal

$(".show").on("click", function(){
  $(".mask").addClass("active");
});

$(".show2").on("click", function(){
  $(".mask2").addClass("active");
});
// Function for close the Modal

function closeModal(){
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function(){
  closeModal();
});

function closeModal2(){
  $(".mask2").removeClass("active");
}

	$(".close2, .send, .mask2").on("click", function(){
  closeModal2();
});


$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal2();
  }
});