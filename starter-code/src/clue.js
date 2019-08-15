// Characters
const mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
}

const drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist",
}


const profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
}


const missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
}

const mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
}

const mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
}

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [{
        name: "Dining Room"
    },
    {
        name: "Conservatory"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Study"
    },
    {
        name: "Library"
    },
    {
        name: "Billiard Room"
    },
    {
        name: "Lounge"
    },
    {
        name: "Ballroom"
    },
    {
        name: "Hall"
    },
    {
        name: "Spa"
    },
    {
        name: "Living Room"
    },
    {
        name: "Observatory"
    },
    {
        name: "Theater"
    },
    {
        name: "Guest House"
    },
    {
        name: "Patio"
    }
];

var weaponsArray = [{
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    }
];

// Pass in all items from characters collection
function randomSelector(charactersArray) {
    // Get random number between 0 and characters index length
    let randomNum = Math.floor((Math.random() * charactersArray.length));

    // Print out returned value of random item from charactersArray
    return charactersArray[randomNum];
}

// Pass object keys and values of characters, rooms and weapons
function pickMistery(charactersArray, roomsArray, weaponsArray) {

    let allArr = [charactersArray, roomsArray, weaponsArray];

    // Loop through collection of arrays
    for (let i = 0; i < allArr.length; i++) {
        // Select random items from characters, rooms and weapons and assign corresponding keys to misteryEnvelope object
        misteryEnvelope = {
            suspect: randomSelector(charactersArray),
            room: randomSelector(roomsArray),
            weapon: randomSelector(weaponsArray)
        }
    }
    return misteryEnvelope;
}

// Pass in returned value of misteryEnvelope from pickMistery function
function revealMistery(misteryEnvelope) {
    /** 
     * TODO: Return <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!!!!
     */
    return `${misteryEnvelope.suspect.first_name} ${misteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${misteryEnvelope.weapon.name} in the ${misteryEnvelope.room.name}!!!!`;
}

pickMistery(charactersArray, roomsArray, weaponsArray);
revealMistery(misteryEnvelope);

/** 
 * Function works, however still getting following error from Jasmine tests:
 *! Pick a random mistery - pickMistery Return an object
 *! TypeError: Cannot read property 'length' of undefined
 *! at randomSelector (http://127.0.0.1:5500/starter-code/src/clue.js:156:65)
 *! at pickMistery (http://127.0.0.1:5500/starter-code/src/clue.js:171:22)
 */