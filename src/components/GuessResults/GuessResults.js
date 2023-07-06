import React from 'react'
import Guess from '../Guess/Guess'

function GuessResults({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResults
