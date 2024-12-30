import clsx from "clsx"

export default function Status({isWin,isLost,isLastGuessCorrect,farewellMessage}){  

    const isGameOver = isLost || isWin
    const isFarewell = farewellMessage && !isLastGuessCorrect && !(isWin||isLost)

    function renderGameStatus() {
        if (isFarewell) {
            return (
                <h1>{farewellMessage}</h1>
            )
        }

        if (isWin) {
            return (
                <>
                    <h1>You win!</h1>
                    <h2>Well done! 🎉</h2>
                </>
            )
        } 
        if (isLost) {
            return (
                <>
                    <h1>Game over!</h1>
                    <h2>You lose! Better start learning Assembly 😭</h2>
                </>
            )
        }
        
        return null
    }

    const className = clsx("status",{win:isWin,lost:isLost,farewell:isFarewell})

    return (
        <div className={className} aria-live="polite" role="status"  >
            {renderGameStatus()}
        </div>
    )
}