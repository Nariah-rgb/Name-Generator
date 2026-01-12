function checkGenerateName() {
    /*Get prefix & Age*/
    const age = Number(document.getElementById("q2").value);
    let ageNumber;
    if (age < 18) {
        ageNumber = "Lil";
    } else {
        ageNumber = "Big";
    }

    /*Get first name & Favorite Food*/
    const food = Number(document.getElementById("q3").value);
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

    /*Get middle name & Name*/
    switch(letter) {
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



}
