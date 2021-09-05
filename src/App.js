import { useState } from 'react';

export function replaceCamelWithSpaces(colourName) {
    return colourName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
    const [colour, setColour] = useState('MediumVioletRed');
    const newColour = colour === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
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