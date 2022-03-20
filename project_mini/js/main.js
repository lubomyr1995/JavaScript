let wrapMain = document.createElement('div');
wrapMain.setAttribute('class', 'users');
document.body.appendChild(wrapMain);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let divUserMain = document.createElement('div');
            divUserMain.setAttribute('class', 'user');
            let divUser = document.createElement('div');
            divUser.innerHTML = `<h2>Id: ${user.id}; Name: ${user.name}</h2>`

            let btnUser = document.createElement('a');
            btnUser.innerText = 'user details'
            btnUser.href = 'user-details.html'
            divUserMain.append(divUser, btnUser)
            wrapMain.append(divUserMain)
            btnUser.onclick = () => {
                localStorage.setItem('userId', user.id);
            }
        })
    })
