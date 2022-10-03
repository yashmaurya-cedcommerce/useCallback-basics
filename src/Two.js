import React from 'react'

export default function Two(props) {
    return (
        <div className='twoContainer'>

            {console.log("rendering component two")}
            <h3>Component Two</h3>
            <input type="text" className='twoInput' onChange={(event) => props.inputTwoHandler(event)} />
            <h4>Component One Input : {props.inputOne}</h4>

        </div>
    )
}
