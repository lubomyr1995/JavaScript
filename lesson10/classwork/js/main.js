// // - створити 2 форми  по 2 інпути в кожній.
// //   ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// //   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let h2 = document.createElement('h2');
// h2.innerText = 'Ex1'
// document.body.appendChild(h2);
//
// let form1 = document.createElement("form");
// form1.setAttribute('name', 'form1');
// let input11 = document.createElement("input");
// input11.setAttribute('type', 'text');
// input11.setAttribute('name', 'input11');
// let input12 = document.createElement("input");
// input12.setAttribute('type', 'number');
// input12.setAttribute('name', 'input12');
// document.body.appendChild(form1);
// form1.append(input11, input12)
//
// let form2 = document.createElement("form");
// form2.setAttribute('name', 'form2');
// let input21 = document.createElement("input");
// input21.setAttribute('type', 'text');
// input21.setAttribute('name', 'input21');
// let input22 = document.createElement("input");
// input22.setAttribute('type', 'number');
// input22.setAttribute('name', 'input22');
// document.body.appendChild(form2);
// form2.append(input21, input22)
//
// let btn = document.createElement("button");
// btn.innerText = 'send'
// btn.onclick = _ => {
//     let input11 = document.forms.form1.input11.value;
//     let input12 = document.forms.form1.input12.value;
//     let input21 = document.forms.form2.input21.value;
//     let input22 = document.forms.form2.input22.value;
//     console.log(input11, input12, input21, input22);
//     document.forms.form1.input11.value = null;
//     document.forms.form1.input12.value = null;
//     document.forms.form2.input21.value = null;
//     document.forms.form2.input22.value = null;
// }
//
// document.body.append(btn);
//
// document.body.appendChild(document.createElement('hr'));


// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// //   (Додатковачастина для завдання)
// let form = document.createElement('form');
// form.setAttribute('name', 'formTable')
// let inp1 = document.createElement('input');
// inp1.setAttribute('type', 'number');
// inp1.setAttribute('placeholder', 'введіть кількість рядків');
// let inp2 = document.createElement('input');
// inp2.setAttribute('type', 'number');
// inp2.setAttribute('placeholder', 'введіть кількість полів');
// let inp3 = document.createElement('input');
// inp3.setAttribute('type', 'text');
// inp3.setAttribute('placeholder', 'вміст поля');
// let btn = document.createElement('button')
// btn.innerText = 'Створити таблицю';
// btn.onclick = _ => {
//     let table = document.createElement('table');
//     document.body.appendChild(table);
//     for (let i = 0; i < inp1.value; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < inp2.value; j++) {
//             let td = document.createElement('td')
//             td.style.border = '1px solid red'
//             td.innerText = inp3.value
//             table.appendChild(tr)
//             tr.appendChild(td)
//         }
//             }
//     [inp1.value, inp2.value, inp3.value] = [null, null, null];
// }
//
// document.body.appendChild(form);
// document.forms.formTable.onsubmit = e => e.preventDefault()
// document.forms.formTable.append(inp1, inp2, inp3, btn);
//
// document.body.appendChild(document.createElement('hr'));


// // - Сворити масив не цензцрних слів.
// //   Сворити інпут текстового типу.
// //   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// //   кинути алерт з попередженням.
// //   Перевірку робити при натисканні на кнопку
// let arrBad = ['баран', 'мудак', 'дурак', 'дебіл'];
//
// let div = document.createElement('div');
// let inp = document.createElement('input');
// inp.setAttribute('type', 'text');
// inp.setAttribute('placeholder', 'Введіть слово');
// let button = document.createElement('input');
// button.setAttribute('type', 'button');
// button.setAttribute('value', 'check');
// div.append(inp, button);
// document.body.appendChild(div);
// button.onclick = _ => {
//     if (arrBad.includes(inp.value)) {
//         alert('atata_krya-krya')
//     }
//     inp.value = ''
// }


// // 2 - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// let arrBad2 = ['баран', 'мудак', 'дурак', 'дебіл'];
// let inp2 = document.createElement('input');
// inp2.setAttribute('type', 'text');
// inp2.setAttribute('placeholder', 'Введіть речення');
// let btn2 = document.createElement('button');
// btn2.innerText = 'Check';
// btn2.addEventListener("click", _ => {
//     arrBad2.forEach(word => {
//         if (inp2.value.toLowerCase().includes(word)) {
//             alert('atata')
//         }
//     })
//     inp2.value = '';
// })
// let form = document.createElement('form');
// form.setAttribute('name', 'form');
// document.body.appendChild(form);
// document.forms.form.onsubmit = e => e.preventDefault();
// document.forms.form.append(inp2, btn2);
