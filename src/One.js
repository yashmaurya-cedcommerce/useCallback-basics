import React, { memo } from 'react'

function One(props) {
    return (
        <div className='oneContainer'>

            {console.log("rendering component one")}
            <h3>Component One</h3>
            <input type="text" className='oneInput' onChange={(event) => props.inputOneHandler(event)} />

        </div>
    )
}
export default memo(One)
