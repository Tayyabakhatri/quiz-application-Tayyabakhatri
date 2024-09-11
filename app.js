var quizQuestion = [
    {
        question: "In what year did the Great October Socialist Revolution take place?",

        option1: 1923,
        option2: 1917,
        option3: 1914,
        option4: 1920
    },
    {
        question: " What is the largest lake in the world?",

        option1: "Caspian Sea",
        option2: "Baikal",
        option3: "Lake Superior",
        option4: "Ontari"
    }, {
        question: "Which planet in the solar system is known as the “Red Planet”?",

        option1: "Venus",
        option2: "Earth",
        option3: "Mars",
        option4: "Jupiter"
    }, {
        question: "Which country hosted the 2024 FIFA U-20 Women's World Cup?",

        option1: "India",
        option2: "Nigeria",
        option3: "Colombia",
        option4: "Japan"
    },
    {
        question: "What significant new feature did Apple announce in their June 2024 WWDC?",

        option1: "Mixed Reality headset",
        option2: "Quantum computing chip",
        option3: "Mind-controlled interface",
        option4: "Apple Car prototype"
    },
    {
        question: "What is the chemical symbol for Gold?",

        option1: "Gd",
        option2: "Au",
        option3: "Ag",
        option4: "Go"
    }
]
var count = 0
var options = document.getElementsByName("option")
var btn = document.getElementById("btn")
function showOptions() {
    // console.log(count);
    btn.disabled = true
    var questionDiv = document.getElementById("question-div")
    questionDiv.innerHTML = `<p>${quizQuestion[count].question}</p>
    <label>
    <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option1}
    </label>
    <label>
    <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option2}
    </label>
    <label>
    <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option3}
    </label>
    <label>
    <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option4}
    </label>`
    count++;
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
            console.log(options[i].value)
        }

        options[i].addEventListener("click", function () {
            btn.disabled = false
        })
    }

}
showOptions()
var previousAnswers = [];
function previousAns() {
    showOptions()
    // console.log(count - 2);
    if (previousAnswers[count - 2] !== undefined) {
        console.log(previousAnswers[count - 2]);
    } else {
        console.log("No answer selected.");
    }
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
           previousAnswers[count]==options[i].value;
           break
        }
    }
}

