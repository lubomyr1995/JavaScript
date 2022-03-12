// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let divMain = document.createElement('div');
divMain.setAttribute('class', 'posts');
document.body.appendChild(divMain);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            let divPost = document.createElement('div');
            divPost.setAttribute('class', 'post');
            divPost.innerHTML = `id: ${post.id}
            <h4>title: ${post.title}</h4>
            <p>body: ${post.body}</p>`
            let btn = document.createElement('button');
            btn.innerText = 'comments'
            divPost.appendChild(btn)
            divMain.appendChild(divPost)

            let divComments = document.createElement('div');
            let divNone = document.createElement('div');
            divComments.setAttribute('class', 'comments');
            divNone.setAttribute('class', 'none');
            divNone.appendChild(divComments)
            divMain.appendChild(divNone);


            btn.onclick = _ => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        btn.classList.toggle('btnColor')
                        divNone.classList.toggle('none')

                        while (divComments.firstChild) {
                            // console.log(divComments.firstChild)
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
