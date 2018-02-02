const cardMaker = {
    makeCover: function(cover) {
      return `<h2>${cover}</h2>`
    },
    makeMessage: function(message) {
        return `<h3>${message}</h3>`
    }
  }
  
  //Refactor this to link this object to cardMaker
const birthdayCard = Object.create(cardMaker);
const childBirthdayCard = Object.create(cardMaker);
const christmasCard = Object.create(cardMaker);

//   Birthday Card

birthdayCard.makeCover = "Your birthday is a special day that only comes once a year,";
birthdayCard.makeMessage = "so heres a paper card I got at the last second for your gift!";
console.log("Birthday Card: " + birthdayCard.makeCover  + " " + birthdayCard.makeMessage);

let getBirthday = birthdayCard.makeCover + " " + birthdayCard.makeMessage;

// Child Birthday Card

childBirthdayCard.makeCover = "There's only one day a year you get to eat ice cream and open presents all day,";
childBirthdayCard.makeMessage = "so what are you doing still reading this, GO GET SOME TOYS AND ICECREAM! ";
console.log("Child Birthday Card: " + childBirthdayCard.makeCover + " " + childBirthdayCard.makeMessage);

let getChildBirthday = childBirthdayCard.makeCover + " " + childBirthdayCard.makeMessage;

// Christmas Card

christmasCard.makeCover = "It's the most wonderful time of the year,";
christmasCard.makeMessage = "please don't sue me Andy Williams";
console.log("Christmas Card: " + christmasCard.makeCover + " " + christmasCard.makeMessage);

let getChristmas = christmasCard.makeCover + " " + christmasCard.makeMessage;

document.getElementById("birthday").innerHTML = getBirthday;
document.getElementById("child-birthday").innerHTML = getChildBirthday;
document.getElementById("christmas").innerHTML = getChristmas;