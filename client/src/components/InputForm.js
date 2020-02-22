import React from 'react';

const InputForm = (props) => {
    return (
        <div>
            <h1>Search for Players</h1>
            <input
             value={props.updateText}
             onChange={props.changeHandler}
            />
            <input>
                <button onClick={props.get}>Find Player</button>
            </input>
            
            
        </div>
    )
}

export default InputForm;
