var quizQuestion = [
    {
        question: "In what year did the Great October Socialist Revolution take place?",

        option1: 1923,
        option2: 1917,
        option3: 1914,
        option4: 1920,
        correct:1923
    },
    {
        question: " What is the largest lake in the world?",

        option1: "Caspian Sea",
        option2: "Baikal",
        option3: "Lake Superior",
        option4: "Ontari",
        correct:"Baikal"
    }, {
        question: "Which planet in the solar system is known as the “Red Planet”?",

        option1: "Venus",
        option2: "Earth",
        option3: "Mars",
        option4: "Jupiter",
        correct:"Mars"
    }, {
        question: "Which country hosted the 2024 FIFA U-20 Women's World Cup?",

        option1: "India",
        option2: "Nigeria",
        option3: "Colombia",
        option4: "Japan",
        correct:"Colombia"
    },
    {
        question: "What significant new feature did Apple announce in their June 2024 WWDC?",

        option1: "Mixed Reality headset",
        option2: "Quantum computing chip",
        option3: "Mind-controlled interface",
        option4: "Apple Car prototype",
        correct:"Quantum computing chip"
    },
    {
        question: "What is the chemical symbol for Gold?",

        option1: "Gd",
        option2: "Au",
        option3: "Ag",
        option4: "Go",
        correct:"Au"
    }
]
var score=0
var count = 0
var options = document.getElementsByName("option")
var nextBtn = document.getElementById("btn")
var previousBtn = document.getElementById("previousBtn")
var questionDiv = document.getElementById("question-div")
function showOptions() {
    // console.log(count);

    if (!quizQuestion[count]) {
        questionDiv.innerHTML = `Quiz completed ${score}`
        nextBtn.style.display = "none"
        previousBtn.style.display="none"

    } else {
        btn.disabled = true
        questionDiv.innerHTML = `<p>${quizQuestion[count].question}</p>
        <label>
        <input type="radio" name ="option" value="${quizQuestion[count].option1}">${quizQuestion[count].option1}
        </label>
        <label>
        <input type="radio" name ="option" value="${quizQuestion[count].option2}">${quizQuestion[count].option2}
        </label>
        <label>
        <input type="radio" name ="option" value="${quizQuestion[count].option3}">${quizQuestion[count].option3}
        </label>
        <label>
        <input type="radio" name ="option" value="${quizQuestion[count].option4}">${quizQuestion[count].option4}
        </label>`
        count++;
        for (var i = 0; i < options.length; i++) {

            if (options[i].checked) {
                console.log(options[i].value)
            }

            options[i].addEventListener("click", function () {
                nextBtn.disabled = false
            })
        }
    }
   

}
showOptions()
nextBtn.addEventListener('click', function () {
    showOptions()
    previousBtn.style.display = "block"
    for(var i = 0 ; i < options.length; i++){
        if(options[i].checked){
            if(options[i].value===quizQuestion[count].correct){
                score++
            }
        }
    }
    
 
})

previousBtn.addEventListener('click', function () {
    console.log(count)
    count--
    if (count > 0) {
        count--;
    }
    showOptions()
})

