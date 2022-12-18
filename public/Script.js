const quizDb = [
  {
    question: "Q1 : what is the full form of HTML ?",
    a: "Hello to my layout",
    b: "hypertext makeup language ",
    c: "hypertext markup language",
    d: "none",
    ans: "ans3",
  },
  {
    question: "Q2 : what is the full form of jS ?",
    a: "john script",
    b: "java server",
    c: "jocab system",
    d: "java script`",
    ans: "ans4",
  },
  {
    question: "Q3 : what is the full form of bmcc ?",
    a: "brihan maharashtra college of commerce",
    b: "best MH college of commerce",
    c: "bg mi console center",
    d: "none",
    ans: "ans1",
  },
  {
    question: "Q4 : what is the full form of css ?",
    a: "cat style sheet",
    b: "Cascading Style Sheets",
    c: "center style sheet",
    d: "java script",
    ans: "ans2",
  },
];

const question = document.querySelector("#question");
const option1 = document.querySelector("#opt1");
const option2 = document.querySelector("#opt2");
const option3 = document.querySelector("#opt3");
const option4 = document.querySelector("#opt4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDb[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer == quizDb[questionCount].ans) {
    score++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizDb.length) {
    loadQuestion();
  } else {
    scorearea.innerHTML = `
                <h2>you scored ${score}/${quizDb.length} </h2>
                <button class="btn"> thank you ! <button>
                `;
  }
});
