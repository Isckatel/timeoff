console.log("Скрипт с темами подключен");
$("#fiol").on("click",function(){
  $("body").css({"background":"url(../img/fiolet.png) repeat","color":"#000"});
  $('.backMainColor').css({"background":"#ffc6e5", "box-shadow": "inset 0 0 6px rgba(255, 95, 175, 0.5)"});
  // $('#countPeriod').css("background","#ffc6e5");
  // $('details').css("background","#ffc6e5");
  $('.themeBox').css({'background':'#ffc6e5', 'border':'1px solid #ff5faf'});
  $('#timerbox').css({'background':'#ff5faf','box-shadow': 'inset 2px 2px 5px rgba(255, 95, 175, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)'});
  $('.buttons').css({'background':'#ffc6e5', 'border':'1px solid #ff5faf',"color":"#000"});
});

$("#sil").on("click",function(){
  $("body").css({"background":"","color":"#000"});
  $('.backMainColor').css({"background":"", "box-shadow": "inset 0 0 6px rgba(154, 147, 140, 0.5)"});
  $('.themeBox').css({'background':'', 'border':''});
  $('#timerbox').css({'background':'','box-shadow': 'inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)'});
  $('.buttons').css({'background':'', 'border':'','color':'#000'});
});

$("#bk").on("click",function(){
  $("body").css({"background":"#191919", "color":"#e5e5e5"});
  $('.backMainColor').css({"background":"#333333", "box-shadow": "inset 0 0 6px rgba(154, 147, 140, 0.5)"});
  // $('#countPeriod').css("background","#ffc6e5");
  // $('details').css("background","#ffc6e5");
  $('.themeBox').css({'background':'#333333', 'border':'1px solid #666666'});
  $('#timerbox').css({'background':'#000','box-shadow': 'inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)'});
  $('.buttons').css({'background':'#191919', 'border':'1px solid #b2b2b2', 'color':'#e5e5e5'});
});
