import React from 'react'

export const Button = ({ text, style, key }) => {
  return (
    <div key={key} className={style}>{text}</div>
  )
}
