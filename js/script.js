const numbers = document.getElementsByClassName('btn');
const result = document.getElementById("result");
const logHistory = document.getElementById("history");
let history = [];
let expressionData = "";
let resultData = "";

for (let number of numbers) {
    number.addEventListener('click', function () {
        result.innerHTML += this.value
    });
}

function equal() {
    let res = result.innerHTML
    let output = eval(res)
    expressionData = res
    resultData = output
    history.push({ expression: expressionData, result: resultData });
    showHistory()
    result.innerHTML = output
}

function clean() {
    result.innerHTML = " "
}

function undo() {
    let res = result.innerHTML
    result.innerHTML = res.substring(0, res.length - 1);
}

function showHistory() {
    let log = ""
    for (let key in history) {
        log += history[key].expression + " = " + history[key].result + "<br>" + "<br>"
    }
    logHistory.innerHTML = log
}

// Dark & Light Mode
let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

// Index History
let indexHistory = document.getElementsByClassName("fa-history")
indexHistory[0].addEventListener("click", function () {
    logHistory.classList.toggle("indexHistory")
})