import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('/todos')
            .then(res => console.log(res));
    }, [])
    
    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    )
}

export default App;