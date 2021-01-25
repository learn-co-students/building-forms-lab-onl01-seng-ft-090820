import React from 'react';

const Bands = props => {


    console.log(props)
return (

    <div>
        {props.bands.map((band, key) => {
           return <li key={key}>{band.name}</li> 
        })}

    </div>
)
}

export default Bands