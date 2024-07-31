const blogContainer = document.getElementById('blog-container');

const toggle = document.querySelector('#toggleButton');

toggle.addEventListener('click', () => [
    document.body.classList.toggle('darkMode')
])

let forms = JSON.parse(localStorage.getItem('formSubmissionsList')) || [];

for (let i = 0; i < forms.length; i++) {
    const element = forms[i];
    const cardEl = document.createElement('section');
    cardEl.setAttribute('class', 'blog-cards');
    const userNameEl = document.createElement('p');
    const titleEl = document.createElement('p');
    const contentEl = document.createElement('p');
    userNameEl.textContent = element.Username;
    titleEl.textContent = element.Title;
    contentEl.textContent = element.Content;
    cardEl.appendChild(userNameEl);
    cardEl.appendChild(titleEl);
    cardEl.appendChild(contentEl);
    blogContainer.appendChild(cardEl);
}

// const bp1 = JSON.parse(localStorage.getItem('blogPost1'));
// //console.log(typeof(bp1));
// //console.log(bp1);
// //console.log(bp1.Username)


// const bp2 = JSON.parse(localStorage.getItem('blogPost2'));
// //console.log(typeof(bp2))
// //console.log(bp2);
// //console.log(bp2.Title);


// const bp3 = JSON.parse(localStorage.getItem('blogPost3'));
// //console.log(typeof(bp3))
// //console.log(bp3);
// //console.log(bp3.Content);

// const bpUser = JSON.parse(localStorage.getItem('formSubmissionsList'));
// console.log(typeof(bpUser))
// console.log(bpUser);


// document.getElementById('username1').innerHTML = bp1.Username;
// document.getElementById('title1').innerHTML = bp1.Title;
// document.getElementById('content1').innerHTML = bp1.Content;

// document.getElementById('username2').innerHTML = bp2.Username;
// document.getElementById('title2').innerHTML = bp2.Title;
// document.getElementById('content2').innerHTML = bp2.Content;

// document.getElementById('username3').innerHTML = bp3.Username;
// document.getElementById('title3').innerHTML = bp3.Title;
// document.getElementById('content3').innerHTML = bp3.Content;

// document.getElementById('usernameUser').innerHTML = bpUser[0].Username;
// document.getElementById('titleUser').innerHTML = bpUser[0].Title;
// document.getElementById('contentUser').innerHTML = bpUser[0].Content;
