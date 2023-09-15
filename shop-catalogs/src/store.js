import { reactive, watchEffect } from 'vue'

export const store = reactive({
    catalogs: [],
});

export const loadCatalogs = async () => {};

export const setCatalogs = (catalogs = []) => {
    store.catalogs = catalogs;
};

export const getCatalogs = () => {
    return store.catalogs;
};

export const addCatalog = (catalog) => {
    store.catalogs = [...store.catalogs, catalog];
};

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
