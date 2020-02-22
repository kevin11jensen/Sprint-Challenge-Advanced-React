import React from 'react';

const PlayerCard = props => {
    return (
        <div>
            <div>

                {props.player.map(item => {
                    return (
                        <div>
                            <div>
                            Name: {item.name}
                                </div>
                                <div>
                            Country: {item.country}
                                </div>
                                <div>
                            Searches: {item.searches}
                                </div>
                            </div>
                    );
                })}
            </div>

        </div>
    )
}

export default PlayerCard;