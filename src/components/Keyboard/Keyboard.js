import React from 'react'
import { KEYBOARD } from '../../constants'

function Keyboard({ guesses }) {
  const styleMap = guesses.reduce((acc, letterStatuses) => {
    letterStatuses.forEach((letterStatus) => {
      if (!letterStatus) return
      const { letter, status } = letterStatus

      if (acc[letter] === 'correct') return
      if (acc[letter] === 'misplaced' && status === 'incorrect') return

      if (status === 'correct') {
        acc[letter] = 'correct'
      }
      if (status === 'incorrect') {
        acc[letter] = 'incorrect'
      }
      if (status === 'misplaced') {
        acc[letter] = 'misplaced'
      }
    })
    return acc
  }, {})

  return (
    <div className='keyboard'>
      {KEYBOARD.map((row, i) => (
        <div key={i} className='keyboard-row'>
          {row.map((letter, j) => (
            <button key={j} className={`keyboard-key ${styleMap[letter]}`}>
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
