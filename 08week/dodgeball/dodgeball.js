"use strict;";
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.team = null;
  }
}

class Team {
  constructor(name, mascot, color) {
    this.name = name;
    this.mascot = mascot;
    this.color = color;
  }
}

let y = 0;
const listPeopleChoices = () => {
  if (y < arrOfPeople.length) {
    const listElement = document.getElementById("people");
    arrOfPeople.map(person => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerHTML = "Make Player";
      button.addEventListener("click", function() {
        makePlayer(person.id);
        listElement.removeChild(li);
      });
      li.appendChild(button);
      li.appendChild(
        document.createTextNode(" - " + person.name + " - " + person.skillSet)
      );
      listElement.append(li);
    });
  }
  y++;
};

const makePlayer = id => {
  let findPlayer = arrOfPeople.find(p => {
    return p.id == id;
  });
  let indx = arrOfPeople.indexOf(findPlayer);
  const newPlayer = new Player(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn
  );
  listOfPlayers.push(newPlayer);
  arrOfPeople.splice(indx, 1);
  const listElement = document.getElementById("players");
  const playerLi = document.createElement("li");
  const blueButton = document.createElement("button");
  blueButton.innerHTML = "Blue Team";
  blueButton.addEventListener("click", function() {
    blueTeam.push(newPlayer);
    console.log(blueTeam);
    createBlue(id);
    listElement.removeChild(playerLi);
  });
  const redButton = document.createElement("button");
  redButton.innerHTML = "Red Team";
  redButton.addEventListener("click", function() {
    redTeam.push(newPlayer);
    console.log(redTeam);
    createRed(id);
    listElement.removeChild(playerLi);
  });
  listElement.appendChild(playerLi);
  playerLi.appendChild(document.createTextNode(newPlayer.name));
  playerLi.append(blueButton);
  playerLi.append(redButton);
};

const createBlue = id => {
  console.log("you clicked the blue button");
  let newBlueTeam = new Team("WHS", "Chaparral", "Blue");
  let findBluePlayer = listOfPlayers.find(p => {
    return p.id == id;
  });
  blueTeam.push(findBluePlayer);
  const blueIdx = listOfPlayers.indexOf(findBluePlayer);
  arrOfPeople.splice(blueIdx, 1);
  const blueList = document.createTextNode(
    findBluePlayer.name + " - " + findBluePlayer.skillSet
  );
  const blueAnchor = document.getElementById("blue");
  const blueItem = document.createElement("li");
  blueAnchor.appendChild(blueItem);
  blueItem.appendChild(blueList);
  console.log(findBluePlayer);
};

const createRed = id => {
  console.log("you clicked the red button");
  let newRedTeam = new Team("Reed College", "Griffin", "Red");
  let findRedPlayer = listOfPlayers.find(p => {
    return p.id == id;
  });
  redTeam.push(findRedPlayer);
  const redIdx = listOfPlayers.indexOf(findRedPlayer);
  arrOfPeople.splice(redIdx, 1);
  const redList = document.createTextNode(
    findRedPlayer.name + " - " + findRedPlayer.skillSet
  );
  const redAnchor = document.getElementById("red");
  const redItem = document.createElement("li");
  redAnchor.appendChild(redItem);
  redItem.appendChild(redList);
  console.log(findRedPlayer);
};

//UNIT TESTS

const assert = require("assert");
if (typeof describe === "function") {
  describe("Player", function() {
    interface(
      "should have an id, a name, an age, a skillSet, and a placeBorn",
      function() {
        let playerOne = new Player(
          "1",
          "Adonis",
          "36",
          "hurling",
          "New Zealand"
        );
        assert.equal(playerOne.id, "1");
        assert.equal(playerOne.name, "Adonis");
        assert.equal(playerOne.age, "36");
        assert.equal(playerOne.skillSet, "hurling");
        assert.equal(playerOne.placeBorn, "New Zealand");
      }
    );
  });
  describe("Player", function() {
    interface("should be able to join the red team", function() {
      let playerTwo = new Player("2", "Shawna", "28", "chunking", "Australia");
      playerTwo = new Team("Reed College", "Griffin", "Red");
      assert.equal(playerTwo.name, "Reed College");
      assert.equal(playerTwo.mascot, "Griffin");
      assert.equal(playerTwo.color, "Red");
      assert(!(playerTwo instanceof Player));
      assert(playerTwo instanceof Team);
    });
  });
  describe("Player", function() {
    interface("should be able to join the red team", function() {
      let playerThree = new Player("3", "Sasha", "78", "spewing", "Oceania");

      playerThree = new Team("WHS", "Chaparral", "Blue");
      assert.equal(playerThree.name, "WHS");
      assert.equal(playerThree.mascot, "Chaparral");
      assert.equal(playerThree.color, "Blue");
      assert(!(playerThree instanceof Player));
      assert(playerThree instanceof Team);
    });
  });
}
