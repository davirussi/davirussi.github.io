
function setEqualHeight(){
  var cw = $('.box1_1').width();
  $('.box1_1').css({
      'height': cw + 'px'
  });
}

 $(document).ready(function () {
     setEqualHeight()
 })

 window.onresize = setEqualHeight;