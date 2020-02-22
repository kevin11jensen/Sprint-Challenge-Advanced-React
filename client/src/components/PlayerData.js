//Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`

import React from 'react';

export default class PlayerData extends React.Component {

    state = {
        loading: true
    }
    async componentDidMount() {
        const url = 'http://localhost:5000/api/players';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return <div>{this.state.loading ? <div>loading...</div> : <div>player..</div>}</div>
    }

}