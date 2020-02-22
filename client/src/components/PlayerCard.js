import React from 'react';

const PlayerCard = props => {

    return (
        <div>
            {props.playerData.map(item => {
                return (
                    <div className="player-card">
                        <h1>{item.name}</h1>
                        <h2>{item.country}</h2>
                        <p>Number of Searches: {item.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;