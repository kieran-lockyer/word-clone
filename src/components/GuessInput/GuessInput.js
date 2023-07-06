import React, { useState } from 'react'

function GuessInput({ addGuess, isGameOver }) {
  const [guess, setGuess] = useState('')

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addGuess(guess)
    setGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        value={guess}
        onChange={handleChange}
        pattern='[A-Z]{5}'
        title='Please enter a 5-letter word, using only letters A-Z.'
        maxLength={5}
        disabled={isGameOver}
        required
      />
    </form>
  )
}

export default GuessInput
