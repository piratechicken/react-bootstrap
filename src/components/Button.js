import React from 'react'

const Button = ({
  title,
  variation = 'dark'
}) => (
  <button className={ `btn btn-${variation}` }>{ title }</button>
)

export default Button