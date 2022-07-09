//!!   План   !!\\
/*
1) создать объект переменных ✔️
2) создать ф-цию рендера разметки✔️
3) создать ф-цию для получения рандомных тегов✔️
4) создать ф-цию для обработки нажатия по кнопке buttonCreateElement✔️
5) создать ф-цию для обработки нажатия по кнопке из набора elementsList 
*/

const ref = {
  mainHeader: document.querySelector('.main-header'),
  inputNumberOfElements: document.querySelector('.numberElemetnsToCreate'),
  buttonCreateElement: document.querySelector('.createElementButton'),
  elementsList: document.querySelector('.elementsList'),
};

ref.buttonCreateElement.addEventListener('click', onCreateButtonClick);
ref.elementsList.addEventListener('click', onTagButtonClick);
const listOfTags = new Set();

function renderHtml(elNumber, randomTagName) {
  let renderResult = '';
  for (let i = 1; i <= elNumber; i += 1) {
    let tagName = randomTagName();
    renderResult += `<li class="tagBattonBox"><button class="tagBatton" tagname = "${tagName}">#${tagName}</button></li>`;
  }
  //   console.log(renderResult);
  return renderResult;
}

function onTagButtonClick(e) {
  const newActiveButton = e.target;
  const isButton = newActiveButton.classList.contains('tagBatton');

  const tagName = newActiveButton.getAttribute('tagname');

  if (!isButton) {
    return;
  }

  if (newActiveButton.classList.contains('active')) {
    listOfTags.delete(tagName);
    newActiveButton.classList.toggle('active');
    console.log(listOfTags);
    return;
  }

  newActiveButton.classList.toggle('active');
  listOfTags.add(tagName);
  console.log(listOfTags);
}

function randomTagName() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

function onCreateButtonClick() {
  const elNumber = ref.inputNumberOfElements.value;
  ref.elementsList.innerHTML = '';
  listOfTags.clear();
  console.log(listOfTags);
  ref.elementsList.insertAdjacentHTML('beforeend', renderHtml(elNumber, randomTagName));
}
