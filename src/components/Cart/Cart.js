import React from 'react';
import './Cart.css';

const Cart = ({ cart, hanldeRemoveItem }) => {

    let message;
    if (cart.length >= 3) {
        message = <p>Don't buy more</p>
    }
    else {
        message = <p>Buy more</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? 'blue' : 'orange'}>Order Summary</h3>
            <p className={`bold ${cart.length === 3 ? 'purple' : 'yellow'}`}>Order Quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => hanldeRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                // message
            }
            {/* {cart.length === 2 ? <p>buy more for me</p> : ''} */}
            {/* {cart.length === 2 && <p>I want to buy</p>} */}
            {cart.length === 3 || <p>buy more</p>}
        </div>
    );
};

export default Cart;

/*
Conditinal Rendering: 
1. Use element in a variable and then use if-else to set value.
2. Ternary operator condition ? true : false.
3. && operator (if condition is true, I want to display something).
4. || operator (if condition is false, I want to display something).
*/