import { useState } from 'react';

function App() {
    const [colour, setColour] = useState('red');
    const newColour = colour === 'red' ? 'blue' : 'red';
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <button
                style={{ backgroundColor: disabled ? 'gray' : colour }}
                onClick={() => setColour(newColour)}
                disabled={disabled}
            >
                Change to {newColour}
            </button>
            <input
                type='checkbox'
                id='disable-button-checkbox'
                defaultChecked={disabled}
                aria-checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)} />
            <label htmlFor='disable-button-checkbox'>Disable button</label>
        </div>
    );
}

export default App;