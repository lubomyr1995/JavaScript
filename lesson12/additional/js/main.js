// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let divUsers = document.createElement('div');
divUsers.setAttribute('class', 'users');
document.body.appendChild(divUsers);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let divUser = document.createElement('div');
            divUser.setAttribute('class', 'user');
            divUser.innerHTML = `<h2>id: ${user.id}, ${user.name}</h2>
                                 <h4>userName: ${user.username}</h4>
                                 <p>email: ${user.email}</p>
                                 <ul><b>Adress:</b>
                                 <li>street: ${user.address.street}</li>
                                 <li>suite: ${user.address.suite}</li>
                                 <li>city: ${user.address.city}</li>
                                 <li>zipcode: ${user.address.zipcode}</li>
                                 <li>geo: lat:${user.address.geo.lat}, lng:${user.address.geo.lng}</li></ul>
                                 <p>phone: ${user.phone}</p>
                                 <p>website: ${user.website}</p>
                                 <ul><b>Company:</b>
                                 <li>name: ${user.company.name}</li>
                                 <li>catchPhrase: ${user.company.catchPhrase}</li>
                                 <li>bs: ${user.company.bs}</li></ul>`;
            let btnUser = document.createElement('button');
            btnUser.innerHTML = `<b>posts</b>`;
            btnUser.style.boxShadow = '0 14px 28px #9b9a9a'
            divUser.appendChild(btnUser);
            divUsers.appendChild(divUser);

            let divPosts = document.createElement('div');
            let divNonePost = document.createElement('div');
            divPosts.setAttribute('class', 'posts');
            divNonePost.setAttribute('class', 'none');
            divNonePost.appendChild(divPosts);
            divUsers.appendChild(divNonePost);

            // ** POSTS**

            btnUser.onclick = _ => {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        btnUser.classList.toggle('btnColor')
                        divNonePost.classList.toggle('none')

                        while (divPosts.firstChild) {
                            divPosts.removeChild(divPosts.firstChild);
                        }
                        posts.forEach(post => {
                            let divPost = document.createElement('div');
                            divPost.setAttribute('class', 'post');
                            divPost.innerHTML = `id: ${post.id}
                                             <h4>title: ${post.title}</h4>
                                             <p>body: ${post.body}</p>`
                            let btnPost = document.createElement('button');
                            btnPost.innerHTML = 'comments';
                            btnPost.style.boxShadow = '0 14px 28px #9b9a9a';
                            divPost.appendChild(btnPost);
                            divPosts.appendChild(divPost)

                            let divComments = document.createElement('div');
                            let divNone = document.createElement('div');
                            divComments.setAttribute('class', 'comments');
                            divNone.setAttribute('class', 'none');
                            divNone.appendChild(divComments)
                            divPosts.appendChild(divNone);

                            // ** COMMENTS **

                            btnPost.onclick = _ => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        btnPost.classList.toggle('btnColor')
                                        divNone.classList.toggle('none')

                                        while (divComments.firstChild) {
                                            divComments.removeChild(divComments.firstChild);
                                        }
                                        comments.forEach(comment => {
                                            let divComment = document.createElement('div');
                                            divComment.setAttribute('class', 'comment');
                                            divComment.innerHTML = `postId: ${comment.postId} id: ${comment.id}
                                                                    <h4>name: ${comment.name}</h4>
                                                                    <h5>e-mail: ${comment.email}</h5>
                                                                    <p>body: ${comment.body}</p>`
                                            divComments.appendChild(divComment)
                                        })

                                    })
                            }
                        })
                    })
            }
        })
    })
