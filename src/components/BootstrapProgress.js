import React from 'react'

const BootstrapProgress = ({ progress }) => {

  let divStyle = {
    width: `${progress}%` 
  }

  return (
    <div className='progress'>
      <div className='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100' style={ divStyle } >
        { progress }%
      </div>
    </div>
  )
}

// {`width=${ progress }`}

export default BootstrapProgress