import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Unlce from '../Uncle/Unlce';
import './Grandpa.css';

export const RingContext = createContext('Nanir Ring');
export const MoneyContext = createContext(555);

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    // const ring = 'Diamond Ring';

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father></Father>
                        <Unlce></Unlce>
                        <Aunty></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;

/*

Context API: 
1. Declare a context.
2. Set provider with value.
3. useContext.

*/