import { reactive, watchEffect } from 'vue'

export const store = reactive({
    isCatalogFetching: true,
    catalogs: [],
});

export const loadCatalogs = async () => {
    store.isCatalogFetching = true;

    // Add some delay for demo purposes.
    setTimeout(async () => {
        const catalogs = await fetch("http://localhost:8082/tcg-catalogs.json");

        store.catalogs = await catalogs.json();

        store.isCatalogFetching = false;
    }, 1000);
};

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
