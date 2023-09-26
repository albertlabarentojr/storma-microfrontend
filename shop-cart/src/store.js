const sharedState = {
    cart: [],
};

export function getState() {
    return sharedState;
}

export function addToCart(catalog) {
    sharedState.cart.push(catalog);
    notifySubscribers();
}

export function removeToCart(catalog) {
    const index = sharedState.cart.findIndex(item => item.sku === catalog.sku);

    sharedState.cart.splice( index );

    notifySubscribers();
}

let subscribers = [];

export function subscribe(callback) {
    subscribers.push(callback);

    return () => {
        const index = subscribers.indexOf(callback);
        if (index > -1) {
            subscribers.splice(index, 1);
        }
    };
}

function notifySubscribers() {
    subscribers.forEach((callback) => callback(sharedState));
}

