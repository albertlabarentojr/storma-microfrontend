import React from 'react'; // Must be imported for webpack to work

export default function({ cartItem, removeToCart, updateCartItem, index }) {
    const onChangeQuantity = (quantity) => {
        cartItem.quantity = quantity;
        cartItem.total = parseInt(cartItem.price) * parseInt(cartItem.quantity);

        updateCartItem({...cartItem}, index);
    };

    return (
        <div className="space-y-2 mb-4">
            <div className="grid grid-cols-12">
                <span className="col-span-4">{cartItem.product_name}</span>
                <span className="font-semibold col-span-3 text-center">${cartItem.total}</span>
                <select className="border rounded w-20 text-center mr-4 col-span-2" onChange={event => onChangeQuantity(event.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 col-span-3" onClick={removeToCart}>Remove</button>
            </div>
        </div>
    );
};
