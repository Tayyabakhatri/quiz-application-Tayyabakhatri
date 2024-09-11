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
        question: "Which planet in the solar system is known as the “Red Planet”?",

        option1: "Venus",
        option2: "Earth",
        option3: "Mars",
        option4: "Jupiter"
    },
    {
        question: "Which planet in the solar system is known as the “Red Planet”?",

        option1: "Venus",
        option2: "Earth",
        option3: "Mars",
        option4: "Jupiter"
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
    <lable>
    <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option1}
    </lable>
    <lable>
    <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option2}
    </lable>
    <lable>
    <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option3}
    </lable>`
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
function previousAns() {
    showOptions()
    console.log(count - 2);
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
            // console.log(options[i].value)
        }
    }
}

