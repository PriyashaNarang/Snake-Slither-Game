# Snake-Slither-Game
# Introduction
The classic Snake Slither Game involves a player controlling the snake which grows longer as it eats food while avoiding collisions with the wall or its own tail.This implementation of the game uses HTML, CSS and JavaScript.
# How The Game Works
HTML: We set up Four <div> elements in order to create Main, Playarea, Score and Highscore.
CSS : Basic Styling is added for adding background for the <div> elements and adjusting their positions. Styling regarding snake movement and food is also introduced.
JavaScript : Score - Score is incremented each time when snake eats food and is displayed. Also, HighScore is maintained in Local Storage.
Key control : Arrow (↑,↓,←,→) keys handle the direction of Snake.
Game operation : The game checks the collisions, increases snake size on eating food, regenerates food, manages movement of snake and displays snake & food.
Collision detection/ Game over : If snake collides with the wall or with itself, then game is over.
# Running the game
1. Open the index.html file in a browser.
2. Use the arrow (↑,↓,←,→) keys to control the snake.
3. Eat the yellow food to grow longer and increase your score.
4. If the snake collides with itself or the wall, the game will stop, and you will see an alert message to restart the game.
