import React from 'react'

function Guess({ guess }) {
  return (
    <p className='guess'>
      {guess.map((l, i) => (
        <span key={i} className={`cell ${l?.status}`}>
          {l?.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
