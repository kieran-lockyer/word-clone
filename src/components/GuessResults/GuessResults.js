import React from 'react'
import Guess from '../Guess/Guess'

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
    </div>
  )
}

export default GuessResults
