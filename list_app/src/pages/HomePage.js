import { useEffect, useState } from 'react';
import axios from 'axios';

import Form from '../components/Form';

function HomePage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        async function getList() {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/getAll/`);
            setList(res.data);
        }

        getList();
    }, []);

    return (<>
        <Form />
        <div>
            {list && list.map((item) => {
                return (<div key={item._id}>
                    <h3>{item.owner}</h3>
                    <p>{item.text}</p>
                </div>)
            })}
        </div>
    </>)
}

export default HomePage;