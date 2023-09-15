import { createApp } from "vue";

import ShopCatalog from './components/ShopCatalog.vue'

export default (selector) => createApp(ShopCatalog).mount(selector)
