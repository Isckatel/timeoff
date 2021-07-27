console.log("Скрипты подключены");
let timeSeconds = 0;
let timeBreak = 0;
let run = false;
let audio = document.getElementsByTagName("audio")[0];
var myWorker = new Worker("js/worker.js");
let numTimer = 1;//номер таймера 1-работа 2-отдых

$("button").on("click",function(){
  timeSeconds = parseInt($('input[name=timework]:checked').val()) * 60;
  timeBreak = parseInt($('input[name=timebreak]:checked').val()) * 60;

  //поддерживаются ли воркеры
  if (window.Worker) {
    myWorker.postMessage([10]);
    numTimer = 1;
    console.log('Строкой выше запустили воркер');
  } else {
    alert('Вашем браузере не поддерживается работа Веб-воркеров. Работа приложения не возможна.');
  }
  //run = true;
})


myWorker.onmessage = function(e) {
  //result.textContent = e.data;
  console.log('Ответ от воркера: ' + e.data);
  if (e.data == 'end') {
    $('#timer').html('0:00');
    audio.play();
    if (numTimer == 1) {
      console.log('Нужен новый воркер отдыха');
      myWorker.postMessage([timeBreak]);
      numTimer = 2;
    } else if (numTimer==2) {
      console.log('Нужен новый воркер работы');
      myWorker.postMessage([timeSeconds]);
      numTimer = 1;
    }
  }
  else {
    $('#timer').html(e.data);
  }
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
