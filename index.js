console.log("hello world");

// At the top of your JS file, select the HTML element with the message id using querySelector. Save it to a variable called message. Right now, it’s just an empty aside element. In the next steps, we’ll assign its textContent to send users different notifications.
const message = document.querySelector("#message");



// In index.js, create a new function called addMovie that takes in an event as a parameter.

function addMovie(event) {

    // Because our button is inside a form element, it has a default action that is also running and interfering with our code. To fix this, at the beginning of the addMovie function, add event.preventDefault()
    event.preventDefault();


    // We are going to want to get and set the value of our input field in this function, so let’s select it now. Use querySelector to get the input, save it to a variable called inputField.
    let inputField = document.querySelector("input");


    // Let’s make the HTML for our movie list items. Create a new variable called movie, store a new li element in it using document.createElement, this will be the parent element of our movie’s title and the movie’s delete button.
    const movie = document.createElement("li");


    // Next create a new span element and save it to a variable called movieTitle. Set the textContent of movieTitle to be the value of inputField. This will write what the user typed out into our new span.
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;


    // In the addMovie function, after you set the textContent of the span element, use addEventListener to listen for a click event on the span and run the crossOffMovie function.
    movieTitle.addEventListener("click", crossOffMovie);


    // Now we’ll need to append the movieTitle span to our movie element. Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.
    movie.appendChild(movieTitle);


    // In the addMovie function, after appending the movieTitle to movie, use createElement to create a new button element and save it to a variable called deleteBtn.
    const deleteBtn = document.createElement("button");


    // Set the textContent of deleteBtn to be the letter X.
    deleteBtn.textContent = "x";


    // Use addEventListener to listen for a click event on the button and run the deleteMovie function. We will create that function later in this step.
    deleteBtn.addEventListener("click", deleteMovie);


    // Now that the button has been created, use the appendChild method to add deleteBtn onto the movie element.
    movie.appendChild(deleteBtn);


    // Then, use querySelector to find the ul element that already exists in our HTML and use appendChild to attach the movie element we created to the list.
    const list = document.querySelector("ul");
    list.appendChild(movie);


    // For a more user-friendly experience, let’s clear the input field when the ‘Add’ button is clicked so it’s ready for another movie. To do this, set the value of inputField to an empty string at the bottom of the addMovie function.
    inputField.value = "";
}



// Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.
document.querySelector("form").addEventListener("submit", addMovie);



// Finally, outside of the addMovie function, create a new function called deleteMovie that takes in an event parameter. When we click the button, we want to remove the entire list item. Since the button is a child of the list item, we can use event.target.parentNode.remove() to remove the entire list item. JavaScript knows what the target of this event is (the specific delete button that’s clicked) and will only get rid of that one button’s parent (the movie list item that holds the title and button). You should now have a functioning delete button on each movie you add!

function deleteMovie(event) {
    event.target.parentNode.remove();

    // In the deleteMovie function, add a line that assigns the textContent of message to be a string that says something like ‘Movie deleted!’ - You should now see this message pop up when you delete a movie. Test it out!
    // message.textContent = "Movie deleted!";


    // INTERMEDIATE STEP (instead of the line directly above this).
    // In the deleteMovie function, change the string you’re assigning to the message’s textContent to contain the deleted movie’s title. - This will be different than how we accessed the titles in the crossOffMovie function. Previously, we were accessing the textContent of the element that we clicked. But the deleteMovie function runs when the ‘X’ button is clicked. So the title is actually a sibling element of the button. You’ll need to explore the properties available on event.target.parentNode to get at that movie title text.
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;


    // At the bottom of the deleteMovie function, call revealMessage
    revealMessage();
}



// In index.js, create a new function called crossOffMovie that takes in an event as a parameter. - Later, we will need to add this as an event handler for every movie title span.
function crossOffMovie(event) {

    // Call event.target.classList.toggle() passing in the checked class so that the class is added or removed if the title is clicked. (We want users to be able to “un-cross” movies off in case they did it by accident).
    event.target.classList.toggle("checked");


    // In the crossOffMovie function, we’re going to do something similar, but we want to have different messages based off of whether the movie was just checked off as ‘watched’ or if it was added back to the list. So let’s start by creating the structure for an if/else block. Put it below where you toggled the checked class in the crossOffMovie function.

    // The condition of your if statement should check if it’s true that the event.target.classList contains the checked class. - contains is a built-in method that can be used on classList, the structure for doing so is event.target.classList.contains(‘some-class-name’)

    if (event.target.classList.contains("checked") === true) {
        // If it’s true, then change message’s textContent to be a string that says something like ‘Movie watched!’
        //message.textContent = "Movie watched!";

        // INTERMEDIATE STEP:
        // In the if block inside of the crossOffMovie function, change the message’s textContent to be a string that says something like ‘MOVIE watched!’ where MOVIE is the title of the movie they clicked on. You can access that title in the textContent property of event.target, and you can use concatenation or a template string.
        message.textContent = `${event.target.textContent} watched!`;

    } else {
        // Else, change message’s textContent to be a string that says something like ‘Movie added back!’
        // message.textContent = "Movie added back!";

        // INTERMEDIATE STEP:
        message.textContent = `${event.target.textContent} added back!`;
    }



    // Invoke revealMessage at the bottom of the crossOffMovie function
    revealMessage();
}



// INTERMEDIATE STEPS

// Let’s start by creating a function that we’ll be able to call from both deleteMovie and crossOffMovie that will hide the message after a set amount of time. By creating one function, we’ll save ourselves from writing the same code in both functions. This way, we only have to write it once and then we can call it in multiple places.

// Create a function called revealMessage. Inside the function, call setTimeout, passing in a callback function and a time in milliseconds. - The callback function should add the hide class to message, you can see what the hide class does in the CSS file - We want the callback function to run 1 second after setTimeout is invoked, so for the second argument, pass in the number 1000
function revealMessage() {
    message.classList.remove("hide");

    setTimeout(() => {
        message.classList.add("hide");
    }, 1000);


    // Test out your code – your notification message should disappear after the amount of milliseconds you prescribed. But it only works the first time! No new messages are showing up for subsequent actions. Let’s fix that.

    // At the top of the revealMessage function, remove the hide class from message – this will ensure that the message isn’t hidden when the function is first called.
}




















/*

// STEP 1: Grab the HTML element
//const plusBtn = document.querySelector("#plus-btn");



// STEP 2: Write out your callback function
let count = 0;

function increase() {
    count++;
    console.log(count);
    counterText.textContent = count;
}

function selectTheme(event) {
    console.log(event.target.textContent);
    let theme = event.target.textContent;
    
    
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}

 gets the value (whatever was typed) from the input box
function logInputValue() {
    console.log(inputBox.value);
}
*/


// STEP 3: Combine your element and function using addEventListener
// Arguments for addEventListener: (event, callback)
//plusBtn.addEventListener("click", increase);


//for (let i = 0; i < themeBtns.length; i++) {
//    themeBtns[i].addEventListener("click", selectTheme);
//}