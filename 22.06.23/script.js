const label = document.querySelector('.label'),
    title = document.querySelector('.title'),
    desc = document.querySelector('.desc'),
    arrows = document.querySelector('.arrows'),
    womanBtn = document.querySelector('.for_woman'),
    manBtn = document.querySelector('.for_men'),
    resultsDesc = document.querySelector('.results__desc'),
    progressBar = document.querySelector('.progress__bar'),
    innerWrapper = document.querySelector('.inner__wrapper'),
    btns = document.querySelectorAll('.btn')

let questionIndex = 0;

btns.forEach(el=>{
    el.addEventListener('click', checkType)
})

function showManyOfMore(arr, index) {
    const manyOfMore = `
    <h2 class="question" id="question">${arr.question}</h2>
    <p class="amount" id="amount">${arr.amount}</p>
    <div class="answers_wrapper">
    
    </div>
    <button class="next" onclick="checkType()">Next</button>
    <button class="back" id="back">&#60; Back</button>
    <div class="progress__bar" id="progressBar"></div>
    `
    innerWrapper.innerHTML = manyOfMore

    for (let f = 0; f < arr.answers.length; f++) {
        document.querySelector('.answers_wrapper').innerHTML += `
        <div class="answer_of_more">
      <div class="circle">-</div>
      <div class="answer__text">${arr.answers[f]}</div>
    </div>
    </div>
        `
        
    }

    const answers_of_more = document.querySelectorAll('.answer_of_more')
    for (let y = 0; y < answers_of_more.length; y++) {
        const answer_of_more = answers_of_more[y];
        const circles = document.querySelectorAll('.circle')

        const circle = circles[y];
        answer_of_more.addEventListener('click', ()=>{
            answer_of_more.classList.add("selected_bg");
            circle.classList.add("selected");
            circle.innerHTML = '⋎'
        })
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

function showOneOfMore(arr, index){
    const oneOfMore = `
    <h2 class="question" id="question">${arr.question}</h2>
    <p class="amount" id="amount">${arr.amount}</p>
    <div class="answers_wrapper">
    
    </div>
    <button class="next" onclick="checkType()">Next</button>
    <button class="back" id="back">&#60; Back</button>
    <div class="progress__bar" id="progressBar"></div>
    `
    innerWrapper.innerHTML = oneOfMore

    for (let f = 0; f < arr.answers.length; f++) {
        document.querySelector('.answers_wrapper').innerHTML += `
        <div class="answer_of_more">
      <div class="circle">-</div>
      <div class="answer_text_1">${arr.answers[f][0]}</div>
      <div class="answer__text">${arr.answers[f][1]}</div>
    </div>
    </div>
        `
        
    }
    const answers_of_more = document.querySelectorAll('.answer_of_more')
    for (let y = 0; y < answers_of_more.length; y++) {
        const answer_of_more = answers_of_more[y];
        const circles = document.querySelectorAll('.circle')
        const circle = circles[y];
        answer_of_more.addEventListener('click', ()=>{
            answer_of_more.classList.add("selected_bg");
            circle.classList.add("selected");
            circle.innerHTML = '⋎'
        })
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
        <button class="answer" onclick="checkType()">${arr.answers[b]}</button>
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
    <button class="next" onclick="checkType()">Next</button>
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
    const answers_of_many = document.querySelectorAll('.answer_of_many')
    for (let y = 0; y < answers_of_many.length; y++) {
        const circle = circles[y];
        const answer_of_many = answers_of_many[y];
        answer_of_many.addEventListener('click', ()=>{
            answer_of_many.classList.add("selected_bg");
            circle.classList.add("selected");
            circle.innerHTML = '⋎'
        })
    }
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
      <button class="manual__btn" onclick="checkType()">${arr.answers[17]}</button>
    </div>
    `
    innerWrapper.innerHTML = manual

}

function showForm(arr, index) {
    const form = `
    <h2 class="question">${arr.question}</h2>
    <p class="form_desc">${arr.amount}</p>
    <div class="form">
      <p class="label name">Your Name</p>
      <input type="text" class="input" placeholder="Enter Your Name...">
      <p class="label email">Your Email</p>
      <input type="text" class="input" placeholder="Enter your email address here...">
      <button class="btn_result" onclick="checkType()">See My Result Now</button>
    </div>
    `

    innerWrapper.innerHTML = form
}


function checkType() {
    innerWrapper.innerHTML = ''
    for (let index = questionIndex; index < questions.length; index++) {
        const arr = questions[index];
        if (arr.type === 'oneOfMany') {
            showOneOfMany(arr, index)
            questionIndex++
            return
        }
        if (arr.type === 'manual') {
            showManual(arr, index)
            questionIndex++
            return
        }
        if(arr.type === 'manyOfMany'){
            showManyOfMany(arr, index)
            questionIndex++
            return
        }
        if (arr.type === 'oneOfMore') {
            showOneOfMore(arr, index)
            questionIndex++
            return
        }
        if (arr.type === 'manyOfMore') {
            showManyOfMore(arr, index)
            questionIndex++
            return
        }
        if(arr.type === 'form'){
            showForm(arr, index)
            questionIndex++
            return
        }

    }
}