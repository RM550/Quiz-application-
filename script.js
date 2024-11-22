let id = (id) => document.getElementById(id);
let query = (query) => document.querySelectorAll(query);
let quiz = id('quiz');
let question = id('heading');
let a = id('a_id');
let b = id('b_id');
let c = id('c_id');
let d = id('d_id');
let button = id('btn');
let option = query('.option');
let popup = id('popup');
let popupMessage = id('popup-message');
let popupCloseBtn = id('popup-close-btn');
// Above
// ignore this code

let quizApp = [
    {
        question: 'The highest run scorer in test cricket ______?',
        a: 'Mathew hayden',
        b: 'Inzmam-ul-haq',
        c: 'Younis khan',
        d: 'Brain lara',
        correct: 'd'
    },
    {
        question: 'Which amimal kids death cycle starts after they born ?',
        a: 'Crocodile',
        b: 'Hippo',
        c: 'Loin',
        d: 'Duck',
        correct: 'b'
    },
    {
        question: 'which device can be explode by hacking ?',
        a: 'PC',
        b: 'Mobile',
        c: 'Remote',
        d: 'Pager',
        correct: 'd'
    },
    {
        question: 'What does LOL stands for ________?',
        a: 'Liqued on liqued',
        b: 'Laughing on  leakeage',
        c: 'Living on lockwood',
        d: 'Laugh out loud',
        correct: 'd'
    },
    {
        question: 'The most fastest car by toyota brand _____?',
        a: 'Corolla',
        b: 'G-wagon',
        c: 'Supra',
        d: 'Thar',
        correct: 'c'
    },
    {
        question: 'Highest wicket by a spinner in test cricket _______?',
        a: 'Shane warne',
        b: 'Murlitharan',
        c: 'Swaan lee',
        d: 'Mushtaq ahmed',
        correct: 'b'
    },
    {
        question: 'which country is living in 2050?',
        a: 'Japan',
        b: 'Russia',
        c: 'USA',
        d: 'Pakistan',
        correct: 'a'
    },
    {
        question: 'The brand of pakistan is ______?',
        a: 'Shehbaz sharif',
        b: 'Nawaz sharif',
        c: '804',
        d: 'Diesel',
        correct: 'c'
    },
    {
        question: 'The undefeatable commander of history ______?',
        a: 'Hazrat umer (r.a)',
        b: 'Hazrat khalid bin waleed (r.a)',
        c: 'Hazrat abu baker (r.a)',
        d: 'Hazrat hamza (r.a)',
        correct: 'b'
    },
    {
        question: 'Smallest country of the world is _______?',
        a: 'Green land',
        b: 'Ice land',
        c: 'Sea land',
        d: 'Yamen',
        correct: 'c'
    },
    {
        question: 'The undefeatable boxer of all time ________ ?',
        a: 'M ali',
        b: 'Jake paul',
        c: 'Khabib',
        d: 'Mike tyson ',
        correct: 'd'
    },
    {
        question: 'The most subscribed channel of youtube _______?',
        a: 'Mr beast',
        b: 'Carryminati',
        c: 'Cr7',
        d: 'T series',
        correct: 'a'
    },
    {
        question: 'Which one is fastest animal of the world?',
        a: 'Tiger',
        b: 'Cheetah',
        c: 'Horse',
        d: 'leapord',
        correct: 'b'
    },
    {
        question: 'The chokers of cricket _______?',
        a: 'South Africa',
        b: 'Pakistan',
        c: 'india',
        d: 'Austraila',
        correct: 'a'
    },
    {
        question: 'Which gus is most deadliest in land and in under water?',
        a: 'AK47',
        b: 'M4',
        c: 'AWM',
        d: 'SCAR',
        correct: 'a'
    },
    {
        question: 'What we called to the war of 1960s between us and ussr?',
        a: 'WW1',
        b: 'Year of dragons',
        c: 'Cold war',
        d: 'WW2',
        correct: 'c'
    },
    {
        question: 'Which software is best for hacking?',
        a: 'linux',
        b: 'Windows',
        c: 'Ios',
        d: 'Mac',
        correct: 'a'
    },
    {
        question: 'Who is no 1 karate champion of the world?',
        a: 'Jakie chan',
        b: 'M ali',
        c: 'bruce lee',
        d: 'Jake paul',
        correct: 'c'
    },
    {
        question: 'who is the fastest bowler of the world?',
        a: 'Shoaib akhter',
        b: 'breet lee',
        c: 'Shaun tait',
        d: 'Lasith Malinga',
        correct: 'a'
    },
    {
        question: 'First pakistani bowler to reach 500 wickets in ODI?',
        a: 'Shoaib akhter',
        b: 'Wasim akram',
        c: 'Waqar younis',
        d: 'Imran khan',
        correct: 'b'
    }
];

let clear = () => {
    for (let i = 0; i < option.length; i++) {
        option[i].checked = false;
    }
}

let check = () => {
    let checkId;
    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            checkId = option[i].id;
        }
    }
    return checkId;
}

let score = 0;
let initialStart = 0;

let quizLoad = () => {
    clear();
    let currentQuiz = quizApp[initialStart];
    question.textContent = currentQuiz.question;
    a.textContent = currentQuiz.a;
    b.textContent = currentQuiz.b;
    c.textContent = currentQuiz.c;
    d.textContent = currentQuiz.d;
}

quizLoad();

button.addEventListener('click', () => {
    let c = check();
    if (c) {
        if (c === quizApp[initialStart].correct) {
            score = score + 10;
        }
        initialStart++;
        if (initialStart < quizApp.length) {
            quizLoad();
        }
        else {
            quiz.innerHTML = `
                <h2 class="heading">Your Answer Score is ${score}/${quizApp.length*10}</h2>
                <button class="last-btn" onclick="history.go(0)">Start Again</button>
            `;
        }
    }
    else {
        alert('Please select an option');
    }

});
