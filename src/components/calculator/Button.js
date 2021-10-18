import React from 'react'

export function Button({value,funName}) {
    return(
        <div>
            <button className="full" name={value} value={value} onClick={funName} >{value}</button>
            {/* <label name={value} value={value}>{value}</label> */}
        </div>
    )
}