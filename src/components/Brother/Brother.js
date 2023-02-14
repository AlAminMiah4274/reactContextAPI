import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h4>Brother</h4>
            <p><small>House: {house}</small></p>
        </div>
    );
};

export default Brother;