//Simple Automatic slideshow https:css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/

$("#slideshow > div:gt(0)").hide();
$("#slideshow2 > div:gt(0)").hide();
$("#slideshow3 > div:gt(0)").hide();
$("#slideshow4 > div:gt(0)").hide();
$("#slideshow5 > div:gt(0)").hide();
$("#slideshow6 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');

$('#slideshow2 > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(4000)
    .end()
    .appendTo('#slideshow2');

$('#slideshow3 > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow3');

$('#slideshow4 > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(4000)
    .end()
    .appendTo('#slideshow4');

$('#slideshow5 > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow5');

$('#slideshow6 > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(4000)
    .end()
    .appendTo('#slideshow6');

},  5000);