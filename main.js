import './css/styles.css'

import { header } from './layout/header'
import { footer } from './layout/footer'
import { router } from './app/router'

// Anonymous function to 'boot up' the app
(() => {
    document.querySelector('#app').before(header.get())
    document.querySelector('#app').after(footer.get())
    header.registerEventListeners()
    router.renderStartPage()
    router.registerRouterWithBrowserNavigation()
})()