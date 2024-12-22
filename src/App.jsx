import Header from "./components/Header"
import Status from "./components/Status"
import Language from "./components/LanguageComp"
import {languages} from "./language.js"
import { nanoid } from "nanoid"
import React from "react"
import WordCube from "./components/WordCube.jsx"
import Alphabet from "./components/Alphabet.jsx"

export default function App(){
    const languageComp = languages.map((prop)=> <Language key={nanoid()} {...prop}/>)

    const [currentWord,setCurrentWord] = React.useState("react")
    const wordArray = new Array(8).fill(0).map((_,index)=>
        index + 1 <= currentWord.length? currentWord[index].toUpperCase() : " "
    )
    const displayWord = wordArray.map((prop)=> <WordCube key={nanoid()} value={prop}/>)

    const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const alphabetDisplay = alphabet.split("").map((alpha) => <Alphabet key={alpha} value={alpha}/>)
    return (
        <main>
            <Header/>
            <Status/>
            <div className="language-list">
                {languageComp}
            </div>
            <div className="word-list">
                {displayWord}
            </div>
            <div className="user-input">
                {alphabetDisplay}
            </div>
            <button className="reset-button">New Game</button>
        </main>
    )
}