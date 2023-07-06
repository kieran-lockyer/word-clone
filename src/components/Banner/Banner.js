import React from 'react'

function Banner({ type, show, children }) {
  if (!show) return null

  return <div className={`${type} banner`}>{children}</div>
}

export default Banner
