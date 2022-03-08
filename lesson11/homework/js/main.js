// // -створити форму з інпутами для name та age.
// //  При відправці форми записати об'єкт в localstorage
// let inp1 = document.createElement('input');
// inp1.setAttribute('type', 'text');
// inp1.setAttribute('placeholder', 'enter name');
// let inp2 = document.createElement('input');
// inp2.setAttribute('type', 'number');
// inp2.setAttribute('placeholder', 'enter age');
// let btn1 = document.createElement('input');
// btn1.setAttribute('type', 'submit');
// btn1.setAttribute('value', 'send');
// let form1 = document.createElement('form');
// form1.setAttribute('name', 'form1');
// document.body.appendChild(form1);
// document.forms.form1.onsubmit = e => e.preventDefault();
// document.forms.form1.append(inp1, inp2, btn1);
//
// btn1.addEventListener("click", _ => {
//     let user = {name: inp1.value, age: inp2.value};
//     localStorage.setItem('user', JSON.stringify(user));
//     [inp1.value, inp2.value] = [null, null]
// })


// // -створити форму з інпутами для model,type та volume автівки.
// //  при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let inpModel = document.createElement('input');
// inpModel.setAttribute('name', 'inpModel')
// let labelModel = document.createElement('label');
// labelModel.style.display = 'block'
// labelModel.htmlFor = 'inpModel';
// labelModel.innerText = 'Model: ';
// labelModel.appendChild(inpModel);
//
// let inpType = document.createElement('input');
// inpType.name = 'inpType';
// let labelType = document.createElement('label');
// labelType.style.display = 'block';
// labelType.htmlFor = 'inpType';
// labelType.innerText = 'Type: ';
// labelType.appendChild(inpType);
//
// let inpVolume = document.createElement('input');
// inpVolume.name = 'inpType';
// let labelVolume = document.createElement('label');
// labelVolume.style.display = 'block';
// labelType.htmlFor = 'inpVolume';
// labelVolume.innerText = 'Volume: ';
// labelVolume.appendChild(inpVolume);
//
// let btn = document.createElement('input');
// btn.setAttribute('type', 'submit');
// let formCar = document.createElement('form');
// formCar.setAttribute('name', 'formCar');
// document.body.appendChild(formCar)
// document.forms.formCar.append(labelModel, labelType, labelVolume, btn);
//
// btn.onclick = _ => {
//     let carArr = JSON.parse(localStorage.getItem('car')) || [];
//     let objCar = {
//         model: inpModel.value,
//         type: inpType.value,
//         volume: inpVolume.value
//     };
//     carArr.push(objCar);
//     localStorage.setItem('car', JSON.stringify(carArr));
//     [inpModel, inpType, inpVolume] = [null, null, null];
// }
