import { useState, useRef } from 'react'
import {data} from './data'
import './Quiz.css'
export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index])
    
    let lock = false;
    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);
    const optionArray = [option1, option2, option3, option4]
    function checkAnswer(e, ans) {
        if (lock) {
            return null;
        }
        if(question.correct === ans) {
            e.target.classList.add("correct");
            lock = true;
        }
        else {
            e.target.classList.add("false");
            optionArray[question.correct].current.classList.add("correct");
            lock = true;
        }
    }
    function onNext() {
        if(lock) {
            setIndex(currentIndex => {
                return currentIndex + 1
            })
            setQuestion(data[index])
            lock = false
            optionArray.map(option => {
                option.current.classList.remove("false")
                option.current.classList.remove("correct")
            })
        }
    }
    return (
        <div className="wrapper">
            <div className="quiz-container">
                <h1>Quiz</h1>
                <div className="question-container">
                    <h2>{index} . {question.question}</h2>
                    <ul>
                        <li ref={option1} onClick={(e) => checkAnswer(e,0)}>{question.options[0]}</li>
                        <li ref={option2} onClick={(e) => checkAnswer(e,1)}>{question.options[1]}</li>
                        <li ref={option3} onClick={(e) => checkAnswer(e,2)}>{question.options[2]}</li>
                        <li ref={option4} onClick={(e) => checkAnswer(e,3)}>{question.options[3]}</li>
                    </ul>
                    <button onClick={onNext}>Next</button>
                    <div className="index">{index} of {data.length} Questions</div>
                </div>
            </div>
        </div>
    )
}