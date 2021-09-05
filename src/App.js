import { useState } from 'react';

function App() {
    const [colour, setColour] = useState('red');
    const newColour = colour === 'red' ? 'blue' : 'red';
    const [buttonDisabled, setButtonDisabled] = useState(false);

    return (
        <div>
            <button
                style={{ backgroundColor: colour }}
                onClick={() => setColour(newColour)}
                disabled={buttonDisabled}
            >
                Change to {newColour}
            </button>
            <input
                type='checkbox'
                onChange={(e) => setButtonDisabled(e.target.checked)} />
        </div>
    );
}

export default App;