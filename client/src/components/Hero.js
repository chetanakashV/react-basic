import React from 'react'


const Hero = ({heroname}) => {

    if(heroname === 'joker'){
        throw new Error ('joker is not a hero')
    }

    return (
        <h1>
        {heroname}
        </h1>
    )
}

export default Hero