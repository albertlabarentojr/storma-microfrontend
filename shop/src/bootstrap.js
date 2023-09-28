import './index.scss'
import { subscribe, searchCatalogs } from 'shopCatalog/store';
import mountCatalog from 'shopCatalog/mount';
import mountCart from 'shopCart/mount';
import mountAds from 'shopAds/mount';


mountCatalog('#shop-catalogs');
mountCart('#shop-cart');
mountAds('#shop-ads');

subscribe((payload) => {
    console.log('Catalogs has been updated!', payload?.catalogs);
})

let searchCallback = null
const debounce = (callback) => {
    if (searchCallback) {
        clearTimeout(searchCallback);
    }

    searchCallback = setTimeout(callback, 500);
}
document
    .getElementById('searchInput')
    .addEventListener(
        'input',
            event => debounce(() => searchCatalogs(event.target.value))
    );
