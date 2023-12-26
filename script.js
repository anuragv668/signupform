btn = document.getElementById('btn');
pass = document.getElementById('userpass');
cpass = document.getElementById('confirmpass');

btn.addEventListener('click', ev => {
  if (pass.value != cpass.value) {
    pass.classList.toggle("error");
    cpass.classList.toggle("error");
    pass.value = '';
    cpass.value = '';
  }
})


