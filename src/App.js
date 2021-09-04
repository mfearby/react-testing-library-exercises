import { useState } from 'react';

function App() {
    const [colour, setColour] = useState('red');
    const newColour = colour === 'red' ? 'blue' : 'red';

    return (
        <div>
            <button
                style={{ backgroundColor: colour }}
                onClick={() => setColour(newColour)}
            >
                Change to {newColour}
            </button>
        </div>
    );
}

export default App;