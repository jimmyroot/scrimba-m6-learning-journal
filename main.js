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

// Todo 1: burger menu close button
// Todo 2: link color on my work page
// Todo 3: weird line above featured image at smaller screen size
// Todo 4: Burger menu color
// Todo 5: nav link active behaviour in responsive test mode
// Todo 6: Test other browsers (safari/edge/firefox)
// Todo 7: Submit the bastard