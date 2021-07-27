console.log("Скрипты подключены");
let timeSeconds = 0;
let timeBreak = 0;
let run = false;
let audio = document.getElementsByTagName("audio")[0];
var myWorker = new Worker("js/worker.js");

$("button").on("click",function(){
  timeSeconds = parseInt($('input[name=timework]:checked').val()) * 60;
  timeBreak = parseInt($('input[name=timebreak]:checked').val()) * 60;

  //поддерживаются ли воркеры
  if (window.Worker) {
    myWorker.postMessage([5]);
    console.log('Строкой выше запустили воркер');
  }

  run = true;
  console.log(timeBreak);
})


myWorker.onmessage = function(e) {
  //result.textContent = e.data;
  console.log('Ответ от воркера' + e.data);
}

// let timer = setInterval(runTimer, 1000);
//
// function runTimer() {
//   let minutes = timeSeconds/60; // Получаем минут
//   let seconds = timeSeconds%60; // Получаем секунды
//   if (run) {
//   // Условие если время закончилось то...
//   if (timeSeconds <= 0) {
//       // Таймер удаляется
//       clearInterval(timer);
//       // Выводит сообщение что время закончилось
//       audio.play();
//   } else { // Иначе
//       // Создаём строку с выводом времени
//       let strTimer = Math.trunc(minutes)+ ":" + (seconds<10 ? "0"+seconds : seconds);// + " Всего секунд:" + timeSeconds;
//       // Выводим строку в блок для показа таймера
//       $('#timer').html(strTimer);
//   }
//   --timeSeconds; // Уменьшаем таймер
// }
// }
