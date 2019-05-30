Dodgeball Code Plan:

1. first step is to be able to list all of the players at once. this entails looping through the arrayOfPeople and pulling out each player at once using the map function, and then creating DOM elements for each player
2. Second step is creating player classes for each player. This means that you have to associate the player with its index, and we do this by using the .find() function and the .indexOf() function. Splice out of the original array and create DOM elements.
3. Still within the make player function, we create a button that will allow us to assign a team to the player. We do this by creating a DOM button and then calling a makeRed or makeBlue function from outside of the function.
4. The createRed and createBlue functions push into a new array, create DOM elements for each team, and assign a team class to each player once the buttons have been clicked
