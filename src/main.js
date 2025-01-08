import './style.css'


document.getElementById("do-action").addEventListener('click', function() {
  showMyCaptcha()
})


function showMyCaptcha() {
  var container = document.querySelector("#my-captcha-container");
  
  AwsWafCaptcha.renderCaptcha(container, {
      apiKey: import.meta.env.VITE_API_KEY,
      onSuccess: captchaExampleSuccessFunction,
      onError: captchaExampleErrorFunction,
  });
}

function captchaExampleSuccessFunction(wafToken) {
  console.log(wafToken);
  
  AwsWafIntegration.fetch(import.meta.env.VITE_URL_API_INTEGRATION, {
      method: "POST",
  });
}

function captchaExampleErrorFunction(error) {
}