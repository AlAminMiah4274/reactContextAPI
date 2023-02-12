import React from 'react';

const Cart = ({ cart, hanldeRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>please buy atleast one item !!!</p>
    }
    else {
        message = <p>Thanks for buying !</p>
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Order Quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => hanldeRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>3 jon k ki gift korba?</p> : <p>kino kino</p>}
            <p>And operator</p>
            {cart.length === 2 && <h2>Double Items</h2>}
            {cart.length === 4 || <p>Four Items na</p>}
        </div>
    );
};

export default Cart;