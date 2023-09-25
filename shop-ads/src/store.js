import { reactive, watchEffect } from 'vue'

export const store = reactive({
    catalogs: [],
});

const subscribers = [];
export const subscribe = (callback) => {
    callback(store);
    subscribers.push(callback);
};

watchEffect(() => {
    const payload = {...store};

    subscribers.forEach(callback => callback(payload));
});

export default store;
