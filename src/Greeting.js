import { useState } from 'react';

function Greeting() {
    const [name, setName] = useState('');

    const handleChange = (event) => setName(event.target.value);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
            />
            <h2>Hello, {name ? name : 'Guest'}!</h2>
        </div>
    );
}

export default Greeting;
