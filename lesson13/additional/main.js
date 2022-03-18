// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж.
// При збережені товару з форми, action не повинно відбуватись (preventDefault).
// Cтворити елемент <a href='list.html'>На сторінку товарів</a>, та list.html,
// при переході на який відобразити на сторінці всі товари.
// На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний товар.
//
const wrapper = document.createElement('div');

nav = document.createElement('nav');

navAdd = document.createElement('a');
navAdd.setAttribute('href', '#');
navAdd.innerText = 'Add';

navList = document.createElement('a');
navList.setAttribute('href', 'list.html');
navList.innerText = 'List';

nav.append(navAdd, navList);
wrapper.appendChild(nav);

// form
const form = document.createElement('form');

const formGroup = document.createElement('div');

const formHeader = document.createElement('div');
formHeader.innerText = 'Adding: ';

const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Name');

const inputQuantity = document.createElement('input');
inputQuantity.setAttribute('type', 'number');
inputQuantity.setAttribute('placeholder', 'Quantity');

const inputPrice = document.createElement('input');
inputPrice.setAttribute('type', 'number');
inputPrice.setAttribute('placeholder', 'Price');

const inputPic = document.createElement('input');
inputPic.setAttribute('type', 'text');
inputPic.setAttribute('placeholder', 'picture url');

const btnSave = document.createElement('button');
btnSave.innerText = 'save goods';

btnSave.onclick = (e) => {
    e.preventDefault();

    let goods = JSON.parse(localStorage.getItem('goods')) || [];
    if (inputName.value !== '' && !goods.find(value => value.name === inputName.value)) {
        goods.push({
            name: inputName.value,
            quantity: inputQuantity.value,
            price: inputPrice.value,
            picture: inputPic.value
        });
        localStorage.setItem('goods', JSON.stringify(goods));
        [inputName.value, inputQuantity.value, inputPrice.value, inputPic.value] = [null, null, null, null]
    }
}

formGroup.append(formHeader, inputName, inputQuantity, inputPrice, inputPic, btnSave);
form.appendChild(formGroup);
wrapper.appendChild(form);
document.body.appendChild(wrapper);