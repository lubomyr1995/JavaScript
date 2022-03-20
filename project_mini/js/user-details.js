let aHome = document.createElement('a');
aHome.href = 'index.html';
aHome.innerText = 'Home';
document.body.prepend(aHome);


const wrapUsers = document.createElement('div');
wrapUsers.setAttribute('class', 'wrapUsers')
document.body.appendChild(wrapUsers)


fetch('https://jsonplaceholder.typicode.com/users/' + localStorage.getItem('userId'))
    .then(response => response.json())
    .then(user => {
            const divUser = document.createElement('div');
            divUser.classList.add('detailsUser');
            wrapUsers.appendChild(divUser);
            // Header
            const divUserHeader = document.createElement('div');
            divUserHeader.innerHTML = `<h3>id = ${user.id} ${user.name}</h3>`;

            // UserBody
            const divUserBody = document.createElement('div');

            const divUsername = document.createElement('div');
            divUsername.innerText = `Username: ${user.username}`;
            const divEmail = document.createElement('div');
            divEmail.innerText = `E-mail: ${user.email}`;

            // Address
            const wrapAddress = document.createElement('div');

            const divAddressHeader = document.createElement('div');
            divAddressHeader.innerHTML = '<b>Address:</b>';

            const divAddressStreet = document.createElement('div');
            divAddressStreet.innerText = `Street: ${user.address.street}`;

            const divAddressSuite = document.createElement('div');
            divAddressSuite.innerText = `Suite: ${user.address.suite}`;

            const divAddressCity = document.createElement('div');
            divAddressCity.innerText = `City: ${user.address.city}`;

            const divAddressZipcode = document.createElement('div');
            divAddressZipcode.innerText = `Zip code: ${user.address.zipcode}`;

            const divAddressLat = document.createElement('div');
            divAddressLat.innerText = `Geo: ${user.address.geo.lat} ${user.address.geo.lng}`;

            wrapAddress.append(divAddressHeader, divAddressStreet, divAddressSuite, divAddressCity, divAddressZipcode, divAddressLat);

            // UserBody Add info
            const divPhone = document.createElement('div');
            divPhone.innerText = `Phone: ${user.phone}`;

            const divWebsite = document.createElement('div');
            divWebsite.innerText = `Website: ${user.website}`;

            // Company
            const wrapCompany = document.createElement('div');

            const divCompanyHeader = document.createElement('div');
            divCompanyHeader.innerHTML = '<b>Company</b>';

            const divCompanyName = document.createElement('div');
            divCompanyName.innerText = `Name: ${user.company.name}`;

            const divCompanyCatchPhrase = document.createElement('div');
            divCompanyCatchPhrase.innerText = `Catch phrase: ${user.company.catchPhrase}`;

            const divCompanyBs = document.createElement('div');
            divCompanyBs.innerText = `Bs: ${user.company.bs}`;

            wrapCompany.append(divCompanyHeader, divCompanyName,
                divCompanyCatchPhrase, divCompanyBs);

            divUserBody.append(divUsername, divEmail, wrapAddress, divPhone, divWebsite, wrapCompany);

            const btnPosts = document.createElement('button');
            btnPosts.setAttribute('class', 'buttonPost')
            btnPosts.innerText = 'Posts of current user';

            divUser.append(divUserHeader, divUserBody, btnPosts);

            // Posts
            const wrapPosts = document.createElement('div');
            wrapPosts.classList.add('posts');
            const divNonePost = document.createElement('div')
            divNonePost.setAttribute('class', 'none');
            divNonePost.appendChild(wrapPosts);
            wrapUsers.append(divNonePost);

            btnPosts.onclick = (e) => {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        btnPosts.classList.toggle('btnColor')
                        divNonePost.classList.toggle('none')
                        while (wrapPosts.firstChild) {
                            wrapPosts.removeChild(wrapPosts.firstChild);
                        }

                        posts.forEach(post => {
                            const divPost = document.createElement('div');
                            divPost.setAttribute('class', 'post')
                            const divTitle = document.createElement('div');
                            divTitle.innerText = post.title

                            const btnComments = document.createElement('a');
                            btnComments.href = 'post-details.html'
                            btnComments.innerText = 'Comments';

                            divPost.append(divTitle, btnComments);
                            wrapPosts.append(divPost)


                            btnComments.onclick = () => {
                                localStorage.setItem('postId', post.id);
                            }
                        })
                    })
            };

        }
    )