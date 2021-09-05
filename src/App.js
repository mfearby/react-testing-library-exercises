import { useState } from 'react';

function App() {
    const [colour, setColour] = useState('red');
    const newColour = colour === 'red' ? 'blue' : 'red';
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <button
                style={{ backgroundColor: colour }}
                onClick={() => setColour(newColour)}
                disabled={disabled}
            >
                Change to {newColour}
            </button>
            <input
                type='checkbox'
                defaultChecked={disabled}
                aria-checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)} />
        </div>
    );
}

export default App;