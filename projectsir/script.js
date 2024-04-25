const inputs = document.querySelectorAll('input'),
  button = document.querySelector('button'),
  mobile = document.getElementById('mobile'),
  expire = document.getElementById('expire');

let OTP = '',
  expireInterval = ''

function generateOTP() {
  OTP =
    Math.floor(Math.random() * 10) +
    "" +
    Math.floor(Math.random() * 10) +
    "" +
    Math.floor(Math.random() * 10) +
    "" +
    Math.floor(Math.random() * 10)

  alert('Your OTP is :' + OTP)
  inputs[0].focus()
  expire.innerText = 10;
  expireInterval = setInterval(function () {
    expire.innerText--;
    if (expire.innerText == 0) {
      clearInterval(expireInterval)
    }
  }, 1000);


}

function clearOTP() {
  inputs.forEach((input) => {
    input.value = ''
    if (i == 0) {
      input.removeAttribute('disabled')
    }
    if (i != 0) {
      input.removeAttribute('disabled', true)

    }
    input.setAttribute('disabled', true)
  })
  clearInterval(expireInterval)
  expire.innerText = 0
  button.setAttribute('disabled', true)
  button.classList.remove('active')

}

inputs.forEach((input, index) => {
  input.addEventListener("keyup", function (e) {
    const currentInput = input;
    nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling

    // console.log(currentIndexc, nextInput , prevInput);
    if (nextInput &&
      nextInput.hasAttribute('disabled') &&
      currentInput.value !== ''
    ) {
      nextInput.removeAttribute('disabled', true)
      nextInput.focus()

    }
    if (e.key === 'backspace') {
      inputs.forEach((input, index1) => {
        if (index <= index1 && prevInput) {
          input.setAttribute('disabled', true)
          prevInput.focus()
          prevInput.value = ''
        }

      })

    }
    if (!inputs[3].disabled && inputs[3].value !== '') {
      inputs[3].blur()
      button.classList.add('active')
      return
    }
    button.classList.remove('active')
  })
})

window.addEventListener('load', () => {
  let x = prompt('please enter your number to verify your account');
  if (x) {
    mobile.innerText = x
    generateOTP();
  }
})
button.addEventListener('click', () => {
  let verify = ''
  inputs.forEach((input) => {
    verify += input.value
  })
  // console.log(verify);
  // if (verify === OTP) {
  //   alert('Your account has been verified successfully')
  //   clearOTP()
  // } else {
  //   alert('your OTP is invalid')
  // }
})

