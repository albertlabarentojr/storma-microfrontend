import React, {useState, useEffect} from 'react'; // Must be imported for webpack to work
import Cart from './Cart'
import {subscribe, removeToCart} from './store';

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribe((newState) => {
            setCart([...newState.cart]);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <header className="bg-red-500 text-white p-4 mb-3">
                <h1 className="text-2xl text-center">Cart Summary</h1>
            </header>

            { cart.length === 0 && (
                <h2>Your cart is empty!</h2>
            ) }

            {cart.length > 0 && (
                <>
                    { cart.map(item => (
                        <Cart cart={item} key={item.sku} removeToCart={() => removeToCart(item)}></Cart>
                    ))}

                    <div className="flex justify-between mb-2">
                        <span>Total:</span>
                        <span className="font-semibold text-blue-500">$64.98</span>
                    </div>
                    <button className="w-full bg-blue-400 text-white rounded mt-4 p-2 hover:bg-blue-600" >Checkout</button>
                </>
            )}
        </>
    );
}

export default App;
