const blogContainer = document.getElementById('blog-container');

const toggle = document.querySelector('#toggleButton');

toggle.addEventListener('click', () => [
    document.body.classList.toggle('darkMode')
])
// here we are adding an event listener to the toggle button
// when the button is clicked it changes the class of the toggled button to the darkmode css class
// when it is clicked again it reverts back to the light mode
let forms = JSON.parse(localStorage.getItem('formSubmissionsList')) || [];
//this was the one line of code i was initially missing, before receiving help from a tutor.
// I had previously only being setting forms to equal an empty array
// every time I refreshed the browser the localStorage would clear
// and every time I would enter a new submission it would replace the previous one.
// writing it this way allows us to store the previously submitted forms in the forms array
//beforehand, it would clear local storage evrytime, and set forms to a new EMPTY array,
//but now it takes the submission, parses it, and stores it in the forms array. 
//This happens every time now, so the array can keep growing with more submissions, and not
//have a cap of one form. 

for (let i = 0; i < forms.length; i++) {
    // here we are creating a for loop to iterate through all of the forms 
    //that are submitted    
    const element = forms[i];
    // here we are creating an object called element and setting it equal to each individual
    //form that is submitted.    
    const cardEl = document.createElement('section');
    // here we are creating a section element for each form that is entered    
    cardEl.setAttribute('class', 'blog-cards');
    // here we are creating a class for all of the cards so that they can all be targeted together    
    const userNameEl = document.createElement('p');
    // here we are creating a paragraph element for the user name    
    const titleEl = document.createElement('p');
     // here we are creating a paragraph element for the title
    const contentEl = document.createElement('p');
    // here we are creating a paragraph element for the content
    userNameEl.textContent = element.Username;
    // here we are setting the user name property of the element equal to what the user entered
    titleEl.textContent = element.Title;
    // here we are setting the title property of the element equal to what the user entered
    contentEl.textContent = element.Content;
    // here we are setting the content property of the element equal to at the user entered
    cardEl.appendChild(userNameEl);
    // here we are adding the username element to the card
    cardEl.appendChild(titleEl);
    // here we are adding the title element to the card
    cardEl.appendChild(contentEl);
    // here we are adding the content element to the card
    blogContainer.appendChild(cardEl);
    // here we are adding the card to the container
}
//i received help from a tutor named dennis Itau on this for loop.
//this for loop helped allow me to increase the functionality of my blog page.
//it allowed for multiple user posts to be shown without the use of hard coding.

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
// all of this commented out code was previously used to hard code blog posts on
//the blog page
