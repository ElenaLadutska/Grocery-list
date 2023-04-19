const input = document.getElementById('text-input');
const groceryList = document.getElementById('grocery-list');
const btnDeleteAll = document.getElementById('deleteAll');
const btnDeleteChosenItems = document.getElementById('deleteChosen');

const addGood = () => {
  const goodLi = document.createElement('li');
  const goodA = document.createElement('a');
  const goodText = document.createElement('p')

  goodA.href = "#";
  goodText.textContent = input.value;

  goodLi.append(goodA);
  goodA.append(goodText)
  groceryList.append(goodLi);

  goodLi.addEventListener('click', () => {
    goodLi.classList.toggle('chosen');
    checkTheList(btnDeleteChosenItems)
  });
};

const checkTheList = (btnName) => {
  btnName.classList.add('active')
};

input.addEventListener('keydown', event => {
  if (( event.code === 'NumpadEnter' || event.code === 'Enter') && input.value) {
    addGood();
    checkTheList(btnDeleteAll);
    input.value = '';
  };
});

btnDeleteAll.addEventListener('click', () => {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild)
  };

  btnDeleteAll.classList.toggle('active');
});

btnDeleteChosenItems.addEventListener('click', () => {
  const items = Array.from(groceryList.children).filter(item => {
    if (item.className === 'chosen') {
      item.remove()
    }
  });

  if (!items.length || !groceryList.children.length) {
    btnDeleteChosenItems.classList.remove('active');
  };

  if (!groceryList.children.length) {
    btnDeleteAll.classList.remove('active')
  }
})

