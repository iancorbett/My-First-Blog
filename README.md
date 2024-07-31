# My-First-Blog
This project was made entirely from scratch. It contains two separate pages, each with its own corresponding HTML, CSS, and Javascript files. I am making this project in order to learn more about javascript, local storage, for loops, css, and using functions. In this project I used javascript functions to make the website interactive. For example, there is a toggle button that will change the color of the page and the text when it is clicked. Then I have to add the form submissions to the local storage. Then I have to use javascript ultimately take the form submissions that are in the local storage, and print them on to the website. This is done by using a for loop to iterate through each submission.

Throughout building this project, there have been many bugs that have had to be dealt with. Additionally, I learned a lot about local storage and how to use JSON. I also learned about other concepts such as for loops.

The main bug that I dealt with was that I could not get the forms to local storage to work correctly. When trying to accept user input, I ran into a few errors. Every time I would sumbit a new post, it would print a new post on the page, as it was supposed to. However, when I would enter a new one, instead of there being two submissions, it would only print the most recent one. The local storage was only saving the most recent submission. A tutor helped me with this
Screenshots: 

The website is used as follows. There is an empty form, that contains 3 required fields to be filled out. These fields are for Username, Title, and Content. The answers to these questions are stored as properties of the form object. Each form object is pushed into a form array, and stored in local storage. We use Json to turn the input into a string, and then ultimately we pull the data in local storage and display it as a new blog post on the website. Upon clicking the submit button, if all of the forms are filled out, the user will be redirected to the blog page where his submission will be viewable on the page.

CREDITS: Although I did not take any code directly from another source, I did receive help from a tutor named Dennis Itau. 

Link to deployed project: https://iancorbett.github.io/My-First-Blog/

Thank you very much for reading!

*still finishing as of 11:30 mst 7/31/24
