// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let usersFavorites = JSON.parse(localStorage.getItem('favorites'))
console.log(usersFavorites);
let divMain = document.createElement('div')
document.body.appendChild(divMain)
usersFavorites.forEach(user => {
    let div = document.createElement('div');
    div.style.backgroundColor = '#b99393';
    div.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    divMain.appendChild(div);
})