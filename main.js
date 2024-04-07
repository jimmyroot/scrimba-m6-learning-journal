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

// Last few ToDos
// [x] Todo 1: burger menu close button
// [x] Todo 2: link color on my work page
// [x] Todo 3: weird line above featured image at smaller screen size
// [x] Todo 4: Burger menu color
// [x] Todo 5: nav link active behaviour in responsive test mode
// [x] Todo 6: Test other browsers (safari/edge/firefox)
// [x] Todo 7: Finish adding comments