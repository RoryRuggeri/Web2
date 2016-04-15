setInterval(function(){
  var date = new Date();
  var format = [
      ("0" + date.getHours()).substr(-2)
    , ("0" + date.getMinutes()).substr(-2)
    , ("0" + date.getSeconds()).substr(-2)
  ].join(":");
  document.getElementById("output").innerHTML = format;
}, 500);