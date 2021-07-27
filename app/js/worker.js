var workerResult = 0;
onmessage = function(e) {
  console.log('Воркер за работой');
  let timeSeconds=e.data[0];
  function iterSec() { --timeSeconds; }
  let timer = setInterval(function(){
    iterSec();
    if (timeSeconds<=0) {
      console.log('Воркер отправит сообщение');
      self.postMessage(1);
      clearInterval(timer);
    }
  },1000);

}

// function runTimer(timeSeconds) {
//   let minutes = timeSeconds/60; // Получаем минут
//   let seconds = timeSeconds%60; // Получаем секунды
//   if (timeSeconds <= 0) {
//         // Таймер удаляется
//         clearInterval(timer);
//         // Выводит сообщение что время закончилось
//         workerResult = e.data[0]+100;
//         postMessage(workerResult);
//         audio.play();
//     } else { // Иначе
//         // Создаём строку с выводом времени
//         let strTimer = Math.trunc(minutes)+ ":" + (seconds<10 ? "0"+seconds : seconds);// + " Всего секунд:" + timeSeconds;
//         // Выводим строку в блок для показа таймера
//         //$('#timer').html(strTimer);
//     }
//     --timeSeconds; // Уменьшаем таймер
// }
