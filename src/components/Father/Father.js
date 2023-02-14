import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { RingContext } from '../Grandpa/Grandpa';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    const [house] = useContext(RingContext)
    return (
        <div>
            <h4>Father</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;