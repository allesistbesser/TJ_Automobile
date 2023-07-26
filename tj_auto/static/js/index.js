// time visit duration
var visitStartTime
if (sessionStorage.getItem('visitStartTime')) {
  visitStartTime = sessionStorage.getItem('visitStartTime')
} else {
  var visitStartTime = new Date().getTime()
  sessionStorage.setItem('visitStartTime', visitStartTime)
}
//  sessionStorage.setItem('visitStartTime', true);
// var visitStartTime = new Date().getTime(); // Sayfa ziyaretinin başlangıç zamanı

function updateVisitDuration() {
  var currentTime = new Date().getTime(); // Güncel zaman
  var visitDuration = Math.floor((currentTime - visitStartTime) / 1000 / 60); // Ziyaret süresi dakika cinsinden hesaplanır
  // console.log("Ziyaret Süresi: " + visitDuration + " dakika");
  if (visitDuration < 1) {
    document.querySelector("#visit1").innerHTML = "Herzlich Willkommen"
  } else {
    document.querySelector("#visit1").innerHTML = "Online seit " + visitDuration + " Minuten"
  }

  // İstenilen işlemler buraya eklenebilir, örneğin, ziyaret süresini sayfada göstermek için bir HTML elementini güncelleyebilirsiniz
}
console.log("visit calisti");
// Her dakikada bir ziyaret süresini güncelle
setInterval(updateVisitDuration, 10000);

// Welcome Text ----------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  var welcomeMessage;
  if (!sessionStorage.getItem('visited')) {
    welcomeMessage = document.getElementById('welcome-message');

    // İlk 10 saniye boyunca hoş geldiniz mesajını görünür kıl
    var messageTimeOut = setTimeout(() => {
      welcomeMessage.style.opacity = '0';
      window.removeEventListener("mousemove", handleMouseDown);
    }, 10000);

    // Fare hareketine bağlı olarak hoş geldiniz mesajını takip et
    window.addEventListener('mousemove', handleMouseDown);
    console.log("welcome calisti");
    sessionStorage.setItem('visited', true);
  } else {
    document.getElementById('welcome-message').style.fontSize = "0"
  }

  function handleMouseDown(e) {
    targetX = e.clientX;
    targetY = e.clientY + 30;
  }
  var x = window.innerWidth / 2;
  var y = window.innerHeight / 2;

  var targetX = x;
  var targetY = y;
  var velocityX = 0;
  var velocityY = 0;
  var easing = 0.1;

  function drawLetterA() {
    var dx = targetX - x;
    var dy = targetY - y;
    velocityX = dx * easing;
    velocityY = dy * easing;

    x += velocityX;
    y += velocityY;

    welcomeMessage.style.left = x + "px";
    welcomeMessage.style.top = y + "px";
  }
  window.addEventListener("resize", function () {
    x = window.innerWidth / 2;
    y = window.innerHeight / 2;
    welcomeMessage.style.left = x + "px";
    welcomeMessage.style.top = y + "px";
  });

  function animate() {
    drawLetterA();
    requestAnimationFrame(animate);
  }

  animate();
});

// logo_imgage change with click
let index = 0
let liste1 = ["base_logo6.png", "base_logo5.png", "tj_logo32.png", "tj_logo34.png", "tj_logo37.png", "tj_logo39.png", "tj_logo40.png"]
let logoImg = document.querySelector('#logo_img')
logoImg.innerHTML = `<img src="../static/img/logo/${liste1[index]}" style="height: 55px; border-radius: 5px;" alt="Logo"> <i>${index}</i>`

logoImg.addEventListener('click', function () {
  if (index >= liste1.length - 1) {
    index = 0
  } else {
    index += 1
  }
  console.log(liste1[index]);
  logoImg.innerHTML = `<img src="../static/img/logo/${liste1[index]}" style="height: 55px; border-radius: 5px;" alt="Logo"> <i>${index}</i>`
})



// openingTime control - öffnungs Zeit kontrol
// document.addEventListener("DOMContentLoaded", function () {
var today = new Date();
var dayNumber = today.getDay();
var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
var day = days[dayNumber];
console.log("opening time arasi");
document.getElementById(day).style.backgroundColor = "gray"

var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();

var saatElementi = document.getElementById(day);
var saatler = saatElementi.nextElementSibling.textContent;
try {
  if (saatler.includes("geschlossen")) {
    document.getElementById("openingHours").innerText = "Jetz geschlossen"
    document.getElementById("openingHours").style.color = "red"
  } else {
    var saatAraligi = saatler.split("–");
    var startHour = parseInt(saatAraligi[0].split(":")[0]);
    var endHour = parseInt(saatAraligi[1].split(":")[0]);
    var startMinute = parseInt(saatAraligi[0].split(":")[1]);
    var endMinute = parseInt(saatAraligi[1].split(":")[1]);

    if ((currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
      (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute))) {

      document.getElementById("openingHours").innerText = "Jetz geöffnet"
      document.getElementById("openingHours").style.color = "green"
    } else {

      document.getElementById("openingHours").innerText = "Jetz geschlossen"
      document.getElementById("openingHours").style.color = "red"
    }
  }
} catch (error) {
  console.log(error);
}

// });

// banner image change with click and with every time the page is refreshed
let liste2 = ["2023-bmw-3.png", "mer_sl500.png", "mercedes_eq.png", "mercedes_eq1.png", "mercedes3.png", "mercedes5.png"]
let i = Math.floor(Math.random() * liste2.length - 1) + 1
try {
  let logoBanner = document.querySelector('.banner-img')
  logoBanner.innerHTML = `<img src="../static/img/slider/${liste2[i]}" style="width: 700px;" alt="">`

  logoBanner.addEventListener('click', function () {
    if (i >= liste2.length - 1) {
      i = 0
    } else {
      i += 1
    }
    logoBanner.innerHTML = `<img src="../static/img/slider/${liste2[i]}" style="width: 700px;" alt="">
  <h5> ${i}</h5>`
  })
} catch (error) {
  console.log(error);
}
