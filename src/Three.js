import React, { memo } from 'react'

function Three(props) {
  return (
    <div className='threeContainer'>

        {console.log("rendering component three")}
        <h3>Component Three</h3>
        <h4>Component Two Input : {props.inputTwo}</h4>

    </div>
  )
}

export default memo(Three)
