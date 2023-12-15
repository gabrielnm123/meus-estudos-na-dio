function changeClasses(elements, classe) {
  for (element of elements) {
    element.classList.toggle(classe);
  }
}

function changeText(body, button, h1, classe) {
  if (body.classList.contains(classe)) {
    button.innerHTML = 'Light Mode';
    h1.innerHTML = 'Dark Mode ON';
  } else {
    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON';
  }
}

function changeMode(){
  changeClasses([body, footer, button], darkModeClass);
  changeText(body, button, h1, darkModeClass);
} 

const darkModeClass = 'dark-mode'; 
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

button.addEventListener('click', changeMode)
