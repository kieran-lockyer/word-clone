import React, { useState } from 'react'

import { range, sample } from '../../utils'
import { checkGuess } from '../../game-helpers'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import Banner from '../Banner/Banner'
import Keyboard from '../Keyboard/Keyboard'

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS))
  const [guesses, setGuesses] = useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() =>
      range(5).map(() => ({ letter: '', status: '' }))
    )
  )
  const [turn, setTurn] = useState(0)

  const addGuess = (guess) => {
    const newGuesses = [...guesses]
    newGuesses[turn] = checkGuess(guess, answer)
    setGuesses(newGuesses)
    setTurn(turn + 1)
  }

  const newGame = () => {
    setAnswer(sample(WORDS))
    setGuesses(
      range(NUM_OF_GUESSES_ALLOWED).map(() =>
        range(5).map(() => ({ letter: '', status: '' }))
      )
    )
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

  const hasWon = guesses.some((guess) =>
    guess.every((l) => l.status === 'correct')
  )
  const isGameOver = hasWon || turn === NUM_OF_GUESSES_ALLOWED

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} isGameOver={isGameOver} />
      <Keyboard guesses={guesses} />
      <Banner show={isGameOver} type={hasWon ? 'happy' : 'sad'}>
        {hasWon ? successMessage : failMessage}
      </Banner>
    </>
  )
}

export default Game
