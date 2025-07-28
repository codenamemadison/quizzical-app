import { clsx } from "clsx";


export default function QuestionRow({info, index, updateChoices}) {
    const { question, all_choices: allChoices, selected_choice: selected } = info
    return (
        <section key={index}>
            <h2>{question}</h2>
            <div className="all-choices">
                {allChoices.map((choice, choiceIndex)=> {
                    return (
                        <button 
                        key={choice} 
                        className={clsx({"selected": choice == selected})}
                        onClick={()=> updateChoices(index, choice)}
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