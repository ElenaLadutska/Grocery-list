const input = document.getElementById('text-input');
const groceryList = document.getElementById('grocery-list');
const eraser = document.getElementById('eraser');

input.addEventListener('keydown', event => {
  if( event.code === 'NumpadEnter' || event.code === 'Enter') {
    addGood();
    input.value = '';
  };
});

const addGood = () => {
  const good = document.createElement('li');
  good.className ='good-li';
  good.textContent = input.value;
  groceryList.append(good);

  good.addEventListener('click', function() {
    good.classList.toggle('through');
  });
};

eraser.addEventListener('click', function() {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild)
  };
});
