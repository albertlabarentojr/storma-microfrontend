import React from 'react'; // Must be imported for webpack to work

export default function({ cart }) {
    return (
        <div className="space-y-2 mb-4">
            <div className="flex justify-between">
                <span>{cart.product_name}</span>
                <span className="font-semibold">${cart.price}</span>
                <select className="border rounded w-20 text-center mr-4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600">Remove</button>
            </div>
        </div>
    );
};
