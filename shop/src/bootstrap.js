import mountCatalog from 'shopCatalog/mount'
import mountCart from 'shopCart/mount'
import 'shopAds/mount'
import { subscribe, searchCatalogs } from 'shopCatalog/store'
import './index.scss'

mountCatalog('#shop-catalogs')
mountCart('#shop-cart')

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
