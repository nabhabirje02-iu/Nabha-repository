
const movies = 
{
    "rom-com":
     {
        bollywood: [
            {
                name: "3 Idiots",
                image: "3idiots.png"
            },
            {
                name: "Yeh Jawaani Hai Deewani",
                image: "yeh jawani hai diwani.png"
            },
            {
                name: "Chhichhore",
                image: "chichhore.png"
            },
            {
                name: "Kapoor & Sons",
                image: "kapoor & sons.png"
            },
        ],

        hollywood: 
        [
            {
                name: "The Princess Diaries",
                image: "princes diaries.png"
            },
            {
                name: "The Bridesmades",
                image:"bridesmades.png"
            },
            {
                name: "La La Land",
                image: "la la land.png"
            },
            {
                name: "Legally Blonde",
                image: "leagally blonde.png"
            },
        ],
        kdrama: 
        [           
            {
                name: "The Business Proposal",
                image:"Business Proposal.png"
            },
            
            {
                name: "Weightlifting Fairy Kim Bok-Joo",
                image: "Weightlifting fairy.png"
            },
            {
                name: "Welcome to Samdal-ri",
                image: "Welcome To Samdal-ri.png"
            },
    
            {
                name: "Mr.Queen",
                image: "Mr.Queen.png"
            },

        ],
    bldrama:
    [
        {
            name: "Our Dating Sim",
            image: "our dating sim.png"
        },
        {
            name: "My School President",
            image: "school president.png"
        },
        {
          name: "Fish Upon The Sky",
          image: "Fish Upon the Sky.png"
        },
       

    ],
    sad: 
    {
        bollywood: [
            {
                name: "Kal Ho Naa Ho",
                image: "kalhonaho.jpg"
            },
            {
                name: "Devdas",
                image: "devdas.png"
            },
            {
                name: "Rockstar",
                image: "rockstar.png"
            },
           
                ],
        hollywood: [
            {
                name: "how to loose a man in 10 days",
                image: "loose a man in 10 days.png"
            },
            {
                name: "dead poety's sociey",
                image: "dead poets.png"
            },
            
            {
                name: "Five Feet Apart",
                image: "five feet.png"
            },
        ],
        kdrama:
        [
            
            {
                name: "Youth Of May",
                image: "youth of may.png"
            },
            {
                name: "Twenty-Five Twenty-One",
                image: "twenty five.png"
            },
            {
                name: "Uncontrollably Fond",
                image: "fond.png"
            },
        ],
        bldrama:[
            {
                name: "Jack and The Joker",
                image: "jack and joker.png"
            },
            {
                name: "I Told Sunset About You",
                image: "sunset.png"
            },
            {
                name: "The Paradise Thorns",
                image: "paradise of thorns.png"
            },
        ],
    },
    criminal:
    {
        bollywood:
        [
            {
                name: "Sabarmati Report",
                image: "sabarmati report.png"
            },
            {
                name: "Drishyam",
                image: "drishyam.png"
            },
          
            {
                name: "Andhadhun",
                image: "andhadhun.png"
            },
        ],
        hollywood:
        [
            {
                name: "Murder on the Orient Express",
                image: "murder on orient express.png"
            },
            {
                name: "Phanton detective",
                image: "phantom detective.png"
            },
           
        ],
        kdrama:
        [
            {
                name: "Murder Report",
                image: "murder report.png"
            },
            {
                name: "Memories Of Murder",
                image: "memories of murder.png"
            },
            {
                name: "Pinocchio",
                image: "pinocchio.png"
            },
           
        ],
        bldrama:
        [
            {
                name: "Manner Of Death",
                image: "death.png"
            },
            
            {
                name: "Not Me",
                image: "not me.png"
            },
            {
                name: "Kiseki:Dear to Me",
                image: "kiski.png"
            },
        ],
    },
    horror:
    {
        bollywood:
        [
            {
                name: "Bhool Bhulaiyaa",
                image: "bulaiya.png"
            },
            {
                name: "1920",
                image: "1920.png"
            },
        ],
        hollywood:
        [
            {
                name: "The Conjuring",
                image: "conjur.png"
            },
            {
                name: "The Whistel",
                image: "whistle.png"
            },
            {
                name: "A Quite Place",
                image: "quite place.png"
            },
        ],
        kdrama:
        [
            {
                name: "All Of Us Are Dead",
                image: "all dead.png"
            },
            {
                name:"Sweet Home",
                image: "sweet home.png"
            },
            {
                name: "The Ghost Train",
                image: "ghost train.png"
            },
        ],
    },
    fantasy:
    {
        bollywood:
        [
            {
                name: "Bhootnath",
                image: "bhootnath.png"
            },
            {
                name: "Brahmastra:Part One-Shiva",
                image: "bramhastra.png"
            },
        ],
        hollywood:
        [
            {
                name: "Harry Potter And Its 7 Series",
                image: "harry potter.png"
            },
            {
                name: "The Lord Of The Rings: The Fellowship Of The Ring",
                image: "lord of ring.png"
            },
            {
                name: "Avatar",
                image: "avatr.png"
            },
        ],
        kdrama:
        [
            {
                name: "Goblin",
                image: "goblin.png"
            },
            {
                name: "Alchemy Of Souls",
                image: "alchemy.png"
            },
        ],
        bldrama:
        [
            {
                name: "Me and Thee",
                image: "thee.png"
            },
            {
                name: "Perfect 10 liners",
                image:"Perfect 10 liners.png"
            },
            {
                name: "A Winter Sun Wakes the Wind in Spring Hills",
                image: "winter sun.png"
            },
            {
                name: "WU ",
                image: "wu.png"
            }
        ],
    },
},
};

const result = document.getElementById("movie-result");

let movieList = [];
let currentMovie = 0;

function showMovies() 
{
    const mood = document.querySelector('input[name="mood"]:checked');
    const genre = document.querySelector('input[name="genre"]:checked');

    if (!mood || !genre) {
        result.innerHTML = "Please select one mood and one genre! 🍿";
        return;
    }

    if (!movies[mood.value] || !movies[mood.value][genre.value]) {
        result.innerHTML = "No movies added for this combination yet! 🎬";
        return;
    }

    movieList = movies[mood.value][genre.value];
    currentMovie = 0;
  
    displayMovie();
}

function displayMovie() {
    const movie = movieList[currentMovie];

    result.innerHTML = `
        <h2>${movie.name} 🎬</h2>

        <img src="${movie.image}"
             alt="${movie.name} poster"
             width="200">

        <br><br>

        <button id="next-movie">Next Movie ➜</button>
    `;

    document.getElementById("next-movie").addEventListener("click", function() {
        currentMovie++;

        if (currentMovie >= movieList.length) {
            currentMovie = 0;
        }

        displayMovie();
    });
}
// NEXT BUTTON
const nextBtn = document.getElementById("nextBtn");

nextBtn.onclick = function () {
    document.getElementById("dramasection").style.display = "block";

    document.getElementById("dramasection").scrollIntoView({
        behavior: "smooth"
    });
};

// SUBMIT BUTTON
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function () {
    document.getElementById("movies-display").style.display = "block";

    showMovies();

    document.getElementById("movies-display").scrollIntoView({
        behavior: "smooth"
    });
};
