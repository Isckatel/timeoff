console.log("Скрипт с темами подключен");
$("#fiol").on("click",function(){
  $("body").css("background","url(../img/fiolet.png) repeat");
  $('.backMainColor').css({"background":"#ffc6e5", "box-shadow": "inset 0 0 6px rgba(255, 95, 175, 0.5)"});
  // $('#countPeriod').css("background","#ffc6e5");
  // $('details').css("background","#ffc6e5");
  $('.themeBox').css({'background':'#ffc6e5', 'border':'1px solid #ff5faf'});
  $('#timerbox').css({'background':'#ff5faf','box-shadow': 'inset 2px 2px 5px rgba(255, 95, 175, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)'});
  $('.buttons').css({'background':'#ffc6e5', 'border':'1px solid #ff5faf'});
});

$("#sil").on("click",function(){
  $("body").css("background","");
  $('.backMainColor').css({"background":"", "box-shadow": ""});
  $('.themeBox').css({'background':'', 'border':''});
  $('#timerbox').css({'background':'','box-shadow': ''});
  $('.buttons').css({'background':'', 'border':''});
});
