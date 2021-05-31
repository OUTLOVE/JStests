let teamAddForm;
if (document.querySelector('form[method="POST"][action*="/market/"][action*="/team/"]') != undefined) {
           teamAddForm = document.querySelector('form[method="POST"][action*="/market/"][action*="/team/"]')
           
      }
             // добавляем к форме
      if (teamAddForm != undefined){
      teamAddForm.addEventListener('submit', function(event) {
              event.preventDefault();
             
              // дайте скрипту секунду для отправки инфы на сервер, а затем продолжаем как обычно
              setTimeout(function() {
                  teamAddForm.removeEventListener('submit', this);
                  teamAddForm.submit();
              }, 3500)
          });}

console.log('is loaded')
