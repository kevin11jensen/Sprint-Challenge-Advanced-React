//Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`

import React from 'react';

export default class PlayerData extends React.Component {

    state = {
        loading: true,
        player: null
    };

    async componentDidMount() {
        const url = 'http://localhost:5000/api/players';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ player: data[0] });
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.player ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <div>{this.state.player.name}</div>
                        <div>{this.state.player.country}</div>
                        <div>{this.state.player.searches}</div>
                    </div>
                )}
            </div>
        )
            
    }

}