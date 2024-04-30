import { useState } from "react";
import axios from 'axios';

function Form({ submitted }) {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState();

    async function onSubmitHandler(e) {
        e.preventDefault();
        console.log('pressed')
        try {
            const info = {
                text: text,
                owner: name
            };

            await axios.post(`${process.env.REACT_APP_API_URL}/items`, info);

            setText('');
            setName('');
            alert('Uploaded message');
            submitted();
        } catch (err) {
            alert('Something went wrong, please try again later');
        }
    }

    return (
        <form className='col-lg-4'>
            <h1 className="removeTopMarg">Post a Message!</h1>

            <label>Text:</label>
            <textarea
                type="text"
                placeholder='Enter a Message'
                onChange={(e) => setText(e.target.value)}
                value={text}
                className='bigBox'
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