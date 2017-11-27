import React from 'react'

const Alert = ({
  children,
  subClass
}) => {

  let className = 'alert'
  if (subClass) {
    className += ` alert-${subClass}`
  }

  return (
    <div className={className}>
      { children }
    </div>
  )
}

export default Alert