import clsx from "clsx"

export default function WordCube({value,guessed,isGameLost,isIncluded}) {

    const wrongDisplay = !guessed && isGameLost && isIncluded
    const display = guessed || wrongDisplay
    const displayValue = display? value : ""
    const className = clsx("word",{wrong:wrongDisplay})
        
    return (
        <div className={className}>
            <p>{displayValue}</p>
        </div>
    )
}