import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import Form from '../components/Form';

function HomePage() {
    const [list, setList] = useState([]);

    async function getList() {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/getAll/`);
        setList(res.data);
    }

    useEffect(() => {
        getList();
    }, []);

    return (<div className='row'>
        <Form submitted={getList} />
        <div className='col-lg-8 itemContainer'>
            {list && list.map((item) => {
                return (<div key={item._id} className='col-lg-6 itemCard'>
                    <p className='messageBox'>{item.text}</p>
                    <div className='signatureDiv'>
                        <h4>{item.owner}</h4>
                        <h4>04/20/2024</h4>
                    </div>
                </div>)
            })}
        </div>
    </div>)
}

export default HomePage;