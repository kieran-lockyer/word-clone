import React from 'react'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  const outcome = checkGuess(guess, answer)

  return (
    <p className='guess'>
      {outcome.map((l, i) => {
        if (l === null) {
          return <span key={i} className='cell' />
        }
        return (
          <span key={i} className={`cell ${l.status}`}>
            {l.letter}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
