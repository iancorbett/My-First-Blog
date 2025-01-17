

function checkAllBoxes() {
    if (document.getElementById('username').value === "") {
        alert('Please fill out the username field!')
        return false
    }

    else if (document.getElementById('title').value === "") {
        alert('Please fill out the title field!')
    }

        else if (document.getElementById('content').value === "") {
            alert('Please fill out the content field!')
}

}

// This function checks to see if all the input fields were filled out, if they were not,
//then an alert will pop up asking for them to fill it out.

/*const blogPost1 = {
    Username: 'IanMcLaren',
    Title: 'Hello',
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const blogPost2 = {
    Username: 'JamesJackson',
    Title: 'Howdy',
    Content: 'Ante nam et massa mi velit ad inceptos diam. Fermentum ac justo id parturient nisi pellentesque hac ultricies. Tempor mollis nec scelerisque penatibus vulputate conubia. Lorem feugiat tellus neque gravida curae massa vulputate duis. Convallis pharetra venenatis facilisi integer aliquet suscipit etiam senectus. Vehicula facilisis mattis cursus vehicula neque. Amet interdum sem, dui viverra neque eleifend habitasse sagittis. Praesent netus nullam nisi maximus nulla laoreet. Magnis ullamcorper rhoncus tellus volutpat augue habitant ante.'
}

const blogPost3 = {
    Username: 'MikeSmith',
    Title: 'chauuhh',
    Content: 'Bibendum finibus sit sit orci varius sodales; lectus est hac. Elementum arcu natoque natoque diam litora gravida. Arcu condimentum quis habitant vel lacinia cubilia nulla aliquet. Conubia scelerisque lacus mattis ad pulvinar tincidunt curae integer. Vivamus sagittis finibus ridiculus tempor adipiscing. Curabitur lectus sollicitudin morbi scelerisque pulvinar lacus bibendum tempor lectus. Duis risus suscipit neque efficitur sapien quisque est. Justo urna ante; nullam sit himenaeos non.'
}


if (localStorage.getItem('formSubmissionslist') === null) {
    localStorage.setItem('blogPost1', JSON.stringify(blogPost1)),
    localStorage.setItem('blogPost2', JSON.stringify(blogPost2)),
    localStorage.setItem('blogPost3', JSON.stringify(blogPost3));
}*/

// all of the commented out code was previously used for hard coding the blog posts 
//on the blog page.

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

const submitForm = (event) => {
    event.preventDefault();
    const form = {
        Username: document.getElementById('username').value,
        Title: document.getElementById('title').value,
        Content: document.getElementById('content').value
    }
    // Here we are creating a form object and setting its username title and content properties
        // to be equal to those that were entered by the user    
    forms.push(form);
        // This pushes each new form is in the forms array    
    checkAllBoxes();
    // This runs the function that checks to make sure that all the fields are filled out    
    document.querySelector('form').reset();
 // This resets the form so that more submissions can be made    
    localStorage.setItem('formSubmissionsList', JSON.stringify(forms));
// This turns the submission into a string so that it can be stored in the local storage    
    window.location.href="blog.html"
    //window.location.href="posts.html"
    // this directs us to the blog page when the submission is shown
}
//console.log(forms)
document.getElementById('submitButton').addEventListener('click', submitForm);
// when the submit button is clicked it runs the submit form function
    



