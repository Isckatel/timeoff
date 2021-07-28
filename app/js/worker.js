let minutes = 0; // Получаем минут
let seconds = 0; // Получаем секунды
let strTimer = '';
let timer;
let timeSeconds = 0;
onmessage = function(e) {
  console.log('Воркер за работой');

  if (e.data[0]=="stop") {
    clearInterval(timer);
    self.postMessage(["stopon",timeSeconds]);
  } else {
    timeSeconds=e.data[0];
    function iterSec() { --timeSeconds; }

    timer = setInterval(function(){
      iterSec();
      if (timeSeconds<=0) {
        console.log('Воркер отправит сообщение');
        self.postMessage(['end',timeSeconds]);
        clearInterval(timer);
      } else {
        minutes = timeSeconds/60; // Получаем минут
        seconds = timeSeconds%60; // Получаем секунды
        strTimer = Math.trunc(minutes)+ ":" + (seconds<10 ? "0"+seconds : seconds);
        self.postMessage([strTimer,timeSeconds]);
      }
    },1000);
  }
}
