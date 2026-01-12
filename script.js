function checkGenerateName() {
    let newName
    getPrefix()
    getFirstName()
    getMiddleName()
    getLastName()
    getSuffix()

    newName = getPrefix(age) + ' ' + getFirstName(favFood) + ' ' +getMiddleName(middleName) + ' ' + getLastName(favColor) + ' ' + getSuffix(Gender)
}
/*Get prefix & Age*/
function getPrefix() {
    const age = Number(document.getElementById("age").value);
    let ageNumber;
    if (age < 18) {
        ageNumber = "Lil";
    } else {
        ageNumber = "Big";
    }
    return ageNumber
}
/*Get first name & Favorite Food*/
function getFirstName() {
    const food = Number(document.getElementById("favFood").value);
    let favFood
    if (food === "pizza") {
        favFood = "Pizza";
    } else if (food === "noodles") {
        favFood = "Noodle";
    } else if (food === "pasta") {
        favFood = "Pasta";
    } else if (food === "sushi") {
        favFood = "Sushi";
    } else if (food === "taco") {
        favFood = "Taco";
    } else if (food === "hamburgers") {
        favFood = "Burger";
    } else {
        favFood = "Foodie";
    }
    return favFood
}

/*Get middle name & Name*/

function getMiddleName() {
    let middleName
    let letter = document.getElementById('name').value.charAt(0).toUpperCase()

    switch (letter) {
        case "A":
            middleName = "Alpaca";
            break;
        case "B":
            middleName = "Baboon";
            break;
        case "C":
            middleName = "Camel";
            break;
        case "D":
            middleName = "Dingo";
            break;
        case "E":
            middleName = "Eagle";
            break;
        case "F":
            middleName = "Fish";
            break;
        case "G":
            middleName = "Goat";
            break;
        case "H":
            middleName = "Horse";
            break;
        case "I":
            middleName = "Iguana";
            break;
        case "J":
            middleName = "Jaguar";
            break;
        case "K":
            middleName = "Kangaroo";
            break;
        case "L":
            middleName = "Llama";
            break;
        case "M":
            middleName = "Monkey";
            break;
        case "N":
            middleName = "Narwhal";
            break;
        case "O":
            middleName = "Orangutan";
            break;
        case "P":
            middleName = "Pony";
            break;
        case "Q":
            middleName = "Quokka";
            break;
        case "R":
            middleName = "Raven";
            break;
        case "T":
            middleName = "Turkey";
            break;
        case "U":
            middleName = "Unicorn";
            break;
        case "V":
            middleName = "Vulture";
            break;
        case "W":
            middleName = "Worm";
            break;
        case "X":
            middleName = "Xenopus";
            break;
        case "Y":
            middleName = "Yabby";
            break;
        case "Z":
            middleName = "Zebu";
            break;
        default:
            middleName = "Critter"
            break;
    }

    return middleName
}
/*Get Last Name & Fav Color */
function getLastName() {
    const color = Number(document.getElementById("favColor").value);
    let = favColor
    if (color === "red") {
        favColor = "Splash"
    } else if (color === "orange") {
        favColor = "Pop";
    } else if (color === "yellow") {
        favColor = "Poof";
    } else if (color === "green") {
        favColor = "Bang";
    } else if (color === "blue") {
        favColor = "Snap";
    } else if (color === "purple") {
        favColor = "Zap";
    } else if (color === "pink") {
        favColor = "Buzz";
    } else {
        favColor = "Beep";
    }
    return favColor
}

/*Get Suffix & Gender */
function getSuffix() {
    const gender = Number(document.getElementById("gender").value);
    let = gender
    if (gender === "female") {
        gender = "Jr"
    } else if (gender === "male") {
        gender = "Boi"
    }
    return gender
}



