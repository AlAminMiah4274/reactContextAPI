import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Cousin></Cousin>
                <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Aunty;