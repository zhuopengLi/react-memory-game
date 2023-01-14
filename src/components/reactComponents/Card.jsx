import React from 'react'

export default function Card({ card, handlePick, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handlePick(card)
        }
    }

    return (
        <div className='card'>
            <div>
                <img className={flipped ? "front flipped" : "front"} src={card.src} alt="card front" draggable="false" />
                <img className={flipped ? "back flipped" : "back"} src="/img/cover.png" alt="card back" onClick={handleClick} draggable="false" />
            </div>
        </div>
    )
}

