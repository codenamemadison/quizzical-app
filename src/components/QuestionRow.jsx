import { clsx } from "clsx";


export default function QuestionRow({info, index, updateChoices, isQuizDone}) {
    const { question, all_choices: allChoices, selected_choice: selected, correct_answer: correctAns } = info
    return (
        <section key={index}>
            <h2>{question}</h2>
            <div className="all-choices">
                {allChoices.map((choice, choiceIndex)=> {
                    return (
                        <button 
                        key={choice} 
                        className={clsx({
                            "selected": choice == selected,
                            // if quiz is done (submitted)
                            "correct-answer": isQuizDone && choice === correctAns,
                            "selected-incorrect": isQuizDone && choice == selected && choice !== correctAns,
                            "not-selected": isQuizDone && choice !== selected && choice !== correctAns
                        })}
                        onClick={()=> updateChoices(index, choice)}
                        disabled={isQuizDone}
                        >
                            {choice}
                        </button>
                    )
                })}
            </div>
            <div className="divider"></div>

        </section>
    )
}