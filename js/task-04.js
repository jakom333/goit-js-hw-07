// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterRef = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  return (counterRef.textContent = counterValue);
};

const decrement = () => {
  counterValue -= 1;
  return (counterRef.textContent = counterValue);
};
btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
