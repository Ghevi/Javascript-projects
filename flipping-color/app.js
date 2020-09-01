const colors = ['blue', 'orangered', 'green', 'yellowgreen', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = () => Math.floor(Math.random() * colors.length)

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})