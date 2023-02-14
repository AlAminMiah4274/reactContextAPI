import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Special from '../Special/Special';

const Myself = () => {
    const [house] = useContext(RingContext);
    return (
        <div>
            <h4>Myself</h4>
            <p><small>House: {house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Myself;