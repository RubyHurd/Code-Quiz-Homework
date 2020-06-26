var highscoreInput = document.querySelector("highscore-text");
var highscoreForm = document.querySelector("highscore-form");
var highscoreList = document.querySelector("highscore-list");
var highscoreCountSpan = document.querySelector("highscore-count");
var addName = [];


function renderHighscores() {
    // Clear highscoreList element and update highscoreCountSpan
    highscoreList.innerHTML = "";
    highscoreCountSpan.textContent = addName.length;

    // Render a new li for each name added
    for (i = 0; i < addName.length; i++) {
        var name = addName[i];

        var li = document.createElement("li");
        li.textContent = name;
        highscoreList.appendChild(li);
    }
}

//When the name is submitted to the list
highscoreForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var highscoreText = highscoreInput.value.trim();

    if (highscoreText === "") {
        return;
    }

    //Add new highscoreText to addName array, clear the input
    addName.push(highscoreText);
    highscoreInput.value = "";

    //Re-render the highscore list
    storeNames();
    renderHighscores();

});

//local storage code starts here - get stored names from localStorage
function init() {
    //Parsing the string to the object
    var storedNames = JSON.parse(localStorage.getItem("addName"));

    // if names are retrieved from localStorage, update the addNames array
    if (storedNames !== null) {
        addName = storedNames;
    }

    //Render addName to DOM
    renderaddName();
}

function storeNames() {
    //Stringify and set "addName" key to localStorage to todos array
    localStorage.setItem("addName", JSON.stringify(addName));
}

// When the form is submitted
highscoreForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var highscoreText = highscoreInput.value.trim();

    if (highscoreText === "") {
        return;
    }

    //Add new highscoreText to addName array, clear the input
    addName.push(highscoreText);
    highscoreInput.value = "";

    //Store updated addName in localStorage, re-render list
    storeAddname();
    renderaddName();
