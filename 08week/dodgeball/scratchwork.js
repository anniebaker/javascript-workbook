//ADDS EVERYONE ALL AT ONCE
//     arrOfPeople.map(x => {
//     listOfPlayers.push(
//       new Player(x.id, x.name, x.age, x.skillSet, x.placeBorn)

//     );
//   });

//SOMETHING THAT DEFINITELY WORKS
//   listOfPlayers.push(arrOfPeople.splice(1, 1));
//   let playerList = document.getElementById("playerList");
//   let playerElement = document.createElement("li");
//   if (listOfPlayers.length < 7) {
//     listOfPlayers.map(person => {
//       playerElement.innerHTML = person["0"].name;
//       playerList.appendChild(playerElement);
//     });
//   }

//TRYING TO MESS WITH OBJECTS
//   let playerList = document.getElementById("playerList");
//   let playerElement = document.createElement("li");
//   arrOfPeople.map(person => {
//     listOfPlayers.push(new Player(id, name, age, skillSet, placeBorn));
//     playerElement.innerHTML = person["0"].name;
//     playerList.appendChild(playerElement);
//     console.log(listOfPlayers);
//   });
