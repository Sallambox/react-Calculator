import React from 'react'

export function Screen({value}) {
    return(
        <div>
            <input type="number" value={value} disabled/>
        </div>
    )
}