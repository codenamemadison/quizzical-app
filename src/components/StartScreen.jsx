
export default function StartScreen({startGame}) {

    return (
        <div id="start-screen-section">
            <h1>Quizzical</h1>
            <p id="quiz-description">Test your knowledge with this quiz! </p>
            <button onClick={startGame}>Start quiz</button>
        </div>
    )
}