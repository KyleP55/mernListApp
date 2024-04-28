import { useState } from "react";
import axios from 'axios';

function Form() {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState();

    async function onSubmitHandler(e) {
        e.preventDefault();
        try {
            const info = {
                text: text,
                owner: name
            };

            await axios.post(`${process.env.REACT_APP_API_URL}/items`, info);

            setText('');
            setName('');
            alert('Uploaded message')
        } catch (err) {
            alert('Something went wrong, please try again later');
        }
    }

    return (
        <form>
            <h1>Create a Message!</h1>

            <label>Text:</label>
            <input
                type="text"
                placeholder='Enter a Message'
                onChange={(e) => setText(e.target.value)}
                value={text}
            />

            <label>Name:</label>
            <input
                type="text"
                placeholder='Your Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <p className='errorMessage'>{error}</p>

            <button onClick={onSubmitHandler} className="button">Create</button>
        </form>
    );
}

export default Form;