var quizQuestion = [
    {
        question: "In what year did the Great October Socialist Revolution take place?",

        option1: 1923,
        option2: 1917,
        option3: 1914,
        option4: 1920,
        correct: 1917
    },
    {
        question: " What is the largest lake in the world?",

        option1: "Caspian Sea",
        option2: "Baikal",
        option3: "Lake Superior",
        option4: "Ontari",
        correct: "Caspian Sea"
    },
    {
        question: "Which planet in the solar system is known as the “Red Planet”?",

        option1: "Venus",
        option2: "Earth",
        option3: "Mars",
        option4: "Jupiter",
        correct: "Mars"
    }, {
        question: "Which country hosted the 2024 FIFA U-20 Women's World Cup?",

        option1: "India",
        option2: "Nigeria",
        option3: "Colombia",
        option4: "Japan",
        correct: "Colombia"
    },
    {
        question: "What significant new feature did Apple announce in their June 2024 WWDC?",

        option1: "Mixed Reality headset",
        option2: "Quantum computing chip",
        option3: "Mind-controlled interface",
        option4: "Apple Car prototype",
        correct: "Apple Car prototype"
    },
    {
        question: "What is the chemical symbol for Gold?",

        option1: "Gd",
        option2: "Au",
        option3: "Ag",
        option4: "Go",
        correct: "Au"
    },
    {
        question: "What is the color of blood when it's inside your body?",
        option1: "Red",
        option2: "Blue",
        option3: "Green",
        option4: "yellow",
        correct: "Red"
    },
    {
        question: "Which is the fastest bird in the world?",
        option1: "Raven",
        option2: "Hummingbird",
        option3: "Peregrine Falcon",
        option4: "Bald Eagle",
        correct: "Peregrine Falcon"
    }
]
var score = 0
var count = 0
var nextBtn = document.getElementById("btn")
var previousBtn = document.getElementById("previousBtn")
var questionDiv = document.getElementById("question-div")
var playAgain = document.getElementById("playAgain")

previousBtn.addEventListener('click', function () {
    console.log(count);
    count--;
    if (count < 0) {
        count = 0;
    }
    showOptions();
});

playAgain.addEventListener('click', function () {
    count = 0;
    score = 0;  // Reset the score when playing again
    playAgain.style.display = "none";
    showOptions();
    nextBtn.style.display = "block";
    previousBtn.style.display = "block";
});

function showOptions() {
    if (!quizQuestion[count]) {
        previousBtn.disabled = false;
        questionDiv.innerHTML = `Quiz completed. Your score: ${score}`;
        nextBtn.style.display = "none";
        previousBtn.style.display = "none";
        playAgain.style.display = "block";
    } else {
        nextBtn.disabled = true;  // Disable next button until an option is selected
        questionDiv.innerHTML = `<p class="text">${count + 1}) ${quizQuestion[count].question}</p>`;
        
        var optionsHtml = '';
        for (var key in quizQuestion[count]) {
            if (key.startsWith("option")) {
                optionsHtml +=
                    `<label class="text">
                        <input type="radio" name="option" value="${quizQuestion[count][key]}">${quizQuestion[count][key]}
                    </label><br>`;
            }
        }
        questionDiv.innerHTML += optionsHtml;

        // Recapturing the options after injecting HTML for them
        const options = document.getElementsByName("option");

        // Add click event for options
        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener("click", function () {
                nextBtn.disabled = false;  // Enable next button once an option is clicked

                // Use a closure to capture the correct count at the time of selection
                if (options[i].checked && options[i].value === quizQuestion[count].correct) {
                    score++;  // Increment score if the selected option is correct
                }
            });
        }
    }
}

// Handle the "Next" button click
nextBtn.addEventListener('click', function () {
    count++;  // Increment count when clicking next
    showOptions();  // Show the next question
});

// Initially call showOptions
showOptions();
