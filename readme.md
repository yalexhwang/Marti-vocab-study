# Marti's Study Room

Marti's Study Room is an web application created for my friend, Marti, whom I teach Korean, to aid her vocaburary memorization. I used to send her emails with a quiz file attached and wanted to automate this process to save time. With the app, Marti can take a quiz whenver she wants, and I can track her progress. <i>Work in progress: planning to implment a database connection</i>

##Technologies & Frameworks 
- HTML
- CSS/SASS
  - Compass
- Bootstrap
- JavaScript
- AngularJS

##Basic Functionality
- Review Mode
  - In the form of a digital flash card, each Korean word that is available in the word bank will be presented. The flash card will have the Korean word, its definition or meaning in English, and which part of speech it is (verb, noun, adjective, adverb, etc.). Planning to add 'example' and 'difficulty level' feature to the card. 
- Quiz Mode
  - Korean words available in the word bank will be used to generate quiz questions. Currently only supporting multi-choice based quiz. 
iven an option to go back to temporary cart and save it to My Account.

##Problems Solved
- **Logic for generating quiz problems and answer options**: it was more complicated that I initially thought to randomly select a word and pair it with answer options, including only one correct option and be able to track each one of them. It was when I did not know how to use a database; I simply had <code>.json</code> file that contained vocaburary as an object. I ended up using multiple arrays to temporarly store different groups of words (for problems, for correct answer options, for incorrect answer options, etc.) Now that I can connect to a database, the same can be done in a much simpler way, depending on how I design the overall database structure and schemas. I will review and determine if I want to use MongoDB or MySQL.

###Future Implementation
- **Score board**: user's previous scores will be saved and presented in various way (graphs, etc.) in the score board, in order to see the progress.
- **Dictionary API**: install a serach bar that utilizes a dictionary API, so user can use a dicrionary without having to leave the page. 
- **Additional features to Quiz Mode**:  Difficulty level (based on the frequency user gets the correct answer for the word), timed mode (set time limit to answer each question). 
