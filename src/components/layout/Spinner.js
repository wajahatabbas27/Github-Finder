import React from 'react'
import spinner from './spinner.gif'

const useStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}

const Spinner = () => {
    return (
        <>
            <img src={spinner} alt="Loading" style={useStyle} />
        </>
    )
}

export default Spinner;
