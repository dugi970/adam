const phoneBtn = document.getElementById('phoneBtn');
const addressBtn = document.getElementById('addressBtn');

const phone = document.getElementById('phone');
const address = document.getElementById('address');

const servicesBtn = document.getElementById('servicesBtn');
const services = document.getElementById('services');

servicesBtn.addEventListener('click', () => {
  services.classList.toggle('show');
});

phoneBtn.addEventListener('click', () => {
  phone.classList.add('show');
});

addressBtn.addEventListener('click', () => {
  address.classList.add('show');
});
