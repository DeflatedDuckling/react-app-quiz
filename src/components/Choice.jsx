export default function Choice({ index, questionData, moveQuestion, checkCorrect }) {
    const questionObject = questionData[index]
    function optionHandler() {

    }
    return (
        <>
        <h2>{questionObject.question}</h2>
        <ul>
            <li onClick={(checkCorrect)}>{questionObject.optionOne}</li>
            <li onClick={checkCorrect}>{questionObject.optionTwo}</li>
            <li onClick={checkCorrect}>{questionObject.optionThree}</li>
            <li onClick={checkCorrect}>{questionObject.optionFour}</li>
        </ul>
        <button onClick={moveQuestion}>Next</button>
        </>
    )
}