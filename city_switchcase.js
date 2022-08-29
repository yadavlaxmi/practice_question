// Accept any city from the user and display the monument of that city.
//                   City                                 Monument
//                   Delhi                               Red Fort
//                   Agra                                Taj Mahal
//                   Jaipur                              Jal Mahal



let readlinesync = require("readline-sync");
let place = readlinesync.question("Enter any Month")
switch (place) {
    case place="Delhi":
        console.log("Red-Fort");
        break
    case place="Agra":
        console.log("Taj Mehal");  
        break;
    case place="Jaipur":
        console.log("Jal Mahal");
        break;

    default:
        break;
}

