import { useState, useEffect } from "react"
import {decode} from 'html-entities';


import QuestionRow from "./QuestionRow"
export default function QuizScreen() {
    const [questions, setQuestions] = useState([])
    async function fetchQuestions() {
        try {
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
            const data = await response.json()
            const dataResults = data.results
            setQuestions(dataResults.map((questionInfo, index)=> {
                let allChoices = [...(questionInfo.incorrect_answers.map(choice => decode(choice)))]
                const randomIndex = Math.floor(Math.random() * (allChoices.length + 1))
                allChoices.splice(randomIndex, 0, decode(questionInfo.correct_answer)) // add in a certain place
                return ({
                    ...questionInfo,
                    question: decode(questionInfo.question),
                    all_choices: allChoices,
                    selected_choice: null
                })
            }))
            return dataResults
        } catch (error) {
            console.error(error)
            return []
        }
    }

    function updateChoices(questionIndex, chosenChoice) {
        setQuestions(prev => prev.map((questionInfo, index)=> {
            return (
                index == questionIndex ? 
                    {
                        ...questionInfo,
                        selected_choice: chosenChoice,
                    } : 
                    questionInfo // if not altered question
            )
        }))
    }

    useEffect(()=> {
        fetchQuestions();
    }, []) // on first render

    return (
        <div>
            <main id="questions-area">
                {questions.length > 0 && questions.map((questionInfo, index)=> {
                    return (
                        <QuestionRow 
                            info={questionInfo} 
                            index={index} 
                            updateChoices={updateChoices}
                        />
                    )
                })}
            </main>
            <button id="submit-btn">Check answers</button>
        </div>
    )
}