 // time visit duration
 var visitStartTime
 if (sessionStorage.getItem('visitStartTime')) {
  visitStartTime = sessionStorage.getItem('visitStartTime')
   }else {
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
      document.querySelector("#visit1").innerHTML = "Willkommen auf unserer Webseite"
    } else {
      document.querySelector("#visit1").innerHTML = "Sie sind seit " + visitDuration + "​ ​Minuten auf unserer Seite"
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
  }else{
    document.getElementById('welcome-message').style.fontSize = "0"
  }

  
  function handleMouseDown(e) {
    welcomeMessage.style.top = `${e.clientY + 50}px`;
    welcomeMessage.style.right = `${window.innerWidth - e.clientX - 250}px`;
  }
});

