import React from 'react'

const Bands = ({bands}) => {
    return (
        <div>
            {bands.map(b => <li>{b.name}</li>)}
        </div>
    )
}
export default Bands