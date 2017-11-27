import React from 'react'
import './css/progress.css'

const Progress = ({ progress }) => {

  let className1, className2, className3, className4, completion

  if (progress === 1) {
    className1 = 'segment-complete'
  }
  else if (progress === 2) {
    className1 = 'segment-complete'
    className2 = 'segment-complete'
  }
  else if (progress === 3) {
    className1 = 'segment-complete'
    className2 = 'segment-complete'
    className3 = 'segment-complete'
  }
  else if (progress === 4) {
    className1 = 'segment-complete'
    className2 = 'segment-complete'
    className3 = 'segment-complete'
    className4 = 'segment-complete'
  }

  if (progress) {
    completion = progress    
  }
  else {
    completion = 0
  }

  return (
    <div className='progressbar'>
      <div><p>You have completed { completion } of 4 steps.</p></div>
      <div className='bar'>
        <div className={`segment ${className1}`} />
        <div className={`segment ${className2}`} />
        <div className={`segment ${className3}`} />
        <div className={`segment ${className4}`} />
      </div>
    </div>
  )
}


export default Progress