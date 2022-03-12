// // Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
// let divMain = document.createElement('div');
// divMain.setAttribute('class', 'main');
// document.body.appendChild(divMain);
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(obj => {
//             let divPost = document.createElement('div');
//             divPost.setAttribute('class', 'post');
//             divPost.innerHTML = `userId: ${obj.userId}
//             <h3>id: ${obj.id}</h3>
//             <h4>title: ${obj.title}</h4>
//             <p>body: ${obj.body}</p>`
//             divMain.append(divPost);
//         })
//     })


// // 2.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// // Для кожного елементу свій блок div.comment
// // Всі характеристики повинні мати свої блоки всередені div.comment
// // https://jsonplaceholder.typicode.com/comments
// let divMain = document.createElement('div');
// divMain.setAttribute('class', 'comments');
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(comment => {
//             let divComment = document.createElement('div');
//             divComment.setAttribute('class', 'comment');
//             divComment.innerHTML = `postId: ${comment.postId} id: ${comment.id}
//             <h4>name: ${comment.name}</h4>
//             <h5>e-mail: ${comment.email}</h5>
//             <p>body: ${comment.body}</p>`
//             divMain.appendChild(divComment)
//         })
//     })
// document.body.appendChild(divMain);
