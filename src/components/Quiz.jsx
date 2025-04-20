import {useState} from 'react'
import { data } from "./data";
import Choice from "./Choice";

export default function Quiz() {
    const [questions, setQuestions] = useState(0)
    const [index, setIndex] = useState(0)
    function moveQuestion() {
        setIndex(prevIndex => {
            return prevIndex + 1
        })
    }
    function checkCorrect(optionChosen) {
        const ans = data[index].ans
        if(optionChosen[index + 1] === ans) {
            console.log(true)
            return true
        }
        console.log("False")
        return false
    }
    return (    
        <>
        <h1>Quiz</h1>
        <Choice index={index} questionData={data} moveQuestion={moveQuestion} checkCorrect={checkCorrect}/>
        </>
    )
}