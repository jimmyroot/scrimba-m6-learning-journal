export { dateFormatted, getRenderSize }

const dateFormatted = date => {
    const locale = 'en-GB'
    const optDayMonth = {
        month: 'short',
        day: 'numeric'
    }
    const optYear = { 
        year: 'numeric'
     }
    const dayMonth = date.toLocaleDateString(locale, optDayMonth)
    const year = date.toLocaleDateString(locale, optYear)

    return `${(dayMonth + `, ` + year).toUpperCase()}`
}

const getRenderSize = width => {
    if (width <= 640) {
        return 'small'
    } else if (width <= 1214) {
        return 'medium'
    } else {
        return 'large'
    }
}