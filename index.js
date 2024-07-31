

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



const submitForm = (event) => {
    event.preventDefault();
    const form = {
        Username: document.getElementById('username').value,
        Title: document.getElementById('title').value,
        Content: document.getElementById('content').value
    }
    forms.push(form);
    checkAllBoxes();
    document.querySelector('form').reset();

    localStorage.setItem('formSubmissionsList', JSON.stringify(forms));

    window.location.href="../htmlCode/posts.html"
    
}
console.log(forms)
document.getElementById('submitButton').addEventListener('click', submitForm);


    



