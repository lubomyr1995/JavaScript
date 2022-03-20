let aHome = document.createElement('a');
aHome.href = 'index.html';
aHome.innerText = 'Home ';
let a2Home = document.createElement('a');
a2Home.href = 'user-details.html';
a2Home.innerText = 'Details';
document.body.prepend(aHome, a2Home);

let wrapDetails = document.createElement('div');
wrapDetails.setAttribute('class', 'window-details')
document.body.append(wrapDetails)
let divPostDetails = document.createElement('div');
divPostDetails.setAttribute('class', 'post_details');
wrapDetails.append(divPostDetails)

fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('postId')}`)
    .then(response => response.json())
    .then(post => {
        const divName = document.createElement('div');
        divName.innerHTML = '<h3>Details: </h3>'
        const divPostId = document.createElement('div');
        divPostId.innerText = `id: ${post.id}`;

        const divTitle = document.createElement('div');
        divTitle.innerHTML = `<b>${post.title}</b>`;

        const divBody = document.createElement('div');
        divBody.innerText = post.body;

        divPostDetails.append(divName, divPostId, divTitle, divBody);
    })
const divCommentsDetails = document.createElement('div');
divCommentsDetails.setAttribute('class', 'comments_details')
wrapDetails.appendChild(divCommentsDetails);
const nameCommends = document.createElement('h3');
nameCommends.innerText = 'Commends';
divCommentsDetails.appendChild(nameCommends)

fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('postId')}/comments`)
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            const divComment = document.createElement('div');
            divComment.setAttribute('class', 'comment')
            let comName = document.createElement('h4');
            comName.innerText = `Name: ${comment.name}`
            let comEmail = document.createElement('b');
            comEmail.innerText = `Email: ${comment.email}`
            let comBody = document.createElement('p');
            comBody.innerText = `${comment.body}`
            let comHr = document.createElement('hr')
            divComment.append(comName, comEmail, comBody, comHr)
            divCommentsDetails.appendChild(divComment)
        })
    })
