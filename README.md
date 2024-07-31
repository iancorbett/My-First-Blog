# My-First-Blog
This project was made entirely from scratch. It contains two separate pages, each with its own corresponding HTML, CSS, and Javascript files. I am making this project in order to learn more about javascript, local storage, for loops, css, and using functions. In this project I used javascript functions to make the website interactive. For example, there is a toggle button that will change the color of the page and the text when it is clicked. Then I have to add the form submissions to the local storage. Then I have to use javascript ultimately take the form submissions that are in the local storage, and print them on to the website. This is done by using a for loop to iterate through each submission.

Throughout building this project, there have been many bugs that have had to be dealt with. Additionally, I learned a lot about local storage and how to use JSON. I also learned about other concepts such as for loops.

The main bug that I dealt with was that I could not get the forms in local storage to work correctly. When trying to accept user input, I ran into a few errors. Every time I would sumbit a new post, it would print a new post on the page, as it was supposed to. However, when I would enter a new one, instead of there being two submissions, it would only print the most recent one. The local storage was only saving the most recent submission. A tutor helped me with this, and we resolved the issue. I was setting the forms array to an empty array, and every time I added a post it cleared the array, set it to an empty one, and pushed the one single form into it. However, we wrote the line of code: let forms = JSON.parse(localStorage.getItem('formSubmissionsList')) || []; and this fixed it, by getting the item from local storage, changing it from a string using the parse function, and then storing it in the forms array.

Screenshots: ![Screenshot 2024-07-31 at 2 01 38 PM](https://github.com/user-attachments/assets/72e861b6-a9f5-4c22-bd21-41f9f70d5508)
![Screenshot 2024-07-31 at 2 00 44 PM](https://github.com/user-attachments/assets/1ab8df14-431b-4a33-aaaf-52ff6181e183)
![Screenshot 2024-07-31 at 2 01 15 PM](https://github.com/user-attachments/assets/a9ba5007-001d-4b37-b5ea-8c3d9e9caa81)


The website is used as follows. There is an empty form, that contains 3 required fields to be filled out. These fields are for Username, Title, and Content. The answers to these questions are stored as properties of the form object. Each form object is pushed into a form array, and stored in local storage. We use Json to turn the input into a string, and then ultimately we pull the data in local storage and display it as a new blog post on the website. Upon clicking the submit button, if all of the forms are filled out, the user will be redirected to the blog page where his submission will be viewable on the page.

CREDITS: Although I did not take any code directly from another source, I did receive help from a tutor named Dennis Itau. He helped me with the line of code: let forms = JSON.parse(localStorage.getItem('formSubmissionsList')) || []; which I explained earlier in the README. Additionally, he helped me create the for loop in the blog.js file. He explained how hard coding the values the way I had previously done, would  not work, especially if the page were to contain hundreds of posts. He also helped me understand how to use the appendChild feature, and this allowed me ultimately to add the posts to the blog in a much more efficient and dynamic way.
I also used the website: https://loremipsum.io/generator to generate text for the screenshots.

Link to deployed project: https://iancorbett.github.io/My-First-Blog/

Thank you very much for reading!


