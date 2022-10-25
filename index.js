const input = document.getElementById('text-input');
let groceryList = document.getElementById('grocery-list');
const eraser = document.getElementById('eraser');

input.addEventListener('keydown', event => {
  if( event.code === 'NumpadEnter' || event.code === 'Enter') {
    addGood();
    input.value = '';
  };
});

const addGood = () => {
  let good = document.createElement('li');
  good.className ='good-li';
  good.textContent = input.value;
  groceryList.append(good);

  good.addEventListener('click', function() {
    good.style.textDecoration = 'line-through';
  });
};

eraser.addEventListener('click', function() {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild)
  };
});
