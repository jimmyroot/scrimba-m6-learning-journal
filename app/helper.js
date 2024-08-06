export {
    dateFormatted,
    getRenderSize,
    getRandomBetweenAndIncluding,
    shuffleArray
}

// Takes a date and returns it formatted like '8 March 2024' 
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

// Used to decide how many recent posts we'll render
const getRenderSize = width => {
    if (width <= 640) {
        return 'small'
    } else if (width <= 1024) {
        return 'medium'
    } else {
        return 'large'
    }
}

// Returns a random number between and including the min and max
const getRandomBetweenAndIncluding = (min, max) => {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

// Takes an array and returns it with the order shuffled
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}