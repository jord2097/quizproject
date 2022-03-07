const questions = [{
    q: "Pick your go-to drink.",
    options: [{
        score: "genZ",
        text: "Diet Coke"
        },
        {
        score: "mill",
        text: "Margarita"        
        },
        {
        score: "genX",
        text: "Gin and Tonic"
        },
        {
        score: "oldsoul",
        text: "Whiskey on the rocks"
        }
    ]
},
{
    q: "Which of these are you most afraid of?",
    options: [{
        score: "genZ",
        text: "Holes and Darkness"
        },
        {
        score: "mill",
        text: "Crowds and Small Spaces"
        },
        {
        score: "genX",
        text: "Rollercoasters and Clowns"
        },
        {
        score: "oldsoul",
        text: "Ghosts and Thunderstorms"
        }

    
    ]
},
{
    q: "Where would you rather live?",
    options: [{
        score: "genZ",
        text: "Tokyo"
        },
        {
        score: "mill",
        text: "San Francisco"
        },
        {
        score: "genX",
        text: "Edinburgh"
        },
        {
        score: "oldsoul",
        text: "Rome"
        }

    
    ]
},
{
    q: "What type of home would you prefer?",
    options: [{
        score: "genZ",
        text: "Beach house"
        },
        {
        score: "mill",
        text: "A shoebox apartment in a big city"
        },
        {
        score: "genX",
        text: "Rustic bungalow in the countryside"
        },
        {
        score: "oldsoul",
        text: "Apartment in a brutalist skyscraper"
        }

    
    ]
},
{
    q: "What is your routine takeaway food order?",
    options: [{
        score: "genZ",
        text: "Chinese"
        },
        {
        score: "mill",
        text: "Pizza"
        },
        {
        score: "genX",
        text: "Indian"
        },
        {
        score: "oldsoul",
        text: "Chippy"
        }

    
    ]
},

];

let answerData = { // stores scores - could be an array also
    genZ: 0,
    mill: 0,
    genX: 0,
    oldsoul: 0
}

let typeMeaning = { // the property corresponding to the winning score will be displayed at the end
    genZ: "Your soul is 9 years old. This might not seem possible but I can assure you, it is the explanation for your child-like personality.  ",
    mill: "Your soul is 27 years old. You're still a young soul but now can you start to understand those much older.",
    genX: "Your soul is 99 years old. This is by no means old for a soul, but younger souls might find you to be stubborn.",
    oldsoul: "Your soul is 1000 years old. That explains your extreme feelings of deja vu and the near infinite wisdom you possess. "
}