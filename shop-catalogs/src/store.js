import { reactive, watchEffect } from 'vue'

export const store = reactive({
    isCatalogFetching: true,
    catalogs: [],
    filteredCatalogs: [],
});

export const loadCatalogs = async () => {
    store.isCatalogFetching = true;

    // Add some delay for demo purposes.
    setTimeout(async () => {
        const response = await fetch("http://localhost:8082/tcg-catalogs.json");

        const catalogs = await response.json();
        store.catalogs = catalogs;
        store.filteredCatalogs = catalogs;

        store.isCatalogFetching = false;
    }, 1000);
};

const filterCatalogs = (searchText) => {
    if (!searchText) {
        return store.catalogs;
    }

    const searchRe = new RegExp(searchText, "i");

    return [...store.catalogs].filter(({ product_name }) => product_name.match(searchRe));
}

export const searchCatalogs = (searchText) => {
    store.filteredCatalogs = filterCatalogs(searchText);
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
