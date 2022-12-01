export const getDaysToPrint = (value) => {
    const options = {
        // era: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        // weekday: 'short',
        // timezone: 'UTC',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
    };

    return value.toLocaleString('ru', options)
}
