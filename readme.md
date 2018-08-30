# Marti's Study Room

Marti's Study Room is a web application that I created for a student I tutor. She wants to get tested on her vocabulary on a regular basis. Instead of writing a quiz each session, I wanted to automate the process so that she can take the quiz whenever she wants. 


## Technologies & Frameworks 
- HTML
- CSS, SASS, Compass, Bootstrap
- JavaScript, AngularJS

## Functionalities
- Review Mode: Choose between flashcards and the complete list from Word Bank.
- Quiz Mode: Korean words available in Word Bank are used to generate quiz questions. Currently only supporting a multiple choice based quiz. 
- Word Bank: will become fully functional after connected to a database.

## Problems Solved
- **Logic for generating quiz problems and answer options**: It was more complicated than I initially thought to write a program that randomly selects a word and pairs it with the answer options, only one of which is the correct answer, and track each one of them. It was when I did not know how to use a database; I simply had a .json file that contained vocabulary as an object. I ended up using multiple arrays to temporarily store different groups of words (e.g., problems, correct answer options, incorrect answer options). I am planning to connect a database with a schema, which will help simplify the process of generating quiz questions. 

## Ideas for Future Implementation
- **Score board**: user's previous scores will be saved and presented in various way (graphs, etc.) in the score board, in order to see the progress.
- **Dictionary API**: install a search bar that utilizes a dictionary API, so user can use a dictionary without having to leave the page. 
- **Additional features to Quiz Mode**:  Difficulty level (based on the frequency user gets the correct answer for the word), timed mode (set time limit to answer each question). 
