import Header from "./components/Header"
import Status from "./components/Status"
import WordCube from "./components/WordCube.jsx"
import Alphabet from "./components/Alphabet.jsx"
import Language from "./components/LanguageComp"
import {languages} from "./language.js"
import { nanoid } from "nanoid"
import React, { useEffect } from "react"
import {getFarewellText} from "./util.js"
import { words } from "./words.js"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



export default function App(){

    function getRandomWord() {
        return words.at(Math.floor(Math.random()*words.length)).toUpperCase()
    }
    // state variable
    const [userGuess,setUserGuess] = React.useState([])
    const [currentWord,setCurrentWord] = React.useState(()=>getRandomWord())

    // derived variable 
    const wrongCount = userGuess.reduce(((prev,curr) => (currentWord.includes(curr) ? 0 : 1) + prev),0)
    const languageComp = languages.map((prop,index)=> <Language key={index} {...prop} isLost= {index < wrongCount}/>)
    const isGameWon = currentWord.split("").every((word)=>userGuess.includes(word))
    const isGameLost = wrongCount >= languages.length - 1
    const isGameOver = isGameLost || isGameWon
    const lastGuess = userGuess[userGuess.length - 1]
    const isLastGuessCorrect = lastGuess!=undefined && currentWord.includes(lastGuess)
    const numGuessesLeft = languages.length - 1

    const { width, height } = useWindowSize()

    function reset() {
        setCurrentWord(getRandomWord())
        setUserGuess([])
    }

    const farewellMessage = React.useMemo(
        () => {
            return wrongCount > 0 && wrongCount < languages.length?
            getFarewellText(languages[wrongCount-1].name):
            ""
        },[wrongCount]  
    )

    function guessing(alpha) {
        setUserGuess((prev) => 
            prev.includes(alpha)?
            prev:
            [...prev,alpha])
        
    }


    const displayWord = currentWord.split("").map((prop)=> 
    <WordCube key={nanoid()} value={prop} 
            guessed={userGuess.includes(prop)} 
            isGameLost={isGameLost} 
            isIncluded = {currentWord.includes(prop)}
            />)


    const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const alphabetDisplay = alphabet.split("").map((alpha) => 
    <Alphabet key={alpha} value={alpha} handle={guessing} valid={
        currentWord.includes(alpha) && userGuess.includes(alpha)?
        1:
        userGuess.includes(alpha)?
        -1:
        0}
        isGameOver={isGameOver}
        />)

    return (
        <main>
            <Header/>
            {isGameWon?<Confetti width={width} height={height} recycle={false} numberOfPieces={1000}/>:null}
            {<Status isWin={isGameWon} isLost={isGameLost} isLastGuessCorrect ={isLastGuessCorrect} farewellMessage={farewellMessage}/>}
            <div className="language-list">
                {languageComp}
            </div>
            <div className="word-list">
                {displayWord}
            </div>
            {/* Combined visually-hidden aria-live region for status updates */}
            <section 
                className="sr-only" 
                aria-live="polite" 
                role="status"
            >
                <p>
                    {currentWord.includes(lastGuess) ? 
                        `Correct! The letter ${lastGuess} is in the word.` : 
                        `Sorry, the letter ${lastGuess} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>
                <p>Current word: {currentWord.split("").map(letter => 
                userGuess.includes(letter) ? letter + "." : "blank.")
                .join(" ")}</p>
            
            </section>

            <div className="user-input">
                {alphabetDisplay}
            </div>
            {isGameOver?<button className="reset-button" onClick={reset}>New Game</button>:null}
        </main>
    )
}