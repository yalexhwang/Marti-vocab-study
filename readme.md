# Marti's Study Room

Marti's Study Room is an web application I created for a student I tutor. She wants to get tested on her vocaburary on regular basis. Instead of writing a quiz every time, I wanted to automate the process so she can take a quiz whenever she wants. <i>Work in progress: planning to implment a database connection</i>

<link>www.yalexhwang.com/marti_study_room</link>

##Technologies & Frameworks 
- HTML
- CSS/SASS
  - Compass
- Bootstrap
- JavaScript
- AngularJS

##Basic Functionality
- Review Mode
  - Choose between flashcards and the complete list from Word Bank.
- Quiz Mode
  - Korean words available in Word Bank are used to generate quiz questions. Currently only supporting multi-choice based quiz. 
- Word Bank
  - Will become fully functioning after connected to a database.

##Problems Solved
- **Logic for generating quiz problems and answer options**: It was more complicated than I initially thought to randomly select a word and pair it with answer options, including only one correct option and be able to track each one of them. It was when I did not know how to use a database; I simply had .json file that contained vocaburary as an object. I ended up using multiple arrays to temporarly store different groups of words (for problems, for correct answer options, for incorrect answer options, etc.) I am planning to connect to a database so generating quiz problems become much simpler.

###Future Implementation
- **Score board**: user's previous scores will be saved and presented in various way (graphs, etc.) in the score board, in order to see the progress.
- **Dictionary API**: install a serach bar that utilizes a dictionary API, so user can use a dicrionary without having to leave the page. 
- **Additional features to Quiz Mode**:  Difficulty level (based on the frequency user gets the correct answer for the word), timed mode (set time limit to answer each question). 
