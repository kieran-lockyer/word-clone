import React, { useState } from 'react'

import { range, sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import Banner from '../Banner/Banner'
import Keyboard from '../Keyboard/Keyboard'

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS))
  const [guesses, setGuesses] = useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => '')
  )
  const [turn, setTurn] = useState(0)

  const hasWon = guesses.includes(answer)
  const isGameOver = hasWon || turn === NUM_OF_GUESSES_ALLOWED

  const addGuess = (guess) => {
    const newGuesses = [...guesses]
    newGuesses[turn] = guess
    setGuesses(newGuesses)
    setTurn(turn + 1)
  }

  const newGame = () => {
    setAnswer(sample(WORDS))
    setGuesses(range(NUM_OF_GUESSES_ALLOWED).map(() => ''))
    setTurn(0)
  }

  const successMessage = (
    <>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{turn} guesses</strong>
      </p>
      <button type='button' className='new-game-button' onClick={newGame}>
        New Game
      </button>
    </>
  )

  const failMessage = (
    <>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button type='button' className='new-game-button' onClick={newGame}>
        New Game
      </button>
    </>
  )

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} isGameOver={isGameOver} />
      <Keyboard guesses={guesses} answer={answer} />
      <Banner show={isGameOver} type={hasWon ? 'happy' : 'sad'}>
        {hasWon ? successMessage : failMessage}
      </Banner>
    </>
  )
}

export default Game
