import React from 'react';
import './css/card.css'

const Card = ({
  children
}) => (
  <div className='card'>
    <div className='cardBody'>
      { children }
    </div>
  </div>
)

const CardItem = ({
 children,
 subClass
}) => {

  let classForCard = 'card-'
  let Style = 'div'

  if (subClass === 'block') {
    classForCard += 'block'

  }
  else if (subClass === 'title') {
    classForCard += 'title'
    Style = 'h4'
  }
  else if (subClass === 'text') {
    classForCard += 'text'
  }

  return (
    <Style className={ classForCard }>
      { children }
    </Style>
  )
}

export { Card, CardItem }