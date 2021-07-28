console.log("Скрипты подключены");
let timeSeconds = 0;
let oldTimeSeconds = 0;
let timeBreak = 0;
let audio = document.getElementsByTagName("audio")[0];
var myWorker = new Worker("js/worker.js");
let numTimer = 1;//номер таймера 1-работа 2-отдых
let stop = false;
let sentstop = false;

//Нажали кнопку Запуск
$("#button").on("click",function(){
  timeSeconds = parseInt($('input[name=timework]:checked').val()) * 60;
  timeBreak = parseInt($('input[name=timebreak]:checked').val()) * 60;
  //поддерживаются ли воркеры
  if (window.Worker) {
    myWorker.postMessage([timeSeconds]);
    numTimer = 1;
    $("#pause").css("display","inline-block");
    console.log('Строкой выше запустили воркер');
  } else {
    alert('Вашем браузере не поддерживается работа Веб-воркеров. Работа приложения не возможна.');
  }
});

//Нажата кнопка Паузы
$("#pause").on("click",function(){
  myWorker.postMessage(['stop']);
  $("#pause").css("display","none");
  $("#continue").css("display","inline-block");
  stop = true;
});

//Нажата кнопка Продолжить
$("#continue").on("click",function(){
  if (oldTimeSeconds != 0) myWorker.postMessage([oldTimeSeconds]); else alert("Что-то пошло не так. Обновите страницу!");
  $("#pause").css("display","inline-block");
  $("#continue").css("display","none");
  stop = false;
});

myWorker.onmessage = function(e) {
  console.log('Ответ от воркера: ' + e.data[0]);
  if (e.data[0] == 'end') {
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
  else if(e.data[0] == 'stopon') {

  }
  else if (!stop) {
    $('#timer').html(e.data[0]);
    oldTimeSeconds=e.data[1];
  }
}

$("#delete").on("click",function(){
  myWorker.terminate();
});
