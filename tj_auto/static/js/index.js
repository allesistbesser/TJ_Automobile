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
    welcomeMessage.style.top = `${e.clientY + 50}px`;
    welcomeMessage.style.right = `${window.innerWidth - e.clientX - 250}px`;
  }
});

// logo_imgage change with click
let index = 0
let logoImg = document.querySelector('#logo_img')
logoImg.addEventListener('click', function () {
  let liste1 = ["tj_logo32.png", "tj_logo34.png", "tj_logo37.png", "tj_logo39.png","tj_logo40.png","base_logo3.png","base_logo1.png"]
  if (index >= liste1.length - 1) {
    index = 0
  } else {
    index += 1
  }
  console.log(liste1[index]);
  logoImg.innerHTML = `<img src="../static/img/logo/${liste1[index]}" style="height: 55px; border-radius: 5px;" alt="Logo"> <p>logo: ${index}</p>`
})

// banner image change with click and with every time the page is refreshed
let liste2 = ["2023-bmw-3.png", "mer_sl500.png", "mercedes_eq.png", "mercedes_eq1.png", "mercedes3.png", "mercedes5.png"]
let i = Math.floor(Math.random() * liste2.length - 1) + 1
let logoBanner = document.querySelector('.banner-img')
logoBanner.innerHTML = `<img src="../static/img/slider/${liste2[i]}" style="width: 700px;" alt="">`

logoBanner.addEventListener('click', function () {
  if (i >= liste2.length - 1) {
    i = 0
  } else {
    i += 1
  }
  console.log(liste2[i]);
  logoBanner.innerHTML = `<img src="../static/img/slider/${liste2[i]}" style="width: 700px;" alt="">
  <h5>auto: ${i}</h5>`
})