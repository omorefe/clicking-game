let buttons = {
    amount: 3
}

let score = document.getElementById("score-constant");
let duringTimer = false;
let time = document.getElementById("time");
let timerCount = 10;

let scores = -1;

let scoreButton = document.querySelector('.gamemode');

scoreButton.addEventListener('click', () => {
    alert("This session, the high score has been " + scores)
})

let timer;

let settings = {
    snapToGrid: true
}

let functions = {
    reset: () => {
        let btns = document.querySelectorAll('.button')
        for (let i = 0; i < btns.length; i++) {
            btns[i].remove();
        }
        score.innerHTML = '0'
        startSandbox()

        clearInterval(timer);
        duringTimer = true;
        timerCount = 10;
        time.innerHTML = timerCount;

        timer = setInterval(() => {
            timerCount--;
            time.innerHTML = timerCount;

            if (timerCount == 0) {
                duringTimer = false;
                clearInterval(timer)

                parseInt(score.innerHTML) > scores ? scores = parseInt(score.innerHTML) : null;
            }

        }, 1000)

    },
    getNewPosition: () => {
        if (settings.snapToGrid) {
            return Math.floor(Math.random()*10)*30
        } else {
            return Math.floor(Math.random()*270)
        }
    }
}

let startSandbox = () => {
    for (let i = 0; i < buttons.amount; i++) {
        let elm = document.createElement("button")

        elm.classList.add('button')
        elm.style.top = `${functions.getNewPosition()}px`
        elm.style.left = `${functions.getNewPosition()}px`

        elm.addEventListener('click', () => {
            if (duringTimer) {score.innerHTML = parseInt(score.innerHTML) + 1}
            elm.style.top = `${functions.getNewPosition()}px`
            elm.style.left = `${functions.getNewPosition()}px`
        })

        document.body.append(elm);
    }
}

startSandbox()

export { functions };