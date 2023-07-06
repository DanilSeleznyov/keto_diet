const label = document.querySelector('.label'),
    title = document.querySelector('.title'),
    desc = document.querySelector('.desc'),
    arrows = document.querySelector('.arrows'),
    womanBtn = document.querySelector('.for_woman'),
    manBtn = document.querySelector('.for_men'),
    resultsDesc = document.querySelector('.results__desc'),
    progressBar = document.querySelector('.progress__bar'),
    innerWrapper = document.querySelector('.inner__wrapper')

womanBtn.addEventListener('click', cleanWrapper)
manBtn.addEventListener('click', cleanWrapper)

function cleanWrapper() {
    innerWrapper.innerHTML = ''
    checkType()
}

function showOneOfMany(arr, index) {
    const oneOfMany = `
        <h2 class="question" id="question">${arr.question}</h2>
        <p class="amount" id="amount">${arr.amount}</p>
        <div class="btn_wrapper">

        </div>
        <button class="back" id="back">&#60; Back</button>
        <div class="progress__bar" id="progressBar"></div>
`
    innerWrapper.innerHTML = oneOfMany
    
    for (let b = 0; b < arr.answers.length; b++) {
        document.querySelector('.btn_wrapper').innerHTML += `
        <button class="answer" id="answer">${arr.answers[b]}</button>
        ` 
    }

    const answerBtns = document.querySelectorAll('.answer')
    for (let x = 0; x < answerBtns.length; x++) {
        const answerBtn = answerBtns[x];
        answerBtn.addEventListener('click', ()=>{
            
        })
    }


}

function showManyOfMany(arr, index){
    const manyOfMany = `
    <h2 class="question" id="question">${arr.question}</h2>
    <p class="amount" id="amount">${arr.amount}</p>
    <div class="answers_wrapper">
    
    </div>
    <button class="next">Next</button>
    <button class="back" id="back">&#60; Back</button>
    <div class="progress__bar" id="progressBar"></div>
    `
    innerWrapper.innerHTML = manyOfMany

    for (let f = 0; f < arr.answers.length; f++) {
        document.querySelector('.answers_wrapper').innerHTML += `
        <div class="answer_of_many" id="answer">
      <div class="circle">-</div>
      <img src="${arr.answers[f][1]}" alt="">
      <div class="answer__text">${arr.answers[f][0]}</div>
    </div>
    </div>
        `
        
    }
    const circles = document.querySelectorAll('.circle')

    for (let y = 0; y < circles.length; y++) {
        const circle = circles[y];
        circle.addEventListener('click', ()=>{
            circle.classList.add("selected");
            circle.innerHTML = '⋎'
        })
    }

}

function showManual(arr, index) {
    const manual = `
    <h2 class="question" id="question">${arr.question}</h2>
    <div class="manual">
      <h2 class="manual__label">${arr.answers[0]}</h2>
      <p class="manual__desc">
        ${arr.answers[1]}
      </p>
      <p class="manual__desc manual__desc-2">
        ${arr.answers[2]}
      </p>
      <h2 class="manual__label">${arr.answers[3]}</h2>
      <p class="manual__desc manual__desc-3">
        <img src="${arr.answers[4]}" alt="" /><span
          >${arr.answers[5]}</span
        >
        ${arr.answers[6]} <br />
        <img src="${arr.answers[4]}" alt="" /><span
          >${arr.answers[7]}</span
        >
        ${arr.answers[8]} <br />
        <img src="${arr.answers[4]}" alt="" /><span
          >${arr.answers[9]}</span
        >
         ${arr.answers[10]}<br />
        <img src="${arr.answers[4]}" alt="" /><span>${arr.answers[11]}</span>
         ${arr.answers[12]}<br />
        <img src="${arr.answers[4]}" alt="" /><span
          >${arr.answers[13]}</span
        >
         ${arr.answers[14]}<br />
        <img src="${arr.answers[4]}" alt="" /><span
          >${arr.answers[15]}</span
        >
        ${arr.answers[16]}
      </p>
      <button class="manual__btn">${arr.answers[17]}</button>
    </div>
    `
    innerWrapper.innerHTML = manual

}

function checkType() {
    for (let index = 3; index < questions.length; index++) {
        const arr = questions[index];
        if (arr.type === 'oneOfMany') {
            showOneOfMany(arr, index)
            return
        }
        if (arr.type === 'manual') {
            showManual(arr, index)
            return
        }
        if(arr.type === 'manyOfMany'){
            showManyOfMany(arr, index)
            return
        }

    }
}