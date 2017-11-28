import React from 'react'

function classNameForWidth(width) {
  if (!width) {
    return 'col'
  }
  else {
    return `col-${width}`
  }
}

function classNameForSm(size, width) {
  if (!width) {
    return ''
  }
  else if (width === true) {
    return `col-${size}`
  }
  else {
    return `col-${size}-${width}`
  }
}

const Col = ({
  children,
  width,
  sm,
  md,
  lg,
  xl
}) => (
  <div className={[ 
    classNameForWidth(width), 
    classNameForSm('sm', sm), 
    classNameForSm('md', md), 
    classNameForSm('lg', lg), 
    classNameForSm('xl', xl), 
    ].join(' ')}>
    { children }
  </div>
)

export default Col