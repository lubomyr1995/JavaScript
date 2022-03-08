// є масив - users
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до
// масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let divMain = document.createElement('div');
document.body.appendChild(divMain);

localStorage.setItem('favorites', JSON.stringify([]));

users.forEach(user => {
    let div = document.createElement('div');
    div.style.backgroundColor = '#b99393';
    div.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    divMain.appendChild(div);
    let btn = document.createElement('button');
    btn.innerText = 'add to favorite';
    div.appendChild(btn);

    btn.onclick = _ => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(user)
        localStorage.setItem('favorites', JSON.stringify(favorites));
        btn.disabled = true;
    }
})


