import React from "react";

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

let successAnswers = 0;

function Result({successAnswers, setStep}) {
  // const 
  console.log('success', successAnswers);
  

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {successAnswers} ответа из 3</h2>
      <button onClick={() => setStep(0)}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const length = Math.round(step / questions.length * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${length}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, i) => (
            <li key={i} onClick={() => onClickVariant(i)}>{text}</li>
          ))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)

  const question = questions[step]
  console.log(question);

  const onClickVariant = (index) => {
    if (index == question.correct)
      ++successAnswers
      
    setStep(prev => prev + 1)
  }

  // function onClickVariant(step) {
  //   return function(i) {
  //     console.log(step, i);
  //     setStep(prev => {
  //       if (prev === 2) {
  //         return prev = 0
  //       } else
  //         return prev += 1
  //     })
  //   }
  // }

  return (
    <div className="App">
      {step > 2 ? <Result successAnswers={successAnswers} setStep={setStep} /> : <Game step={step} question={question} onClickVariant={onClickVariant} />}
      {/* <Result /> */}
    </div>
  );
}

export default App;